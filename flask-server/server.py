from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
from FlightRadar24 import FlightRadar24API
import json

app = Flask(__name__)
CORS(app)

# members api route
@app.route("/members")
def members():
    return {"members": ["Member 1", "Member 2", "Member 3"]}

# flights api route
@app.route("/flights", methods=['POST'])
def get_flight_data():
    try:
        if request.method == "POST":
            fr_api = FlightRadar24API()

            reactData = request.get_json()

            airportIATA = str(reactData.get('key'))

            airport_details = fr_api.get_airport_details(airportIATA)['airport']['pluginData']['schedule']

            flightsJSON = json.dumps(airport_details)

            return jsonify({'flightData': flightsJSON})
    except Exception as e:
        return jsonify({"error": str(e)})
    return jsonify({'nothing': 'happened'})
    

if __name__ == "__main__":
    app.run(debug=True)