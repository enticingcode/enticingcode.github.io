
async function fetchCityData(city) {

    // CITY IS GRABBED FROM INDEX.JS INVOKATION HERE DONT GET CONFUSED //
    let lat;
    let lon;

    let cityAPI = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city},&limit=4&appid=ff42af52d27576f36d9217a0f6903066`, { mode: 'cors' })
    let data = await cityAPI.json();

    // returns coordinates //
    let coordinates = function (data) {
        for (let [key, value] of Object.entries(data[0])) {
            if (key == 'lat') {
                lat = value;
            }
            if (key == 'lon') {
                lon = value;
            }
        }
        return { lat, lon }
    };

    let getWeatherData = async function () {
        let fetchWeather = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates(data).lat}&lon=${coordinates(data).lon}&appid=ff42af52d27576f36d9217a0f6903066`, { mode: 'cors' })
        // console.log(coordinates(data).lat);
        let weatherData = await fetchWeather.json();
        console.log(weatherData);
    }

    getWeatherData();

}



export { fetchCityData };