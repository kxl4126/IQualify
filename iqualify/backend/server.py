from flask import Flask
from flask import request
from flask import jsonify
import requests
import re

app = Flask(__name__)

# Constants
geoip_key = "7943c8f94bb942ffb4e0e7a711183d22399eebe071ae67b21396d99ab2b10d38"
valid_ip = re.compile('''^(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.( 
            25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.( 
            25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.( 
            25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)$''')

@app.route("/")
def main():
    return "hello world"

@app.route("/geoip/")
@app.route("/geoip/<ip>")
def geoip(ip=None):
    resp = {
        "ip": None,
        "zip": None,
        "state": None,
        "city": None,
        "country": None
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
    else:
        resp["ip"] = "invalid"
    
    return jsonify(resp)
