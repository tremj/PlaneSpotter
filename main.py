from FlightRadar24 import FlightRadar24API
import json

fr_api = FlightRadar24API()

airport_details = fr_api.get_airport_details('YUL')['airport']['pluginData']['schedule']

with open('arrivaldata.json', 'w') as f:
    json.dump(airport_details['arrivals'], f)

with open('departuredata.json', 'w') as f:
    json.dump(airport_details['departures'], f)

with open('grounddata.json', 'w') as f:
    json.dump(airport_details['ground'], f)

print(airport_details.keys())