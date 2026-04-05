window.onload = function () {
    let weather = document.getElementById("weather").innerText;
    let body = document.getElementById("body");
    // Get sunrise & sunset
    let sunrise = parseInt(document.getElementById("sunrise").value);
    let sunset = parseInt(document.getElementById("sunset").value);
    let current = Math.floor(Date.now() / 1000);
    let isNight = current < sunrise || current > sunset;

    // 🌈 Background Logic
    if (weather.includes("Rain") && isNight) {
        body.className = "rainy-night";
    }
    else if (weather.includes("Rain")) {
        body.className = "rainy";
    }
    else if (weather.includes("Clear") && isNight) {
        body.className = "night";
    }
    else if (weather.includes("Clear")) {
        body.className = "sunny";
    }
    else if (weather.includes("Cloud")) {
        body.className = "cloudy";
    }
    else if (weather.includes("Smoke") || weather.includes("Haze")) {
        body.className = "smoke";
    }
    else {
        body.className = "cloudy";
    }

    // 🌤️ ICON LOGIC (UPDATED 🔥)
    let iconDiv = document.getElementById("icon");

    if (weather.includes("Rain")) {
        iconDiv.innerHTML = `
        <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_jmBauI.json"
        background="transparent" speed="1" style="width: 100px;" loop autoplay></lottie-player>`;
    }
    else if (weather.includes("Clear")) {
        iconDiv.innerHTML = `
        <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_Stdaec.json"
        background="transparent" speed="1" style="width: 100px;" loop autoplay></lottie-player>`;
    }
    else if (weather.includes("Cloud")) {
        iconDiv.innerHTML = `
        <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_dgjK9i.json"
        background="transparent" speed="1" style="width: 100px;" loop autoplay></lottie-player>`;
    }
    else if (weather.includes("Smoke") || weather.includes("Haze")) {
        iconDiv.innerHTML = `
        <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_ukkmv3.json"
        background="transparent" speed="1" style="width: 100px;" loop autoplay></lottie-player>`;
    }
    else {
        iconDiv.innerHTML = `<p style="font-size:40px;">🌫️</p>`;
    }
};
