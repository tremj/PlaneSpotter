from flask import Flask, request, jsonify
from FlightRadar24 import FlightRadar24API
import json

app = Flask(__name__)

# members api route
@app.route("/members")
def members():
    return {"members": ["Member 1", "Member 2", "Member 3"]}

# flights api route
@app.route("/flights", methods=['GET', 'POST'])
def get_flight_data():
    fr_api = FlightRadar24API()

    airportIATA = request.get_json()
    print(airportIATA)

    airport_details = fr_api.get_airport_details(airportIATA)['airport']['pluginData']['schedule']
    arrivalJSON = json.loads(airport_details['arrivals'])
    # departureJSON = json.dumps(airport_details['departures'])

    return jsonify({'arrivalData': arrivalJSON})

if __name__ == "__main__":
    app.run(debug=True)