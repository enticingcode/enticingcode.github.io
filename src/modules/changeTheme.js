function backgroundTheme(weather) {
    const body = document.querySelector("body");
    body.className = "";

    if (weather.includes("Clear")) body.classList.add("sunnyDay")
    if (weather.includes("Cloud")) body.classList.add("cloudy")
    if (weather.includes("Rain")) body.classList.add("rainyDay")
    if (weather.includes("Snow")) body.classList.add("snowyDay")
}


export { backgroundTheme }