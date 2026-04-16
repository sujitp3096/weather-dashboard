from flask import Flask, render_template, request
import requests

app = Flask(__name__)

API_KEY = "6de4db636699a8a96bd2d9660f749dda"

@app.route("/", methods=["GET", "POST"])
def home():
    city = "Pune"  # default ci

    if request.method == "POST":
        city = request.form["city"].title()

    url = f"http://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric"
    response = requests.get(url)
    data = response.json()

    print(data)  # debug

    if data.get("cod") == 200:
        weather = data["weather"][0]["main"]
        description = data["weather"][0]["description"]
        temp = round(data["main"]["temp"])

        # 🌅 Get sunrise & sunset
        sunrise = data["sys"]["sunrise"]
        sunset = data["sys"]["sunset"]
    else:
        weather = "Error"
        description = "City not found"
        temp = "--"
        sunrise = sunset = 0

    return render_template("index.html",weather=weather,description=description,temp=temp,city=city,sunrise=sunrise,sunset=sunset)
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=10000)
