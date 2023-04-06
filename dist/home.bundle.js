/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
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
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setContent": () => (/* binding */ setContent),
/* harmony export */   "setUpPage": () => (/* binding */ setUpPage),
/* harmony export */   "updateContent": () => (/* binding */ updateContent)
/* harmony export */ });
const setUpPage = (div) => {
  const header = document.createElement("div");
  header.setAttribute("id", "header");

  const headerItems = document.createElement("div");
  headerItems.setAttribute("id", "header-items");
  header.appendChild(headerItems);

  const homeTab = document.createElement("p");
  homeTab.textContent = "Home";
  const menuTab = document.createElement("p");
  menuTab.textContent = "Menu";
  const contactTab = document.createElement("p");
  contactTab.textContent = "Contact";

  headerItems.appendChild(homeTab);
  headerItems.appendChild(menuTab);
  headerItems.appendChild(contactTab);

  const mainContent = document.createElement("div");
  mainContent.setAttribute("id", "main-content");

  const footer = document.createElement("div");
  footer.textContent = "Copyright ndrewta";
  footer.setAttribute("id", "footer");

  div.appendChild(header);
  div.appendChild(mainContent);
  div.appendChild(footer);
};

const setContent = () => {
  const contentWrapper = document.getElementById("main-content");
  const element = document.createElement("div");

  const title = document.createElement("h1");
  title.textContent = "Seki Lounge";
  title.setAttribute("id", "home-title");

  const text = document.createElement("p");
  text.textContent = "The finest meals and bespoke service as it should be.";
  text.setAttribute("id", "home-text");

  const textWrapper = document.createElement("div");
  textWrapper.setAttribute("id", "text-wrapper");

  textWrapper.appendChild(title);
  textWrapper.appendChild(text);

  element.appendChild(textWrapper);
  contentWrapper.appendChild(element);
};

const updateContent = () => {
  const element = document.getElementById("main-content");
  while (element.firstChild) {
    element.firstChild.remove();
  }
  setContent();
};

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05PO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJleHBvcnQgY29uc3Qgc2V0VXBQYWdlID0gKGRpdikgPT4ge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBoZWFkZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJoZWFkZXJcIik7XG5cbiAgY29uc3QgaGVhZGVySXRlbXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBoZWFkZXJJdGVtcy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhlYWRlci1pdGVtc1wiKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlckl0ZW1zKTtcblxuICBjb25zdCBob21lVGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGhvbWVUYWIudGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcbiAgY29uc3QgbWVudVRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBtZW51VGFiLnRleHRDb250ZW50ID0gXCJNZW51XCI7XG4gIGNvbnN0IGNvbnRhY3RUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29udGFjdFRhYi50ZXh0Q29udGVudCA9IFwiQ29udGFjdFwiO1xuXG4gIGhlYWRlckl0ZW1zLmFwcGVuZENoaWxkKGhvbWVUYWIpO1xuICBoZWFkZXJJdGVtcy5hcHBlbmRDaGlsZChtZW51VGFiKTtcbiAgaGVhZGVySXRlbXMuYXBwZW5kQ2hpbGQoY29udGFjdFRhYik7XG5cbiAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtYWluQ29udGVudC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1haW4tY29udGVudFwiKTtcblxuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBmb290ZXIudGV4dENvbnRlbnQgPSBcIkNvcHlyaWdodCBuZHJld3RhXCI7XG4gIGZvb3Rlci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImZvb3RlclwiKTtcblxuICBkaXYuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgZGl2LmFwcGVuZENoaWxkKG1haW5Db250ZW50KTtcbiAgZGl2LmFwcGVuZENoaWxkKGZvb3Rlcik7XG59O1xuXG5leHBvcnQgY29uc3Qgc2V0Q29udGVudCA9ICgpID0+IHtcbiAgY29uc3QgY29udGVudFdyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW4tY29udGVudFwiKTtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gXCJTZWtpIExvdW5nZVwiO1xuICB0aXRsZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhvbWUtdGl0bGVcIik7XG5cbiAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICB0ZXh0LnRleHRDb250ZW50ID0gXCJUaGUgZmluZXN0IG1lYWxzIGFuZCBiZXNwb2tlIHNlcnZpY2UgYXMgaXQgc2hvdWxkIGJlLlwiO1xuICB0ZXh0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaG9tZS10ZXh0XCIpO1xuXG4gIGNvbnN0IHRleHRXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGV4dFdyYXBwZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0ZXh0LXdyYXBwZXJcIik7XG5cbiAgdGV4dFdyYXBwZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICB0ZXh0V3JhcHBlci5hcHBlbmRDaGlsZCh0ZXh0KTtcblxuICBlbGVtZW50LmFwcGVuZENoaWxkKHRleHRXcmFwcGVyKTtcbiAgY29udGVudFdyYXBwZXIuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG59O1xuXG5leHBvcnQgY29uc3QgdXBkYXRlQ29udGVudCA9ICgpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbi1jb250ZW50XCIpO1xuICB3aGlsZSAoZWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgZWxlbWVudC5maXJzdENoaWxkLnJlbW92ZSgpO1xuICB9XG4gIHNldENvbnRlbnQoKTtcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=