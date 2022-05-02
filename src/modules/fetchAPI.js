
async function fetchCityData(city) {
    let lat;
    let lon;
    try {
        let cityAPI = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city},&limit=4&appid=ff42af52d27576f36d9217a0f6903066`, { mode: 'cors' });
        let rawData = await cityAPI.json();
        // console.log(rawData);

        let cityData = function (data) {
            for (let [key, value] of Object.entries(data[0])) {
                if (key == 'lat') {
                    lat = value;
                }
                if (key == 'lon') {
                    lon = value;
                }
            }
            let cityInfo = data[0];
            return { lat, lon, cityInfo };
        }
        return cityData(rawData);

    } catch (err) {
        alert('City not recognized, please try again. e.g. Chicago, IL');
    }
}

async function getWeatherData(cityName) {
    let coordinates = await fetchCityData(cityName);
    let fetchWeather = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&units=imperial&appid=ff42af52d27576f36d9217a0f6903066`, { mode: 'cors' })
    let weatherData = await fetchWeather.json();
    console.log(weatherData);
    return weatherData
}


export { fetchCityData, getWeatherData };