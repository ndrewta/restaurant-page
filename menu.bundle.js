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

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ updateContent)\n/* harmony export */ });\n/* harmony import */ var _ramen_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ramen.jpg */ \"./src/ramen.jpg\");\n/* harmony import */ var _taco_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taco.jpg */ \"./src/taco.jpg\");\n/* harmony import */ var _nigiri_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nigiri.jpg */ \"./src/nigiri.jpg\");\n/* harmony import */ var _curry_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./curry.jpg */ \"./src/curry.jpg\");\n/* harmony import */ var _sake_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sake.jpg */ \"./src/sake.jpg\");\n/* harmony import */ var _martini_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./martini.jpg */ \"./src/martini.jpg\");\n/* harmony import */ var _sangria_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sangria.jpg */ \"./src/sangria.jpg\");\n/* harmony import */ var _gimlet_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./gimlet.jpg */ \"./src/gimlet.jpg\");\n\n\n\n\n\n\n\n\n\nconst foodOne = {\n  name: \"Ramen Rebellion\",\n  description:\n    \"A hearty bowl of tradition ramen noodles in a savory broth,\\n\" +\n    \"topped with tender slices of chashu pork, bamboo shoots, scallions and a perfectly soft boiled egg.\",\n  price: \"$12.50\",\n  icon: _ramen_jpg__WEBPACK_IMPORTED_MODULE_0__,\n};\nconst foodTwo = {\n  name: \"Tokyo Tacos\",\n  description:\n    \"A fusion of Japanese and Mexican cuisine, featuring crispy tempura shrimp, avocado, pickled daikon and carrot,\\n\" +\n    \"and a drizzle of spicy mayo in a warm tortilla. Served with a side of wasabi-infused salsa.\",\n  price: \"$10.00\",\n  icon: _taco_jpg__WEBPACK_IMPORTED_MODULE_1__,\n};\nconst foodThree = {\n  name: \"Ninja Nigiri\",\n  description:\n    \"A selection of bite-sized sushi featuring fresh salmon, tuna, yellowtail, and eel.\\n\" +\n    \"Each piece is expertly hand-pressed and garnished with a dab of wasabi and a touch of soy sauce.\",\n  price: \"$14.00\",\n  icon: _nigiri_jpg__WEBPACK_IMPORTED_MODULE_2__,\n};\nconst foodFour = {\n  name: \"Katsu Curry\",\n  description:\n    \"Tender breaded chicken cutlet served on a bed of steaming Japanese rice with a side of creamy curry sauce.\" +\n    \"Topped with crispy fried onions and a sprinkle of fresh parsley.\",\n  price: \"$16.50\",\n  icon: _curry_jpg__WEBPACK_IMPORTED_MODULE_3__,\n};\nconst drinkOne = {\n  name: \"Samurai Sake\",\n  description:\n    \"A premium sake served chilled in a traditional ceramic cup. Rich and fragrant with a smooth finish.\",\n  price: \"$8.00\",\n  icon: _sake_jpg__WEBPACK_IMPORTED_MODULE_4__,\n};\nconst drinkTwo = {\n  name: \"Matcha Martini\",\n  description:\n    \"A decadent blend of premium vodka, green tea liqueur, and pure matcha powder.\\n\" +\n    \"Served up with a dusting of matcha and a delicate lemon twist.\",\n  price: \"$12.00\",\n  icon: _martini_jpg__WEBPACK_IMPORTED_MODULE_5__,\n};\nconst drinkThree = {\n  name: \"Shogun Sangria\",\n  description:\n    \"A refreshing twist on the classic Spanish drink, featuring red wine, citrus fruits, and a splash of Japanese yuzu juice.\\n\" +\n    \"Served over ice with a slice of fresh orange.\",\n  price: \"$9.00\",\n  icon: _sangria_jpg__WEBPACK_IMPORTED_MODULE_6__,\n};\n\nconst drinkFour = {\n  name: \"Geisha Gimlet\",\n  description:\n    \"A classic gin gimlet with a Japanese twist.\\n\" +\n    \"Made with premium gin, fresh lime juice, and a splash of sweet and sour yuzu syrup. Served up with a beautiful edible flower garnish.\",\n  price: \"$11.00\",\n  icon: _gimlet_jpg__WEBPACK_IMPORTED_MODULE_7__,\n};\n\nconst foodsList = [foodOne, foodTwo, foodThree, foodFour];\nconst drinksList = [drinkOne, drinkTwo, drinkThree, drinkFour];\n\nconst createListItem = (item) => {\n  const listElem = document.createElement(\"li\");\n  const itemWrapper = document.createElement(\"div\");\n  itemWrapper.setAttribute(\"class\", \"item-divide\");\n\n  const contentDiv = document.createElement(\"div\");\n\n  const name = document.createElement(\"h3\");\n  name.textContent = item.name;\n\n  const description = document.createElement(\"p\");\n  description.textContent = item.description;\n\n  const price = document.createElement(\"p\");\n  price.textContent = item.price;\n\n  const icon = new Image();\n  icon.src = item.icon;\n\n  contentDiv.appendChild(name);\n  contentDiv.appendChild(description);\n  contentDiv.appendChild(price);\n\n  itemWrapper.appendChild(contentDiv);\n  itemWrapper.appendChild(icon);\n  listElem.appendChild(itemWrapper);\n\n  return listElem;\n};\n\nconst createList = (array, text) => {\n  const list = document.createElement(\"ul\");\n  const heading = document.createElement(\"h2\");\n  heading.textContent = text;\n  list.appendChild(heading);\n\n  array.forEach((element) => {\n    const item = createListItem(element);\n    list.appendChild(item);\n  });\n  return list;\n};\n\nconst setContent = (element) => {\n  const contentWrapper = element;\n  const wrapper = document.createElement(\"div\");\n  wrapper.setAttribute(\"id\", \"menu-wrapper\");\n\n  // Headings\n  const heading = document.createElement(\"h1\");\n  heading.textContent = \"Menu\";\n  heading.setAttribute(\"id\", \"menu-heading\");\n\n  // Foods list\n  const fList = createList(foodsList, \"Foods\");\n  const dList = createList(drinksList, \"Drinks\");\n\n  // Append list and heading\n  wrapper.appendChild(heading);\n  wrapper.appendChild(fList);\n  wrapper.appendChild(dList);\n  contentWrapper.appendChild(wrapper);\n};\nfunction updateContent(div) {\n  // Remove all child divs then call setContent\n  const element = div;\n  while (element.firstChild) {\n    element.firstChild.remove();\n  }\n  setContent(element);\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/curry.jpg":
/*!***********************!*\
  !*** ./src/curry.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7e8499d2e10f7f5ad11d.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/curry.jpg?");

/***/ }),

/***/ "./src/gimlet.jpg":
/*!************************!*\
  !*** ./src/gimlet.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"40dd77fa230ef8349b02.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/gimlet.jpg?");

/***/ }),

/***/ "./src/martini.jpg":
/*!*************************!*\
  !*** ./src/martini.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7d4dc95f85de8b951b4d.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/martini.jpg?");

/***/ }),

/***/ "./src/nigiri.jpg":
/*!************************!*\
  !*** ./src/nigiri.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7d2031919368625fdd03.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/nigiri.jpg?");

/***/ }),

/***/ "./src/ramen.jpg":
/*!***********************!*\
  !*** ./src/ramen.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"dd7dca881d58125e5243.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/ramen.jpg?");

/***/ }),

/***/ "./src/sake.jpg":
/*!**********************!*\
  !*** ./src/sake.jpg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"68c49adf7ab85b5cfd94.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/sake.jpg?");

/***/ }),

/***/ "./src/sangria.jpg":
/*!*************************!*\
  !*** ./src/sangria.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2223a3e01a843941fef1.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/sangria.jpg?");

/***/ }),

/***/ "./src/taco.jpg":
/*!**********************!*\
  !*** ./src/taco.jpg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a45a0a5b890630e877b5.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/taco.jpg?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/menu.js");
/******/ 	
/******/ })()
;