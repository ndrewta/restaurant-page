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
  // Header
  const header = document.createElement("div");
  header.setAttribute("id", "header");

  // Header items
  const headerItems = document.createElement("div");
  headerItems.setAttribute("id", "header-items");
  header.appendChild(headerItems);

  const homeBtn = document.createElement("button");
  homeBtn.textContent = "Home";
  homeBtn.setAttribute("id", "homeBtn");
  const menuBtn = document.createElement("button");
  menuBtn.textContent = "Menu";
  menuBtn.setAttribute("id", "menuBtn");
  const contactBtn = document.createElement("button");
  contactBtn.textContent = "Contact";
  contactBtn.setAttribute("id", "contactBtn");

  headerItems.appendChild(homeBtn);
  headerItems.appendChild(menuBtn);
  headerItems.appendChild(contactBtn);

  // Main content
  const mainContent = document.createElement("div");
  mainContent.setAttribute("id", "main-content");

  // Footer
  const footer = document.createElement("div");
  footer.textContent = "Copyright ndrewta";
  footer.setAttribute("id", "footer");

  // Append divs
  div.appendChild(header);
  div.appendChild(mainContent);
  div.appendChild(footer);
};

const setContent = () => {
  const contentWrapper = document.getElementById("main-content");
  const element = document.createElement("div");

  // Heading
  const heading = document.createElement("h1");
  heading.textContent = "Seki Lounge";
  heading.setAttribute("id", "home-heading");

  // Description
  const text = document.createElement("p");
  text.textContent = "The finest meals and bespoke service as it should be.";
  text.setAttribute("id", "home-text");

  const wrapper = document.createElement("div");
  wrapper.setAttribute("id", "home-wrapper");

  // Append divs
  wrapper.appendChild(heading);
  wrapper.appendChild(text);

  element.appendChild(wrapper);
  contentWrapper.appendChild(element);
};

const updateContent = () => {
  // Remove all child divs then call setContent
  const element = document.getElementById("main-content");
  while (element.firstChild) {
    element.firstChild.remove();
  }
  setContent();
};

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05PO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJleHBvcnQgY29uc3Qgc2V0VXBQYWdlID0gKGRpdikgPT4ge1xuICAvLyBIZWFkZXJcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaGVhZGVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaGVhZGVyXCIpO1xuXG4gIC8vIEhlYWRlciBpdGVtc1xuICBjb25zdCBoZWFkZXJJdGVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhlYWRlckl0ZW1zLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaGVhZGVyLWl0ZW1zXCIpO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVySXRlbXMpO1xuXG4gIGNvbnN0IGhvbWVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBob21lQnRuLnRleHRDb250ZW50ID0gXCJIb21lXCI7XG4gIGhvbWVCdG4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJob21lQnRuXCIpO1xuICBjb25zdCBtZW51QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgbWVudUJ0bi50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xuICBtZW51QnRuLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWVudUJ0blwiKTtcbiAgY29uc3QgY29udGFjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbnRhY3RCdG4udGV4dENvbnRlbnQgPSBcIkNvbnRhY3RcIjtcbiAgY29udGFjdEJ0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNvbnRhY3RCdG5cIik7XG5cbiAgaGVhZGVySXRlbXMuYXBwZW5kQ2hpbGQoaG9tZUJ0bik7XG4gIGhlYWRlckl0ZW1zLmFwcGVuZENoaWxkKG1lbnVCdG4pO1xuICBoZWFkZXJJdGVtcy5hcHBlbmRDaGlsZChjb250YWN0QnRuKTtcblxuICAvLyBNYWluIGNvbnRlbnRcbiAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtYWluQ29udGVudC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1haW4tY29udGVudFwiKTtcblxuICAvLyBGb290ZXJcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZm9vdGVyLnRleHRDb250ZW50ID0gXCJDb3B5cmlnaHQgbmRyZXd0YVwiO1xuICBmb290ZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJmb290ZXJcIik7XG5cbiAgLy8gQXBwZW5kIGRpdnNcbiAgZGl2LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gIGRpdi5hcHBlbmRDaGlsZChtYWluQ29udGVudCk7XG4gIGRpdi5hcHBlbmRDaGlsZChmb290ZXIpO1xufTtcblxuZXhwb3J0IGNvbnN0IHNldENvbnRlbnQgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRlbnRXcmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluLWNvbnRlbnRcIik7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIC8vIEhlYWRpbmdcbiAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgaGVhZGluZy50ZXh0Q29udGVudCA9IFwiU2VraSBMb3VuZ2VcIjtcbiAgaGVhZGluZy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhvbWUtaGVhZGluZ1wiKTtcblxuICAvLyBEZXNjcmlwdGlvblxuICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHRleHQudGV4dENvbnRlbnQgPSBcIlRoZSBmaW5lc3QgbWVhbHMgYW5kIGJlc3Bva2Ugc2VydmljZSBhcyBpdCBzaG91bGQgYmUuXCI7XG4gIHRleHQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJob21lLXRleHRcIik7XG5cbiAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHdyYXBwZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJob21lLXdyYXBwZXJcIik7XG5cbiAgLy8gQXBwZW5kIGRpdnNcbiAgd3JhcHBlci5hcHBlbmRDaGlsZChoZWFkaW5nKTtcbiAgd3JhcHBlci5hcHBlbmRDaGlsZCh0ZXh0KTtcblxuICBlbGVtZW50LmFwcGVuZENoaWxkKHdyYXBwZXIpO1xuICBjb250ZW50V3JhcHBlci5hcHBlbmRDaGlsZChlbGVtZW50KTtcbn07XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVDb250ZW50ID0gKCkgPT4ge1xuICAvLyBSZW1vdmUgYWxsIGNoaWxkIGRpdnMgdGhlbiBjYWxsIHNldENvbnRlbnRcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbi1jb250ZW50XCIpO1xuICB3aGlsZSAoZWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgZWxlbWVudC5maXJzdENoaWxkLnJlbW92ZSgpO1xuICB9XG4gIHNldENvbnRlbnQoKTtcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=