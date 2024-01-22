from flask import Flask
from FlightRadar24 import FlightRadar24API
import json
app = Flask(__name__)

# members api route
@app.route("/members")
def members():
    return {"members": ["Member 1", "Member 2", "Member 3"]}

# flights api route
@app.route("/flights")
def get_flight_data(airportIATA):
    fr_api = FlightRadar24API()

    airport_details = fr_api.get_airport_details(airportIATA)['airport']['pluginData']['schedule']
    arrivalJSON = json.dumps(airport_details['arrivals'])
    departureJSON = json.dumps(airport_details['departures'])

    return arrivalJSON, departureJSON

if __name__ == "__main__":
    app.run(debug=True)