from flask import Flask
from flask import request
from flask import jsonify
from flask_cors import CORS
import requests
import re
import psycopg2

app = Flask(__name__)
CORS(app)

# Database

# Cockroach DB
'''
POSTGRES = {
    'user': 'iqualify-user',
    'pw': 'Nu-uj0kMvIabyHz',
    'db': 'iqualifydb',
    'host': 'iqualify-sql-main-5ww.gcp-us-west2.cockroachlabs.cloud',
    'port': '26257',
    'sslmode': 'disable'
}
'''

# Cloud SQL
POSTGRES = {
    'user': 'iqualify-user',
    'pw': 'Nu-uj0kMvIabyHz',
    'db': 'iqualifydb',
    'host': '34.94.47.65',
    'port': '5432',
    'sslmode': 'require'

}

try:
    connection = psycopg2.connect(user = POSTGRES["user"],
                                  password = POSTGRES["pw"],
                                  host = POSTGRES["host"],
                                  port = POSTGRES["port"],
                                  database = POSTGRES["db"],
                                  sslmode = POSTGRES["sslmode"])
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
    args = request.get_json()
    resp = geoip()
    ip = resp["ip"]
    userZip = resp["zip"]
    city = resp["city"]
    country = resp["country"]
    lat = resp["latitude"]
    lon = resp["longitude"]
    compensation = None
    if request.method == "POST":
        status = args["status"]
        state = args["state"]
        if args["compensation"] != None and (isinstance(float, args["compensation"]) or args["compensation"].isnumeric()):
            compensation = float(args["compensation"])
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
