from flask import Flask

app = Flask(__name__)

# members api route
@app.route("/members")
def members():
    return {"members": ["Member 1", "Member 2", "Member 3"]}

if __name__ == "__main__":
    app.run(debug=True)