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

/***/ "./src/content.js":
/*!************************!*\
  !*** ./src/content.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scraping__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scraping */ \"./src/scraping.js\");\n\n\n// Listener that reacts when the user clicks on the extension icon.\nchrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {\n  if (request.action === \"scrapeDetails\") {\n    var details = (0,_scraping__WEBPACK_IMPORTED_MODULE_0__.scrapeListingDetails)();\n    sendResponse({\n      result: \"success\",\n      data: details\n    });\n  }\n  return true; // Keep the message channel open for asynchronous response\n});\n\n// Inform the popup script that the content script has been loaded\nchrome.runtime.sendMessage({\n  action: \"contentScriptLoaded\"\n});\n\n//# sourceURL=webpack://trailer_sales_extension/./src/content.js?");

/***/ }),

/***/ "./src/scraping.js":
/*!*************************!*\
  !*** ./src/scraping.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   scrapeListingDetails: () => (/* binding */ scrapeListingDetails)\n/* harmony export */ });\nvar scrapeListingDetails = function scrapeListingDetails() {\n  // Assuming the trailer listing website has a specific structure that\n  // we are familiar with and using hypothetical selectors for demonstration.\n  var title = document.querySelector('item-title').innerText; // INPUT_REQUIRED {Replace with actual selector of the title}\n  var description = document.querySelector('description').innerText; // INPUT_REQUIRED {Replace with actual selector of the description}\n  var price = document.querySelector('our price').innerText; // INPUT_REQUIRED {Replace with actual selector of the price}\n  var images = Array.from(document.querySelectorAll('int-gallery-thumb-row')).map(function (img) {\n    return img.src;\n  }); // INPUT_REQUIRED {Replace with actual selector of the images}\n\n  return {\n    title: title,\n    description: description,\n    price: price,\n    images: images\n  };\n};\n\n//# sourceURL=webpack://trailer_sales_extension/./src/scraping.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/content.js");
/******/ 	
/******/ })()
;