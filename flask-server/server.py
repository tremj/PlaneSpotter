from flask import Flask
from FlightRadar24 import FlightRadar24API
app = Flask(__name__)

def gather_airports():
    frapi = FlightRadar24API()

# members api route
@app.route("/members")
def members():
    return {"members": ["Member 1", "Member 2", "Member 3"]}

if __name__ == "__main__":
    app.run(debug=True)