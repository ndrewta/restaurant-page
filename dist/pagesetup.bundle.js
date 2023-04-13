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

/***/ "./src/pagesetup.js":
/*!**************************!*\
  !*** ./src/pagesetup.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ setUpPage)\n/* harmony export */ });\nfunction setUpPage(element) {\n  // Header\n  const header = document.createElement(\"div\");\n  header.setAttribute(\"id\", \"header\");\n\n  // Header items\n  const headerItems = document.createElement(\"div\");\n  headerItems.setAttribute(\"id\", \"header-items\");\n  header.appendChild(headerItems);\n\n  const homeBtn = document.createElement(\"button\");\n  homeBtn.textContent = \"Home\";\n  homeBtn.setAttribute(\"id\", \"homeBtn\");\n  const menuBtn = document.createElement(\"button\");\n  menuBtn.textContent = \"Menu\";\n  menuBtn.setAttribute(\"id\", \"menuBtn\");\n  const contactBtn = document.createElement(\"button\");\n  contactBtn.textContent = \"Contact\";\n  contactBtn.setAttribute(\"id\", \"contactBtn\");\n\n  headerItems.appendChild(homeBtn);\n  headerItems.appendChild(menuBtn);\n  headerItems.appendChild(contactBtn);\n\n  // Main content\n  const mainContent = document.createElement(\"div\");\n  mainContent.setAttribute(\"id\", \"main-content\");\n\n  // Footer\n  const footer = document.createElement(\"div\");\n  footer.setAttribute(\"id\", \"footer\");\n\n  const anchor = document.createElement(\"a\");\n  anchor.setAttribute(\"href\", \"https://github.com/ndrewta\");\n  anchor.setAttribute(\"target\", \"_blank\");\n  anchor.setAttribute(\"rel\", \"noopener noreferrer\");\n  anchor.textContent = \"Site designed by ndrewta\";\n  footer.appendChild(anchor);\n\n  // Append divs\n  element.appendChild(header);\n  element.appendChild(mainContent);\n  element.appendChild(footer);\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/pagesetup.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/pagesetup.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;