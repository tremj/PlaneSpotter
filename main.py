from FlightRadar24 import FlightRadar24API
import json
from flask import Flask, render_template, stream_with_context, Response
import sys

app = Flask(__name__)

def gather_flight_data(airportICAO):
    fr_api = FlightRadar24API()

    airport_details = fr_api.get_airport_details(airportICAO)['airport']['pluginData']['schedule']
    arrivalJSON = json.dumps(airport_details['arrivals'])
    departureJSON = json.dumps(airport_details['departures'])
    groundJSON = json.dumps(airport_details['ground'])

    return arrivalJSON, departureJSON, groundJSON

def find_ith_flight(airportICAO, n):
    # testing using arrivals
    arrivals = gather_flight_data(airportICAO)[0]
    for flights in arrivals['data']:
        if n == 0:
            return flights
        n -= 1
    return 'no such flight'

@app.route('/')
def hello():
    return render_template('index.html')

data_to_pass_back = "Send to node process"

input = sys.argv[1]
output = gather_flight_data()[0]
print(output)

sys.stdout.flush()