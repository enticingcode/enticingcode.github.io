
async function fetchCityData(city) {

    // CITY IS GRABBED FROM INDEX.JS INVOKATION HERE DONT GET CONFUSED //
    let lat;
    let lon;

    let cityAPI = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city},&limit=4&appid=ff42af52d27576f36d9217a0f6903066`, { mode: 'cors' })
    let data = await cityAPI.json()
    console.log(data);


    // returns coordinates //
    let coordinates = await function (data) {
        for (let [key, value] of Object.entries(data[0])) {
            if (key == 'lat') {
                lat = value;
            }
            if (key == 'lon') {
                lon = value;
            }
        }
    };
    console.log(coordinates(data));

    console.log(lat, lon);
}


// function goes here, but the lat and lon stay within the fetchCityData function // 

async function fetchWeatherData(lat, lon) {

}



export { fetchCityData, fetchWeatherData };