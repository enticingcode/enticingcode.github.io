/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_initial_load_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/initial-load.js */ \"./src/modules/initial-load.js\");\n\n\n\n\n(0,_modules_initial_load_js__WEBPACK_IMPORTED_MODULE_0__.loadPage)();\n\n// fetchCityData(\"Los Angeles\");\n\n\n\n//# sourceURL=webpack://weatherapp/./src/index.js?");

/***/ }),

/***/ "./src/modules/fetchAPI.js":
/*!*********************************!*\
  !*** ./src/modules/fetchAPI.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchCityData\": () => (/* binding */ fetchCityData),\n/* harmony export */   \"getWeatherData\": () => (/* binding */ getWeatherData)\n/* harmony export */ });\n\nasync function fetchCityData(city) {\n    let lat;\n    let lon;\n    try {\n        let cityAPI = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city},&limit=4&appid=ff42af52d27576f36d9217a0f6903066`, { mode: 'cors' });\n        let rawData = await cityAPI.json();\n        // console.log(rawData);\n\n        let cityData = function (data) {\n            for (let [key, value] of Object.entries(data[0])) {\n                if (key == 'lat') {\n                    lat = value;\n                }\n                if (key == 'lon') {\n                    lon = value;\n                }\n            }\n            let cityInfo = data[0];\n            return { lat, lon, cityInfo };\n        }\n        return cityData(rawData);\n\n    } catch (err) {\n        alert('City not recognized, please try again. e.g. Chicago, IL');\n    }\n}\n\nasync function getWeatherData(cityName) {\n    let coordinates = await fetchCityData(cityName);\n    let fetchWeather = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&units=imperial&appid=ff42af52d27576f36d9217a0f6903066`, { mode: 'cors' })\n    let weatherData = await fetchWeather.json();\n    console.log(weatherData);\n    return weatherData\n}\n\n\n\n\n//# sourceURL=webpack://weatherapp/./src/modules/fetchAPI.js?");

/***/ }),

/***/ "./src/modules/initial-load.js":
/*!*************************************!*\
  !*** ./src/modules/initial-load.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadPage\": () => (/* binding */ loadPage)\n/* harmony export */ });\n/* harmony import */ var _fetchAPI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchAPI.js */ \"./src/modules/fetchAPI.js\");\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'date-fns'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _unixTimeConvert_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unixTimeConvert.js */ \"./src/modules/unixTimeConvert.js\");\n\n\n\nlet capitalize = __webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'capitalize'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\n\n\nfunction loadPage() {\n    const searchBtn = document.querySelector(\"#searchBtn\");\n    const inputBox = document.querySelector(\"#inputBox\");\n    inputBox.addEventListener(\"keydown\", pressEnter);\n\n    let selectedCity;\n    let cityWeather;\n    function pressEnter(evt) {\n        if (evt.keyCode === 13) {\n            searchBtn.click();\n        }\n    }\n\n    searchBtn.addEventListener(\"click\", validateInput);\n\n    async function validateInput() {\n        if (inputBox.value == \"\") {\n            inputBox.setCustomValidity(\"Please enter a city\");\n            inputBox.reportValidity();\n        }\n        else if (!inputBox.value.includes(\"/^\\d+$/\")) {\n            selectedCity = await populateInfo(inputBox.value);\n        }\n    }\n\n\n\n    async function populateInfo(city) {\n\n        // ASIDE CONTENT //\n        const currentCondition = document.querySelector(\"#currentCondition\");\n        const cityName = document.querySelector(\"#cityName\");\n        const dateTime = document.querySelector(\"#dateTime\");\n        const currentTemp = document.querySelector(\"#currentTemp\");\n        const changeFormat = document.querySelector(\"#changeTempFormat\");\n\n        cityWeather = await (0,_fetchAPI_js__WEBPACK_IMPORTED_MODULE_0__.getWeatherData)(city);\n        currentCondition.innerText = capitalize.words(cityWeather.current.weather[0].description);\n\n        selectedCity = await (0,_fetchAPI_js__WEBPACK_IMPORTED_MODULE_0__.fetchCityData)(city);\n\n        // CLEAN THIS UP SOMEHOW //\n        cityName.innerText = capitalize.words(`${selectedCity.cityInfo.name}, ${selectedCity.cityInfo.state}, ${selectedCity.cityInfo.country}`)\n        let todaysDate = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'date-fns'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(new Date(), \"MMMM dd, yyyy\");\n        dateTime.innerText = todaysDate;\n        currentTemp.innerText = Math.round(cityWeather.current.temp) + \"°F\";\n\n        // MAIN CONTENT (HOURLY & DAILY) //\n        const currentWeather = document.querySelector(\"#currentWeather\");\n        const hourlyForecast = document.querySelector(\"#hourlyForecast\");\n        const futureWeather = document.querySelector(\"#futureWeather\");\n        const weeklyForecast = document.querySelector(\"#weeklyForecast\");\n\n        let hourlyArr = cityWeather.hourly;\n\n        for (let i = 0; i < hourlyArr.length; i++) {\n            const hourCard = document.createElement(\"div\");\n            hourCard.classList.add(\"hourCard\");\n\n            const infoDiv = document.createElement(\"div\");\n            infoDiv.classList.add(\"info\");\n\n            const p = document.createElement(\"p\");\n            p.append((0,_unixTimeConvert_js__WEBPACK_IMPORTED_MODULE_2__.unixTimeConversion)(hourlyArr[i].dt))\n\n            infoDiv.append(p);\n            hourCard.append(infoDiv);\n            hourlyForecast.append(hourCard);\n        }\n\n        (0,_unixTimeConvert_js__WEBPACK_IMPORTED_MODULE_2__.unixTimeConversion)(1650920400)\n    }\n    populateInfo(\"Los Angeles\");\n}\n\n\n\n\n//# sourceURL=webpack://weatherapp/./src/modules/initial-load.js?");

/***/ }),

/***/ "./src/modules/unixTimeConvert.js":
/*!****************************************!*\
  !*** ./src/modules/unixTimeConvert.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"unixTimeConversion\": () => (/* binding */ unixTimeConversion)\n/* harmony export */ });\nfunction unixTimeConversion(unixTime) {\n    let timeStamp;\n    let milliseconds = unixTime * 1000;\n    let dateObj = new Date(milliseconds)\n    let humanDateFormat = dateObj.toLocaleTimeString([], { hour: '2-digit', hour12: true });\n\n    if (humanDateFormat[0] == 0) {\n        timeStamp = humanDateFormat.substring(1);\n    }\n    else timeStamp = humanDateFormat;\n    console.log(timeStamp);\n    return timeStamp;\n\n}\n\n\n\n\n\n//# sourceURL=webpack://weatherapp/./src/modules/unixTimeConvert.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;