/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/curry.jpg":
/*!***********************!*\
  !*** ./src/curry.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7e8499d2e10f7f5ad11d.jpg";

/***/ }),

/***/ "./src/gimlet.jpg":
/*!************************!*\
  !*** ./src/gimlet.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "40dd77fa230ef8349b02.jpg";

/***/ }),

/***/ "./src/martini.jpg":
/*!*************************!*\
  !*** ./src/martini.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7d4dc95f85de8b951b4d.jpg";

/***/ }),

/***/ "./src/nigiri.jpg":
/*!************************!*\
  !*** ./src/nigiri.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7d2031919368625fdd03.jpg";

/***/ }),

/***/ "./src/ramen.jpg":
/*!***********************!*\
  !*** ./src/ramen.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dd7dca881d58125e5243.jpg";

/***/ }),

/***/ "./src/sake.jpg":
/*!**********************!*\
  !*** ./src/sake.jpg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "68c49adf7ab85b5cfd94.jpg";

/***/ }),

/***/ "./src/sangria.jpg":
/*!*************************!*\
  !*** ./src/sangria.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2223a3e01a843941fef1.jpg";

/***/ }),

/***/ "./src/taco.jpg":
/*!**********************!*\
  !*** ./src/taco.jpg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a45a0a5b890630e877b5.jpg";

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateContent)
/* harmony export */ });
/* harmony import */ var _ramen_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ramen.jpg */ "./src/ramen.jpg");
/* harmony import */ var _taco_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taco.jpg */ "./src/taco.jpg");
/* harmony import */ var _nigiri_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nigiri.jpg */ "./src/nigiri.jpg");
/* harmony import */ var _curry_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./curry.jpg */ "./src/curry.jpg");
/* harmony import */ var _sake_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sake.jpg */ "./src/sake.jpg");
/* harmony import */ var _martini_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./martini.jpg */ "./src/martini.jpg");
/* harmony import */ var _sangria_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sangria.jpg */ "./src/sangria.jpg");
/* harmony import */ var _gimlet_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./gimlet.jpg */ "./src/gimlet.jpg");









const foodOne = {
  name: "Ramen Rebellion",
  description:
    "A hearty bowl of tradition ramen noodles in a savory broth,\n" +
    "topped with tender slices of chashu pork, bamboo shoots, scallions and a perfectly soft boiled egg.",
  price: "$12.50",
  icon: _ramen_jpg__WEBPACK_IMPORTED_MODULE_0__,
};
const foodTwo = {
  name: "Tokyo Tacos",
  description:
    "A fusion of Japanese and Mexican cuisine, featuring crispy tempura shrimp, avocado, pickled daikon and carrot,\n" +
    "and a drizzle of spicy mayo in a warm tortilla. Served with a side of wasabi-infused salsa.",
  price: "$10.00",
  icon: _taco_jpg__WEBPACK_IMPORTED_MODULE_1__,
};
const foodThree = {
  name: "Ninja Nigiri",
  description:
    "A selection of bite-sized sushi featuring fresh salmon, tuna, yellowtail, and eel.\n" +
    "Each piece is expertly hand-pressed and garnished with a dab of wasabi and a touch of soy sauce.",
  price: "$14.00",
  icon: _nigiri_jpg__WEBPACK_IMPORTED_MODULE_2__,
};
const foodFour = {
  name: "Katsu Curry",
  description:
    "Tender breaded chicken cutlet served on a bed of steaming Japanese rice with a side of creamy curry sauce." +
    "Topped with crispy fried onions and a sprinkle of fresh parsley.",
  price: "$16.50",
  icon: _curry_jpg__WEBPACK_IMPORTED_MODULE_3__,
};
const drinkOne = {
  name: "Samurai Sake",
  description:
    "A premium sake served chilled in a traditional ceramic cup. Rich and fragrant with a smooth finish.",
  price: "$8.00",
  icon: _sake_jpg__WEBPACK_IMPORTED_MODULE_4__,
};
const drinkTwo = {
  name: "Matcha Martini",
  description:
    "A decadent blend of premium vodka, green tea liqueur, and pure matcha powder.\n" +
    "Served up with a dusting of matcha and a delicate lemon twist.",
  price: "$12.00",
  icon: _martini_jpg__WEBPACK_IMPORTED_MODULE_5__,
};
const drinkThree = {
  name: "Shogun Sangria",
  description:
    "A refreshing twist on the classic Spanish drink, featuring red wine, citrus fruits, and a splash of Japanese yuzu juice.\n" +
    "Served over ice with a slice of fresh orange.",
  price: "$9.00",
  icon: _sangria_jpg__WEBPACK_IMPORTED_MODULE_6__,
};

const drinkFour = {
  name: "Geisha Gimlet",
  description:
    "A classic gin gimlet with a Japanese twist.\n" +
    "Made with premium gin, fresh lime juice, and a splash of sweet and sour yuzu syrup. Served up with a beautiful edible flower garnish.",
  price: "$11.00",
  icon: _gimlet_jpg__WEBPACK_IMPORTED_MODULE_7__,
};

const foodsList = [foodOne, foodTwo, foodThree, foodFour];
const drinksList = [drinkOne, drinkTwo, drinkThree, drinkFour];

const createListItem = (item) => {
  const listElem = document.createElement("li");
  const itemWrapper = document.createElement("div");
  itemWrapper.setAttribute("class", "item-divide");

  const contentDiv = document.createElement("div");

  const name = document.createElement("h3");
  name.textContent = item.name;

  const description = document.createElement("p");
  description.textContent = item.description;

  const price = document.createElement("p");
  price.textContent = item.price;

  const icon = new Image();
  icon.src = item.icon;

  contentDiv.appendChild(name);
  contentDiv.appendChild(description);
  contentDiv.appendChild(price);

  itemWrapper.appendChild(contentDiv);
  itemWrapper.appendChild(icon);
  listElem.appendChild(itemWrapper);

  return listElem;
};

const createList = (array, text) => {
  const list = document.createElement("ul");
  const heading = document.createElement("h2");
  heading.textContent = text;
  list.appendChild(heading);

  array.forEach((element) => {
    const item = createListItem(element);
    list.appendChild(item);
  });
  return list;
};

const setContent = (element) => {
  const contentWrapper = element;
  const wrapper = document.createElement("div");
  wrapper.setAttribute("id", "menu-wrapper");

  // Headings
  const heading = document.createElement("h1");
  heading.textContent = "Menu";
  heading.setAttribute("id", "menu-heading");

  // Foods list
  const fList = createList(foodsList, "Foods");
  const dList = createList(drinksList, "Drinks");

  // Append list and heading
  wrapper.appendChild(heading);
  wrapper.appendChild(fList);
  wrapper.appendChild(dList);
  contentWrapper.appendChild(wrapper);
};
function updateContent(div) {
  // Remove all child divs then call setContent
  const element = div;
  while (element.firstChild) {
    element.firstChild.remove();
  }
  setContent(element);
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZtQztBQUNGO0FBQ0k7QUFDRjtBQUNGO0FBQ007QUFDQTtBQUNGOztBQUVyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVDQUFRO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzQ0FBTztBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx3Q0FBUztBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdUNBQVE7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzQ0FBTztBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx5Q0FBVTtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEseUNBQVU7QUFDbEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx3Q0FBUztBQUNqQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCByYW1lbkltZyBmcm9tIFwiLi9yYW1lbi5qcGdcIjtcbmltcG9ydCB0YWNvSW1nIGZyb20gXCIuL3RhY28uanBnXCI7XG5pbXBvcnQgbmlnaXJpSW1nIGZyb20gXCIuL25pZ2lyaS5qcGdcIjtcbmltcG9ydCBjdXJyeUltZyBmcm9tIFwiLi9jdXJyeS5qcGdcIjtcbmltcG9ydCBzYWtlSW1nIGZyb20gXCIuL3Nha2UuanBnXCI7XG5pbXBvcnQgbWFydGluaUltZyBmcm9tIFwiLi9tYXJ0aW5pLmpwZ1wiO1xuaW1wb3J0IHNhbmdyaWFJbWcgZnJvbSBcIi4vc2FuZ3JpYS5qcGdcIjtcbmltcG9ydCBnaW1sZXRJbWcgZnJvbSBcIi4vZ2ltbGV0LmpwZ1wiO1xuXG5jb25zdCBmb29kT25lID0ge1xuICBuYW1lOiBcIlJhbWVuIFJlYmVsbGlvblwiLFxuICBkZXNjcmlwdGlvbjpcbiAgICBcIkEgaGVhcnR5IGJvd2wgb2YgdHJhZGl0aW9uIHJhbWVuIG5vb2RsZXMgaW4gYSBzYXZvcnkgYnJvdGgsXFxuXCIgK1xuICAgIFwidG9wcGVkIHdpdGggdGVuZGVyIHNsaWNlcyBvZiBjaGFzaHUgcG9yaywgYmFtYm9vIHNob290cywgc2NhbGxpb25zIGFuZCBhIHBlcmZlY3RseSBzb2Z0IGJvaWxlZCBlZ2cuXCIsXG4gIHByaWNlOiBcIiQxMi41MFwiLFxuICBpY29uOiByYW1lbkltZyxcbn07XG5jb25zdCBmb29kVHdvID0ge1xuICBuYW1lOiBcIlRva3lvIFRhY29zXCIsXG4gIGRlc2NyaXB0aW9uOlxuICAgIFwiQSBmdXNpb24gb2YgSmFwYW5lc2UgYW5kIE1leGljYW4gY3Vpc2luZSwgZmVhdHVyaW5nIGNyaXNweSB0ZW1wdXJhIHNocmltcCwgYXZvY2FkbywgcGlja2xlZCBkYWlrb24gYW5kIGNhcnJvdCxcXG5cIiArXG4gICAgXCJhbmQgYSBkcml6emxlIG9mIHNwaWN5IG1heW8gaW4gYSB3YXJtIHRvcnRpbGxhLiBTZXJ2ZWQgd2l0aCBhIHNpZGUgb2Ygd2FzYWJpLWluZnVzZWQgc2Fsc2EuXCIsXG4gIHByaWNlOiBcIiQxMC4wMFwiLFxuICBpY29uOiB0YWNvSW1nLFxufTtcbmNvbnN0IGZvb2RUaHJlZSA9IHtcbiAgbmFtZTogXCJOaW5qYSBOaWdpcmlcIixcbiAgZGVzY3JpcHRpb246XG4gICAgXCJBIHNlbGVjdGlvbiBvZiBiaXRlLXNpemVkIHN1c2hpIGZlYXR1cmluZyBmcmVzaCBzYWxtb24sIHR1bmEsIHllbGxvd3RhaWwsIGFuZCBlZWwuXFxuXCIgK1xuICAgIFwiRWFjaCBwaWVjZSBpcyBleHBlcnRseSBoYW5kLXByZXNzZWQgYW5kIGdhcm5pc2hlZCB3aXRoIGEgZGFiIG9mIHdhc2FiaSBhbmQgYSB0b3VjaCBvZiBzb3kgc2F1Y2UuXCIsXG4gIHByaWNlOiBcIiQxNC4wMFwiLFxuICBpY29uOiBuaWdpcmlJbWcsXG59O1xuY29uc3QgZm9vZEZvdXIgPSB7XG4gIG5hbWU6IFwiS2F0c3UgQ3VycnlcIixcbiAgZGVzY3JpcHRpb246XG4gICAgXCJUZW5kZXIgYnJlYWRlZCBjaGlja2VuIGN1dGxldCBzZXJ2ZWQgb24gYSBiZWQgb2Ygc3RlYW1pbmcgSmFwYW5lc2UgcmljZSB3aXRoIGEgc2lkZSBvZiBjcmVhbXkgY3Vycnkgc2F1Y2UuXCIgK1xuICAgIFwiVG9wcGVkIHdpdGggY3Jpc3B5IGZyaWVkIG9uaW9ucyBhbmQgYSBzcHJpbmtsZSBvZiBmcmVzaCBwYXJzbGV5LlwiLFxuICBwcmljZTogXCIkMTYuNTBcIixcbiAgaWNvbjogY3VycnlJbWcsXG59O1xuY29uc3QgZHJpbmtPbmUgPSB7XG4gIG5hbWU6IFwiU2FtdXJhaSBTYWtlXCIsXG4gIGRlc2NyaXB0aW9uOlxuICAgIFwiQSBwcmVtaXVtIHNha2Ugc2VydmVkIGNoaWxsZWQgaW4gYSB0cmFkaXRpb25hbCBjZXJhbWljIGN1cC4gUmljaCBhbmQgZnJhZ3JhbnQgd2l0aCBhIHNtb290aCBmaW5pc2guXCIsXG4gIHByaWNlOiBcIiQ4LjAwXCIsXG4gIGljb246IHNha2VJbWcsXG59O1xuY29uc3QgZHJpbmtUd28gPSB7XG4gIG5hbWU6IFwiTWF0Y2hhIE1hcnRpbmlcIixcbiAgZGVzY3JpcHRpb246XG4gICAgXCJBIGRlY2FkZW50IGJsZW5kIG9mIHByZW1pdW0gdm9ka2EsIGdyZWVuIHRlYSBsaXF1ZXVyLCBhbmQgcHVyZSBtYXRjaGEgcG93ZGVyLlxcblwiICtcbiAgICBcIlNlcnZlZCB1cCB3aXRoIGEgZHVzdGluZyBvZiBtYXRjaGEgYW5kIGEgZGVsaWNhdGUgbGVtb24gdHdpc3QuXCIsXG4gIHByaWNlOiBcIiQxMi4wMFwiLFxuICBpY29uOiBtYXJ0aW5pSW1nLFxufTtcbmNvbnN0IGRyaW5rVGhyZWUgPSB7XG4gIG5hbWU6IFwiU2hvZ3VuIFNhbmdyaWFcIixcbiAgZGVzY3JpcHRpb246XG4gICAgXCJBIHJlZnJlc2hpbmcgdHdpc3Qgb24gdGhlIGNsYXNzaWMgU3BhbmlzaCBkcmluaywgZmVhdHVyaW5nIHJlZCB3aW5lLCBjaXRydXMgZnJ1aXRzLCBhbmQgYSBzcGxhc2ggb2YgSmFwYW5lc2UgeXV6dSBqdWljZS5cXG5cIiArXG4gICAgXCJTZXJ2ZWQgb3ZlciBpY2Ugd2l0aCBhIHNsaWNlIG9mIGZyZXNoIG9yYW5nZS5cIixcbiAgcHJpY2U6IFwiJDkuMDBcIixcbiAgaWNvbjogc2FuZ3JpYUltZyxcbn07XG5cbmNvbnN0IGRyaW5rRm91ciA9IHtcbiAgbmFtZTogXCJHZWlzaGEgR2ltbGV0XCIsXG4gIGRlc2NyaXB0aW9uOlxuICAgIFwiQSBjbGFzc2ljIGdpbiBnaW1sZXQgd2l0aCBhIEphcGFuZXNlIHR3aXN0LlxcblwiICtcbiAgICBcIk1hZGUgd2l0aCBwcmVtaXVtIGdpbiwgZnJlc2ggbGltZSBqdWljZSwgYW5kIGEgc3BsYXNoIG9mIHN3ZWV0IGFuZCBzb3VyIHl1enUgc3lydXAuIFNlcnZlZCB1cCB3aXRoIGEgYmVhdXRpZnVsIGVkaWJsZSBmbG93ZXIgZ2FybmlzaC5cIixcbiAgcHJpY2U6IFwiJDExLjAwXCIsXG4gIGljb246IGdpbWxldEltZyxcbn07XG5cbmNvbnN0IGZvb2RzTGlzdCA9IFtmb29kT25lLCBmb29kVHdvLCBmb29kVGhyZWUsIGZvb2RGb3VyXTtcbmNvbnN0IGRyaW5rc0xpc3QgPSBbZHJpbmtPbmUsIGRyaW5rVHdvLCBkcmlua1RocmVlLCBkcmlua0ZvdXJdO1xuXG5jb25zdCBjcmVhdGVMaXN0SXRlbSA9IChpdGVtKSA9PiB7XG4gIGNvbnN0IGxpc3RFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBjb25zdCBpdGVtV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGl0ZW1XcmFwcGVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaXRlbS1kaXZpZGVcIik7XG5cbiAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgbmFtZS50ZXh0Q29udGVudCA9IGl0ZW0ubmFtZTtcblxuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGl0ZW0uZGVzY3JpcHRpb247XG5cbiAgY29uc3QgcHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgcHJpY2UudGV4dENvbnRlbnQgPSBpdGVtLnByaWNlO1xuXG4gIGNvbnN0IGljb24gPSBuZXcgSW1hZ2UoKTtcbiAgaWNvbi5zcmMgPSBpdGVtLmljb247XG5cbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChuYW1lKTtcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQocHJpY2UpO1xuXG4gIGl0ZW1XcmFwcGVyLmFwcGVuZENoaWxkKGNvbnRlbnREaXYpO1xuICBpdGVtV3JhcHBlci5hcHBlbmRDaGlsZChpY29uKTtcbiAgbGlzdEVsZW0uYXBwZW5kQ2hpbGQoaXRlbVdyYXBwZXIpO1xuXG4gIHJldHVybiBsaXN0RWxlbTtcbn07XG5cbmNvbnN0IGNyZWF0ZUxpc3QgPSAoYXJyYXksIHRleHQpID0+IHtcbiAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgaGVhZGluZy50ZXh0Q29udGVudCA9IHRleHQ7XG4gIGxpc3QuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG5cbiAgYXJyYXkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGl0ZW0gPSBjcmVhdGVMaXN0SXRlbShlbGVtZW50KTtcbiAgICBsaXN0LmFwcGVuZENoaWxkKGl0ZW0pO1xuICB9KTtcbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5jb25zdCBzZXRDb250ZW50ID0gKGVsZW1lbnQpID0+IHtcbiAgY29uc3QgY29udGVudFdyYXBwZXIgPSBlbGVtZW50O1xuICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgd3JhcHBlci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1lbnUtd3JhcHBlclwiKTtcblxuICAvLyBIZWFkaW5nc1xuICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBoZWFkaW5nLnRleHRDb250ZW50ID0gXCJNZW51XCI7XG4gIGhlYWRpbmcuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtZW51LWhlYWRpbmdcIik7XG5cbiAgLy8gRm9vZHMgbGlzdFxuICBjb25zdCBmTGlzdCA9IGNyZWF0ZUxpc3QoZm9vZHNMaXN0LCBcIkZvb2RzXCIpO1xuICBjb25zdCBkTGlzdCA9IGNyZWF0ZUxpc3QoZHJpbmtzTGlzdCwgXCJEcmlua3NcIik7XG5cbiAgLy8gQXBwZW5kIGxpc3QgYW5kIGhlYWRpbmdcbiAgd3JhcHBlci5hcHBlbmRDaGlsZChoZWFkaW5nKTtcbiAgd3JhcHBlci5hcHBlbmRDaGlsZChmTGlzdCk7XG4gIHdyYXBwZXIuYXBwZW5kQ2hpbGQoZExpc3QpO1xuICBjb250ZW50V3JhcHBlci5hcHBlbmRDaGlsZCh3cmFwcGVyKTtcbn07XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1cGRhdGVDb250ZW50KGRpdikge1xuICAvLyBSZW1vdmUgYWxsIGNoaWxkIGRpdnMgdGhlbiBjYWxsIHNldENvbnRlbnRcbiAgY29uc3QgZWxlbWVudCA9IGRpdjtcbiAgd2hpbGUgKGVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgIGVsZW1lbnQuZmlyc3RDaGlsZC5yZW1vdmUoKTtcbiAgfVxuICBzZXRDb250ZW50KGVsZW1lbnQpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9