
async function fetchyCityData(city) {

    // CITY IS GRABBED FROM INDEX.JS INVOKATION HERE DONT GET CONFUSED //
    let lat;
    let lon;


    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city},&limit=4&appid=ff42af52d27576f36d9217a0f6903066`, { mode: 'cors' })

        .then(function (response) {
            return response.json();
        })
        .then(function (cityArray) {

            // gathers city object //
            console.log(cityArray[0]);
            // loops through city object //
            for (let item in cityArray[0]) {
                if (item == "lat") {
                    lat = Object.values(item);
                    console.log(lat);
                }
            }

        })
}


async function fetchWeatherData(lat, lon) {

}


export { fetchyCityData, fetchWeatherData };