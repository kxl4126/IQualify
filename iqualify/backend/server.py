from flask import Flask
from flask import request
from flask import jsonify
import requests
import re
import psycopg2
import signal

app = Flask(__name__)

# Database
POSTGRES = {
    'user': 'iqualify-user',
    'pw': 'Nu-uj0kMvIabyHz',
    'db': 'iqualifydb',
    'host': 'iqualify-sql-main-5ww.gcp-us-west2.cockroachlabs.cloud',
    'port': '26257',
}

db_uri = 'postgresql://%(user)s:%(pw)s@%(host)s:%(port)s/%(db)s' % POSTGRES
try:
    connection = psycopg2.connect(user = POSTGRES["user"],
                                  password = POSTGRES["pw"],
                                  host = POSTGRES["host"],
                                  port = POSTGRES["port"],
                                  database = POSTGRES["db"])
    cursor = connection.cursor()
except (Exception, psycopg2.Error) as error :
    raise Exception("Error connecting to postgreSQL.")

# Constants
geoip_key = "7943c8f94bb942ffb4e0e7a711183d22399eebe071ae67b21396d99ab2b10d38"
valid_ip = re.compile('''^(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.( 
            25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.( 
            25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.( 
            25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)$''')

@app.route("/", methods=["POST"])
def main():
    resp = geoip()
    ip = resp["ip"]
    userZip = resp["zip"]
    city = resp["city"]
    country = resp["country"]
    lat = resp["latitude"]
    lon = resp["longitude"]
    compensation = None
    if request.method == "POST":
        status = request.args.get("status")
        state = request.args.get("state")
        if request.args.get("compensation") != None and request.args.get("compensation").isnumeric():
            compensation = float(request.args.get("compensation"))
            if status in ["eligible", "not citizen", "employed", "other"]:
                cursor.execute(f'''INSERT INTO compensation (ip, status, lat, lon, zip, city, state, country, compensation) VALUES
                                                        ('{ip}', '{status}', '{lat}', '{lon}', '{userZip}', '{city}', '{state}', '{country}', {compensation})''')
                connection.commit()
            else:
                return "Status must be 'eligible', 'not citizen', 'employed', or 'other'.", 400
        else:
            return "Compensation must be a number.", 400
    else:
        return "Only accepts post requests.", 400
    return "", 200

def geoip(ip=None):
    resp = {
        "ip": None,
        "zip": None,
        "state": None,
        "city": None,
        "country": None,
        "latitude": None,
        "longitude": None
    }

    if ip == None:
        ip = request.remote_addr
    if valid_ip.match(ip):
        geo_data = requests.get("http://api.ipinfodb.com/v3/ip-city/", params={
            "key": geoip_key,
            "ip": ip,
            "format": "json"
        }).json()
        resp["ip"] = ip
        resp["zip"] = geo_data["zipCode"]
        resp["state"] = geo_data["regionName"]
        resp["city"] = geo_data["cityName"]
        resp["country"] = geo_data["countryName"]
        resp["latitude"] = geo_data["latitude"]
        resp["longitude"] = geo_data["longitude"]
    else:
        resp["ip"] = "invalid"
    
    return resp

if __name__ == "__main__":
    app.run(ssl_context='adhoc')
