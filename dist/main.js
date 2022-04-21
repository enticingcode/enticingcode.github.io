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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_fetchAPI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/fetchAPI.js */ \"./src/modules/fetchAPI.js\");\n/* harmony import */ var _modules_initial_load_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/initial-load.js */ \"./src/modules/initial-load.js\");\n\n\n\n\n\n(0,_modules_initial_load_js__WEBPACK_IMPORTED_MODULE_1__.loadPage)();\n\n(0,_modules_fetchAPI_js__WEBPACK_IMPORTED_MODULE_0__.fetchCityData)(\"Los Angeles\");\n\n\n\n//# sourceURL=webpack://weatherapp/./src/index.js?");

/***/ }),

/***/ "./src/modules/fetchAPI.js":
/*!*********************************!*\
  !*** ./src/modules/fetchAPI.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchCityData\": () => (/* binding */ fetchCityData)\n/* harmony export */ });\n\nasync function fetchCityData(city) {\n\n    // CITY IS GRABBED FROM INDEX.JS INVOKATION HERE DONT GET CONFUSED //\n    let lat;\n    let lon;\n\n    let cityAPI = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city},&limit=4&appid=ff42af52d27576f36d9217a0f6903066`, { mode: 'cors' })\n    let data = await cityAPI.json();\n\n    // returns coordinates //\n    let coordinates = function (data) {\n        for (let [key, value] of Object.entries(data[0])) {\n            if (key == 'lat') {\n                lat = value;\n            }\n            if (key == 'lon') {\n                lon = value;\n            }\n        }\n        return { lat, lon }\n    };\n\n    let getWeatherData = async function () {\n        let fetchWeather = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates(data).lat}&lon=${coordinates(data).lon}&appid=ff42af52d27576f36d9217a0f6903066`, { mode: 'cors' })\n        // console.log(coordinates(data).lat);\n        let weatherData = await fetchWeather.json();\n        console.log(weatherData);\n    }\n\n    getWeatherData();\n\n}\n\n\n\n\n\n//# sourceURL=webpack://weatherapp/./src/modules/fetchAPI.js?");

/***/ }),

/***/ "./src/modules/initial-load.js":
/*!*************************************!*\
  !*** ./src/modules/initial-load.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadPage\": () => (/* binding */ loadPage)\n/* harmony export */ });\n/* harmony import */ var _fetchAPI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchAPI.js */ \"./src/modules/fetchAPI.js\");\n\n\n\nfunction loadPage() {\n\n    const searchBtn = document.querySelector(\"#searchBtn\");\n    const inputBox = document.querySelector(\"#inputBox\");\n\n    inputBox.addEventListener(\"keydown\", pressEnter);\n\n    function pressEnter(evt) {\n        if (evt.keyCode === 13) {\n            searchBtn.click();\n        }\n    }\n\n    searchBtn.addEventListener(\"click\", validateInput);\n\n\n    async function validateInput() {\n        if (inputBox.value == \"\") {\n            console.log(\"Please enter valid city\");\n        }\n        else if (inputBox != \"\") {\n            (0,_fetchAPI_js__WEBPACK_IMPORTED_MODULE_0__.fetchCityData)(inputBox.value);\n        }\n\n    }\n\n\n\n\n\n    // function defaultWeather() {\n\n    // }\n\n\n}\n\n\n\n\n//# sourceURL=webpack://weatherapp/./src/modules/initial-load.js?");

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