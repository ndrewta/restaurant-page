/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./glacial.woff */ "./src/glacial.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./glacial.woff2 */ "./src/glacial.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! background.jpg */ "./src/background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"glacial\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff\"),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff2\");\n}\n\nbody {\n  font-family: glacial, Arial, Helvetica, sans-serif;\n  margin: 0;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  background-size: 100%;\n  background-position: center center;\n  background-attachment: fixed;\n  background-repeat: no-repeat;\n}\n\nbutton {\n  all: unset;\n  width: 115px;\n  text-align: center;\n  border: solid rgb(201, 198, 231) 1px;\n  border-radius: 5px;\n  box-shadow: 2px 2px 2px 2px rgb(109, 103, 103);\n  background-color: rgba(132, 140, 148, 0.5);\n  color: white;\n  font-size: 30px;\n}\n\nbutton:hover {\n  background-color: rgba(187, 199, 211, 0.5);\n}\n\nbutton:active {\n  background-color: rgba(94, 98, 102, 0.5);\n}\n\na:link,\na:visited {\n  text-decoration: none;\n  color: white;\n}\n\nul {\n  margin-top: 50px;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\nli {\n  list-style: none;\n  border: solid rgb(140, 140, 146) 1px;\n  border-radius: 5px;\n  box-shadow: 2px 2px 2px 2px rgb(109, 103, 103);\n  margin-bottom: 10px;\n  background-color: rgba(132, 140, 148, 0.6);\n  margin-top: 25px;\n}\n\nh2 {\n  font-size: 35px;\n  margin-top: -5px;\n  text-align: center;\n  border: solid rgb(183, 183, 216) 1px;\n  border-radius: 5px;\n  box-shadow: 2px 2px 2px 2px rgb(109, 103, 103);\n  background-color: rgba(132, 140, 148, 0.5);\n}\n\nh3 {\n  margin: 0;\n}\n\n#content {\n  display: grid;\n  grid-template-areas:\n    \"header\"\n    \"content\"\n    \"footer\";\n  grid-template-columns: 1fr;\n  grid-template-rows: 75px 1fr 15px;\n  gap: 20px;\n  height: 100vh;\n  overflow: auto;\n}\n\n#header {\n  border-radius: 5px;\n  box-shadow: 2px 2px 2px 2px rgb(109, 103, 103);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 80%;\n  margin-top: 15px;\n  margin-left: 10%;\n  background: rgb(221, 203, 203, 50%);\n}\n\n#header-items {\n  display: flex;\n  justify-content: space-between;\n  width: 650px;\n}\n\n#footer {\n  flex-shrink: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 10px;\n  color: white;\n  text-align: center;\n}\n\n#main-content {\n  display: flex;\n  justify-content: center;\n  width: 80%;\n  height: 100%;\n  margin: auto;\n  background: rgb(221, 203, 203, 50%);\n  border-radius: 5px;\n  box-shadow: 2px 2px 2px 2px rgb(109, 103, 103);\n}\n\n#home-heading,\n#contact-heading {\n  color: aliceblue;\n  font-size: 85px;\n  margin: 0;\n}\n\n#home-text,\n#contact-text {\n  color: aliceblue;\n  font-size: 20px;\n}\n\n#home-wrapper {\n  display: flex;\n  flex-direction: column;\n  max-width: 375px;\n  margin-top: 20%;\n}\n\n#home-wrapper > img {\n  margin-top: 20%;\n  width: 200%;\n  height: auto;\n  align-self: center;\n}\n\n#menu-wrapper {\n  flex-grow: 1;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 100px 5fr;\n  grid-template-areas: \"heading heading\" \"food drink\";\n  padding: 10px;\n  color: white;\n}\n\n#menu-heading {\n  grid-area: heading;\n  text-align: center;\n  font-size: 75px;\n  margin-top: 20px;\n}\n\n#food-list {\n  grid-area: food;\n  padding: 10px;\n}\n\n#drink-list {\n  grid-area: drink;\n  padding: 10px;\n}\n\n.item-divide {\n  display: grid;\n  grid-template-columns: 4fr 1fr;\n  align-items: center;\n  padding: 10px;\n}\n\n.item-divide > img {\n  max-height: auto;\n  max-width: 135px;\n  justify-self: center;\n  margin: 2px;\n}\n\n#contact-wrapper {\n  white-space: pre-line;\n  margin-top: 10%;\n  margin-left: 10%;\n}\n\n#contact-wrapper > img {\n  margin-top: 5%;\n  width: 90%;\n  height: auto;\n  align-self: center;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB;2DACwC;AAC1C;;AAEA;EACE,kDAAkD;EAClD,SAAS;EACT,yDAAuC;EACvC,qBAAqB;EACrB,kCAAkC;EAClC,4BAA4B;EAC5B,4BAA4B;AAC9B;;AAEA;EACE,UAAU;EACV,YAAY;EACZ,kBAAkB;EAClB,oCAAoC;EACpC,kBAAkB;EAClB,8CAA8C;EAC9C,0CAA0C;EAC1C,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,0CAA0C;AAC5C;;AAEA;EACE,wCAAwC;AAC1C;;AAEA;;EAEE,qBAAqB;EACrB,YAAY;AACd;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,oCAAoC;EACpC,kBAAkB;EAClB,8CAA8C;EAC9C,mBAAmB;EACnB,0CAA0C;EAC1C,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,kBAAkB;EAClB,oCAAoC;EACpC,kBAAkB;EAClB,8CAA8C;EAC9C,0CAA0C;AAC5C;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,aAAa;EACb;;;YAGU;EACV,0BAA0B;EAC1B,iCAAiC;EACjC,SAAS;EACT,aAAa;EACb,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,8CAA8C;EAC9C,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,UAAU;EACV,gBAAgB;EAChB,gBAAgB;EAChB,mCAAmC;AACrC;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,YAAY;AACd;;AAEA;EACE,cAAc;EACd,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,mBAAmB;EACnB,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,UAAU;EACV,YAAY;EACZ,YAAY;EACZ,mCAAmC;EACnC,kBAAkB;EAClB,8CAA8C;AAChD;;AAEA;;EAEE,gBAAgB;EAChB,eAAe;EACf,SAAS;AACX;;AAEA;;EAEE,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,WAAW;EACX,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,8BAA8B;EAC9B,6BAA6B;EAC7B,mDAAmD;EACnD,aAAa;EACb,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,aAAa;AACf;;AAEA;EACE,gBAAgB;EAChB,aAAa;AACf;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,aAAa;AACf;;AAEA;EACE,gBAAgB;EAChB,gBAAgB;EAChB,oBAAoB;EACpB,WAAW;AACb;;AAEA;EACE,qBAAqB;EACrB,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,cAAc;EACd,UAAU;EACV,YAAY;EACZ,kBAAkB;AACpB","sourcesContent":["@font-face {\n  font-family: \"glacial\";\n  src: url(\"./glacial.woff\") format(\"woff\"),\n    url(\"./glacial.woff2\") format(\"woff2\");\n}\n\nbody {\n  font-family: glacial, Arial, Helvetica, sans-serif;\n  margin: 0;\n  background-image: url(\"background.jpg\");\n  background-size: 100%;\n  background-position: center center;\n  background-attachment: fixed;\n  background-repeat: no-repeat;\n}\n\nbutton {\n  all: unset;\n  width: 115px;\n  text-align: center;\n  border: solid rgb(201, 198, 231) 1px;\n  border-radius: 5px;\n  box-shadow: 2px 2px 2px 2px rgb(109, 103, 103);\n  background-color: rgba(132, 140, 148, 0.5);\n  color: white;\n  font-size: 30px;\n}\n\nbutton:hover {\n  background-color: rgba(187, 199, 211, 0.5);\n}\n\nbutton:active {\n  background-color: rgba(94, 98, 102, 0.5);\n}\n\na:link,\na:visited {\n  text-decoration: none;\n  color: white;\n}\n\nul {\n  margin-top: 50px;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\nli {\n  list-style: none;\n  border: solid rgb(140, 140, 146) 1px;\n  border-radius: 5px;\n  box-shadow: 2px 2px 2px 2px rgb(109, 103, 103);\n  margin-bottom: 10px;\n  background-color: rgba(132, 140, 148, 0.6);\n  margin-top: 25px;\n}\n\nh2 {\n  font-size: 35px;\n  margin-top: -5px;\n  text-align: center;\n  border: solid rgb(183, 183, 216) 1px;\n  border-radius: 5px;\n  box-shadow: 2px 2px 2px 2px rgb(109, 103, 103);\n  background-color: rgba(132, 140, 148, 0.5);\n}\n\nh3 {\n  margin: 0;\n}\n\n#content {\n  display: grid;\n  grid-template-areas:\n    \"header\"\n    \"content\"\n    \"footer\";\n  grid-template-columns: 1fr;\n  grid-template-rows: 75px 1fr 15px;\n  gap: 20px;\n  height: 100vh;\n  overflow: auto;\n}\n\n#header {\n  border-radius: 5px;\n  box-shadow: 2px 2px 2px 2px rgb(109, 103, 103);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 80%;\n  margin-top: 15px;\n  margin-left: 10%;\n  background: rgb(221, 203, 203, 50%);\n}\n\n#header-items {\n  display: flex;\n  justify-content: space-between;\n  width: 650px;\n}\n\n#footer {\n  flex-shrink: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 10px;\n  color: white;\n  text-align: center;\n}\n\n#main-content {\n  display: flex;\n  justify-content: center;\n  width: 80%;\n  height: 100%;\n  margin: auto;\n  background: rgb(221, 203, 203, 50%);\n  border-radius: 5px;\n  box-shadow: 2px 2px 2px 2px rgb(109, 103, 103);\n}\n\n#home-heading,\n#contact-heading {\n  color: aliceblue;\n  font-size: 85px;\n  margin: 0;\n}\n\n#home-text,\n#contact-text {\n  color: aliceblue;\n  font-size: 20px;\n}\n\n#home-wrapper {\n  display: flex;\n  flex-direction: column;\n  max-width: 375px;\n  margin-top: 20%;\n}\n\n#home-wrapper > img {\n  margin-top: 20%;\n  width: 200%;\n  height: auto;\n  align-self: center;\n}\n\n#menu-wrapper {\n  flex-grow: 1;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 100px 5fr;\n  grid-template-areas: \"heading heading\" \"food drink\";\n  padding: 10px;\n  color: white;\n}\n\n#menu-heading {\n  grid-area: heading;\n  text-align: center;\n  font-size: 75px;\n  margin-top: 20px;\n}\n\n#food-list {\n  grid-area: food;\n  padding: 10px;\n}\n\n#drink-list {\n  grid-area: drink;\n  padding: 10px;\n}\n\n.item-divide {\n  display: grid;\n  grid-template-columns: 4fr 1fr;\n  align-items: center;\n  padding: 10px;\n}\n\n.item-divide > img {\n  max-height: auto;\n  max-width: 135px;\n  justify-self: center;\n  margin: 2px;\n}\n\n#contact-wrapper {\n  white-space: pre-line;\n  margin-top: 10%;\n  margin-left: 10%;\n}\n\n#contact-wrapper > img {\n  margin-top: 5%;\n  width: 90%;\n  height: auto;\n  align-self: center;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateContent)
/* harmony export */ });
/* harmony import */ var _map_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map.jpg */ "./src/map.jpg");


const setContent = (element) => {
  const contentWrapper = element;
  const div = document.createElement("div");

  // Heading
  const heading = document.createElement("h1");
  heading.textContent = "Find us here";
  heading.setAttribute("id", "contact-heading");

  // Address
  const text = document.createElement("p");
  text.textContent =
    "We are a 9 minute walk from Tokyo station.\n\n〒107-0062\n東京都港区南青山3-5-12\nB1F";
  text.setAttribute("id", "contact-text");

  // Map
  const map = new Image();
  map.src = _map_jpg__WEBPACK_IMPORTED_MODULE_0__;

  // Append divs
  const wrapper = document.createElement("div");
  wrapper.setAttribute("id", "contact-wrapper");

  wrapper.appendChild(heading);
  wrapper.appendChild(text);
  wrapper.appendChild(map);

  div.appendChild(wrapper);
  contentWrapper.appendChild(div);
};
function updateContent(div) {
  // Remove all child divs then call setContent
  const element = div;
  while (element.firstChild) {
    element.firstChild.remove();
  }
  setContent(element);
}


/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateContent)
/* harmony export */ });
/* harmony import */ var _sake_home_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sake-home.jpg */ "./src/sake-home.jpg");


const setContent = (element) => {
  const contentWrapper = element;
  const div = document.createElement("div");

  // Heading
  const heading = document.createElement("h1");
  heading.textContent = "Seki Lounge";
  heading.setAttribute("id", "home-heading");

  // Description
  const text = document.createElement("p");
  text.textContent =
    '"Escape the ordinary and journey underground to our hidden Japanese oasis."';
  text.setAttribute("id", "home-text");

  const wrapper = document.createElement("div");
  wrapper.setAttribute("id", "home-wrapper");

  // Image
  const img = new Image();
  img.src = _sake_home_jpg__WEBPACK_IMPORTED_MODULE_0__;

  // Append divs
  wrapper.appendChild(heading);
  wrapper.appendChild(text);
  wrapper.appendChild(img);

  div.appendChild(wrapper);
  contentWrapper.appendChild(div);
};

function updateContent(div) {
  // Remove all child divs then call setContent
  const element = div;
  while (element.firstChild) {
    element.firstChild.remove();
  }
  setContent(element);
}


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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


/***/ }),

/***/ "./src/pagesetup.js":
/*!**************************!*\
  !*** ./src/pagesetup.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setUpPage)
/* harmony export */ });
function setUpPage(element) {
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
  footer.setAttribute("id", "footer");

  const anchor = document.createElement("a");
  anchor.setAttribute("href", "https://github.com/ndrewta");
  anchor.setAttribute("target", "_blank");
  anchor.setAttribute("rel", "noopener noreferrer");
  anchor.textContent = "Site designed by ndrewta";
  footer.appendChild(anchor);

  // Append divs
  element.appendChild(header);
  element.appendChild(mainContent);
  element.appendChild(footer);
}


/***/ }),

/***/ "./src/background.jpg":
/*!****************************!*\
  !*** ./src/background.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9b67d9e236deb69885d1.jpg";

/***/ }),

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

/***/ "./src/glacial.woff":
/*!**************************!*\
  !*** ./src/glacial.woff ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6b99f07978ea512a18ee.woff";

/***/ }),

/***/ "./src/glacial.woff2":
/*!***************************!*\
  !*** ./src/glacial.woff2 ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7c90a76c94e9d601258c.woff2";

/***/ }),

/***/ "./src/map.jpg":
/*!*********************!*\
  !*** ./src/map.jpg ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "350ffb8e63a846920217.jpg";

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

/***/ "./src/sake-home.jpg":
/*!***************************!*\
  !*** ./src/sake-home.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b4bad50dc86eb2136859.jpg";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _pagesetup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pagesetup */ "./src/pagesetup.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact */ "./src/contact.js");






// Setup header, content, footer
const content = document.getElementById("content");
(0,_pagesetup__WEBPACK_IMPORTED_MODULE_1__["default"])(content);
const mainContent = document.getElementById("main-content");
(0,_home__WEBPACK_IMPORTED_MODULE_2__["default"])(mainContent);

//
const homeBtn = document.getElementById("homeBtn");
const menuBtn = document.getElementById("menuBtn");
const contactBtn = document.getElementById("contactBtn");
homeBtn.addEventListener("click", () => (0,_home__WEBPACK_IMPORTED_MODULE_2__["default"])(mainContent));
menuBtn.addEventListener("click", () => (0,_menu__WEBPACK_IMPORTED_MODULE_3__["default"])(mainContent));
contactBtn.addEventListener("click", () => (0,_contact__WEBPACK_IMPORTED_MODULE_4__["default"])(mainContent));

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBLFFBQVEsc0NBQU87QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsd0NBQVM7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVDQUFRO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0NBQU87QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEseUNBQVU7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHlDQUFVO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsd0NBQVM7QUFDakI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNuSmU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQzNDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDZTtBQUNKO0FBQ0E7QUFDTTs7QUFFdEM7QUFDQTtBQUNBLHNEQUFTO0FBQ1Q7QUFDQSxpREFBVTs7QUFFVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxpREFBVTtBQUNsRCx3Q0FBd0MsaURBQVU7QUFDbEQsMkNBQTJDLG9EQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VzZXR1cC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9nbGFjaWFsLndvZmZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2dsYWNpYWwud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCJiYWNrZ3JvdW5kLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcImdsYWNpYWxcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdChcXFwid29mZlxcXCIpLFxcbiAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKTtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogZ2xhY2lhbCwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIG1hcmdpbjogMDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBhbGw6IHVuc2V0O1xcbiAgd2lkdGg6IDExNXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyOiBzb2xpZCByZ2IoMjAxLCAxOTgsIDIzMSkgMXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm94LXNoYWRvdzogMnB4IDJweCAycHggMnB4IHJnYigxMDksIDEwMywgMTAzKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTMyLCAxNDAsIDE0OCwgMC41KTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTg3LCAxOTksIDIxMSwgMC41KTtcXG59XFxuXFxuYnV0dG9uOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDk0LCA5OCwgMTAyLCAwLjUpO1xcbn1cXG5cXG5hOmxpbmssXFxuYTp2aXNpdGVkIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxudWwge1xcbiAgbWFyZ2luLXRvcDogNTBweDtcXG4gIHBhZGRpbmctbGVmdDogMTVweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XFxufVxcblxcbmxpIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBib3JkZXI6IHNvbGlkIHJnYigxNDAsIDE0MCwgMTQ2KSAxcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDJweCAycHggcmdiKDEwOSwgMTAzLCAxMDMpO1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTMyLCAxNDAsIDE0OCwgMC42KTtcXG4gIG1hcmdpbi10b3A6IDI1cHg7XFxufVxcblxcbmgyIHtcXG4gIGZvbnQtc2l6ZTogMzVweDtcXG4gIG1hcmdpbi10b3A6IC01cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXI6IHNvbGlkIHJnYigxODMsIDE4MywgMjE2KSAxcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDJweCAycHggcmdiKDEwOSwgMTAzLCAxMDMpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMzIsIDE0MCwgMTQ4LCAwLjUpO1xcbn1cXG5cXG5oMyB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbiNjb250ZW50IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICBcXFwiaGVhZGVyXFxcIlxcbiAgICBcXFwiY29udGVudFxcXCJcXG4gICAgXFxcImZvb3RlclxcXCI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogNzVweCAxZnIgMTVweDtcXG4gIGdhcDogMjBweDtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuI2hlYWRlciB7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDJweCAycHggcmdiKDEwOSwgMTAzLCAxMDMpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiA4MCU7XFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcXG4gIGJhY2tncm91bmQ6IHJnYigyMjEsIDIwMywgMjAzLCA1MCUpO1xcbn1cXG5cXG4jaGVhZGVyLWl0ZW1zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB3aWR0aDogNjUwcHg7XFxufVxcblxcbiNmb290ZXIge1xcbiAgZmxleC1zaHJpbms6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI21haW4tY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogODAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgYmFja2dyb3VuZDogcmdiKDIyMSwgMjAzLCAyMDMsIDUwJSk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDJweCAycHggcmdiKDEwOSwgMTAzLCAxMDMpO1xcbn1cXG5cXG4jaG9tZS1oZWFkaW5nLFxcbiNjb250YWN0LWhlYWRpbmcge1xcbiAgY29sb3I6IGFsaWNlYmx1ZTtcXG4gIGZvbnQtc2l6ZTogODVweDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuI2hvbWUtdGV4dCxcXG4jY29udGFjdC10ZXh0IHtcXG4gIGNvbG9yOiBhbGljZWJsdWU7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbiNob21lLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXgtd2lkdGg6IDM3NXB4O1xcbiAgbWFyZ2luLXRvcDogMjAlO1xcbn1cXG5cXG4jaG9tZS13cmFwcGVyID4gaW1nIHtcXG4gIG1hcmdpbi10b3A6IDIwJTtcXG4gIHdpZHRoOiAyMDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4jbWVudS13cmFwcGVyIHtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4IDVmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJoZWFkaW5nIGhlYWRpbmdcXFwiIFxcXCJmb29kIGRyaW5rXFxcIjtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbiNtZW51LWhlYWRpbmcge1xcbiAgZ3JpZC1hcmVhOiBoZWFkaW5nO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiA3NXB4O1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuXFxuI2Zvb2QtbGlzdCB7XFxuICBncmlkLWFyZWE6IGZvb2Q7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4jZHJpbmstbGlzdCB7XFxuICBncmlkLWFyZWE6IGRyaW5rO1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLml0ZW0tZGl2aWRlIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDRmciAxZnI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLml0ZW0tZGl2aWRlID4gaW1nIHtcXG4gIG1heC1oZWlnaHQ6IGF1dG87XFxuICBtYXgtd2lkdGg6IDEzNXB4O1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBtYXJnaW46IDJweDtcXG59XFxuXFxuI2NvbnRhY3Qtd3JhcHBlciB7XFxuICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XFxuICBtYXJnaW4tdG9wOiAxMCU7XFxuICBtYXJnaW4tbGVmdDogMTAlO1xcbn1cXG5cXG4jY29udGFjdC13cmFwcGVyID4gaW1nIHtcXG4gIG1hcmdpbi10b3A6IDUlO1xcbiAgd2lkdGg6IDkwJTtcXG4gIGhlaWdodDogYXV0bztcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHNCQUFzQjtFQUN0QjsyREFDd0M7QUFDMUM7O0FBRUE7RUFDRSxrREFBa0Q7RUFDbEQsU0FBUztFQUNULHlEQUF1QztFQUN2QyxxQkFBcUI7RUFDckIsa0NBQWtDO0VBQ2xDLDRCQUE0QjtFQUM1Qiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixvQ0FBb0M7RUFDcEMsa0JBQWtCO0VBQ2xCLDhDQUE4QztFQUM5QywwQ0FBMEM7RUFDMUMsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSx3Q0FBd0M7QUFDMUM7O0FBRUE7O0VBRUUscUJBQXFCO0VBQ3JCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG9DQUFvQztFQUNwQyxrQkFBa0I7RUFDbEIsOENBQThDO0VBQzlDLG1CQUFtQjtFQUNuQiwwQ0FBMEM7RUFDMUMsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsb0NBQW9DO0VBQ3BDLGtCQUFrQjtFQUNsQiw4Q0FBOEM7RUFDOUMsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiOzs7WUFHVTtFQUNWLDBCQUEwQjtFQUMxQixpQ0FBaUM7RUFDakMsU0FBUztFQUNULGFBQWE7RUFDYixjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLDhDQUE4QztFQUM5QyxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsVUFBVTtFQUNWLFlBQVk7RUFDWixZQUFZO0VBQ1osbUNBQW1DO0VBQ25DLGtCQUFrQjtFQUNsQiw4Q0FBOEM7QUFDaEQ7O0FBRUE7O0VBRUUsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixTQUFTO0FBQ1g7O0FBRUE7O0VBRUUsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsNkJBQTZCO0VBQzdCLG1EQUFtRDtFQUNuRCxhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxVQUFVO0VBQ1YsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiZ2xhY2lhbFxcXCI7XFxuICBzcmM6IHVybChcXFwiLi9nbGFjaWFsLndvZmZcXFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKSxcXG4gICAgdXJsKFxcXCIuL2dsYWNpYWwud29mZjJcXFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIik7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IGdsYWNpYWwsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBtYXJnaW46IDA7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImJhY2tncm91bmQuanBnXFxcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBhbGw6IHVuc2V0O1xcbiAgd2lkdGg6IDExNXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyOiBzb2xpZCByZ2IoMjAxLCAxOTgsIDIzMSkgMXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm94LXNoYWRvdzogMnB4IDJweCAycHggMnB4IHJnYigxMDksIDEwMywgMTAzKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTMyLCAxNDAsIDE0OCwgMC41KTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTg3LCAxOTksIDIxMSwgMC41KTtcXG59XFxuXFxuYnV0dG9uOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDk0LCA5OCwgMTAyLCAwLjUpO1xcbn1cXG5cXG5hOmxpbmssXFxuYTp2aXNpdGVkIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxudWwge1xcbiAgbWFyZ2luLXRvcDogNTBweDtcXG4gIHBhZGRpbmctbGVmdDogMTVweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XFxufVxcblxcbmxpIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBib3JkZXI6IHNvbGlkIHJnYigxNDAsIDE0MCwgMTQ2KSAxcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDJweCAycHggcmdiKDEwOSwgMTAzLCAxMDMpO1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTMyLCAxNDAsIDE0OCwgMC42KTtcXG4gIG1hcmdpbi10b3A6IDI1cHg7XFxufVxcblxcbmgyIHtcXG4gIGZvbnQtc2l6ZTogMzVweDtcXG4gIG1hcmdpbi10b3A6IC01cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXI6IHNvbGlkIHJnYigxODMsIDE4MywgMjE2KSAxcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDJweCAycHggcmdiKDEwOSwgMTAzLCAxMDMpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMzIsIDE0MCwgMTQ4LCAwLjUpO1xcbn1cXG5cXG5oMyB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbiNjb250ZW50IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICBcXFwiaGVhZGVyXFxcIlxcbiAgICBcXFwiY29udGVudFxcXCJcXG4gICAgXFxcImZvb3RlclxcXCI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogNzVweCAxZnIgMTVweDtcXG4gIGdhcDogMjBweDtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuI2hlYWRlciB7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDJweCAycHggcmdiKDEwOSwgMTAzLCAxMDMpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiA4MCU7XFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcXG4gIGJhY2tncm91bmQ6IHJnYigyMjEsIDIwMywgMjAzLCA1MCUpO1xcbn1cXG5cXG4jaGVhZGVyLWl0ZW1zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB3aWR0aDogNjUwcHg7XFxufVxcblxcbiNmb290ZXIge1xcbiAgZmxleC1zaHJpbms6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI21haW4tY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogODAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgYmFja2dyb3VuZDogcmdiKDIyMSwgMjAzLCAyMDMsIDUwJSk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDJweCAycHggcmdiKDEwOSwgMTAzLCAxMDMpO1xcbn1cXG5cXG4jaG9tZS1oZWFkaW5nLFxcbiNjb250YWN0LWhlYWRpbmcge1xcbiAgY29sb3I6IGFsaWNlYmx1ZTtcXG4gIGZvbnQtc2l6ZTogODVweDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuI2hvbWUtdGV4dCxcXG4jY29udGFjdC10ZXh0IHtcXG4gIGNvbG9yOiBhbGljZWJsdWU7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbiNob21lLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXgtd2lkdGg6IDM3NXB4O1xcbiAgbWFyZ2luLXRvcDogMjAlO1xcbn1cXG5cXG4jaG9tZS13cmFwcGVyID4gaW1nIHtcXG4gIG1hcmdpbi10b3A6IDIwJTtcXG4gIHdpZHRoOiAyMDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4jbWVudS13cmFwcGVyIHtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4IDVmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJoZWFkaW5nIGhlYWRpbmdcXFwiIFxcXCJmb29kIGRyaW5rXFxcIjtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbiNtZW51LWhlYWRpbmcge1xcbiAgZ3JpZC1hcmVhOiBoZWFkaW5nO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiA3NXB4O1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuXFxuI2Zvb2QtbGlzdCB7XFxuICBncmlkLWFyZWE6IGZvb2Q7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4jZHJpbmstbGlzdCB7XFxuICBncmlkLWFyZWE6IGRyaW5rO1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLml0ZW0tZGl2aWRlIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDRmciAxZnI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLml0ZW0tZGl2aWRlID4gaW1nIHtcXG4gIG1heC1oZWlnaHQ6IGF1dG87XFxuICBtYXgtd2lkdGg6IDEzNXB4O1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBtYXJnaW46IDJweDtcXG59XFxuXFxuI2NvbnRhY3Qtd3JhcHBlciB7XFxuICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XFxuICBtYXJnaW4tdG9wOiAxMCU7XFxuICBtYXJnaW4tbGVmdDogMTAlO1xcbn1cXG5cXG4jY29udGFjdC13cmFwcGVyID4gaW1nIHtcXG4gIG1hcmdpbi10b3A6IDUlO1xcbiAgd2lkdGg6IDkwJTtcXG4gIGhlaWdodDogYXV0bztcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgbWFwSW1nIGZyb20gXCIuL21hcC5qcGdcIjtcblxuY29uc3Qgc2V0Q29udGVudCA9IChlbGVtZW50KSA9PiB7XG4gIGNvbnN0IGNvbnRlbnRXcmFwcGVyID0gZWxlbWVudDtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAvLyBIZWFkaW5nXG4gIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGhlYWRpbmcudGV4dENvbnRlbnQgPSBcIkZpbmQgdXMgaGVyZVwiO1xuICBoZWFkaW5nLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY29udGFjdC1oZWFkaW5nXCIpO1xuXG4gIC8vIEFkZHJlc3NcbiAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICB0ZXh0LnRleHRDb250ZW50ID1cbiAgICBcIldlIGFyZSBhIDkgbWludXRlIHdhbGsgZnJvbSBUb2t5byBzdGF0aW9uLlxcblxcbuOAkjEwNy0wMDYyXFxu5p2x5Lqs6YO95riv5Yy65Y2X6Z2S5bGxMy01LTEyXFxuQjFGXCI7XG4gIHRleHQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjb250YWN0LXRleHRcIik7XG5cbiAgLy8gTWFwXG4gIGNvbnN0IG1hcCA9IG5ldyBJbWFnZSgpO1xuICBtYXAuc3JjID0gbWFwSW1nO1xuXG4gIC8vIEFwcGVuZCBkaXZzXG4gIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB3cmFwcGVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY29udGFjdC13cmFwcGVyXCIpO1xuXG4gIHdyYXBwZXIuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gIHdyYXBwZXIuYXBwZW5kQ2hpbGQodGV4dCk7XG4gIHdyYXBwZXIuYXBwZW5kQ2hpbGQobWFwKTtcblxuICBkaXYuYXBwZW5kQ2hpbGQod3JhcHBlcik7XG4gIGNvbnRlbnRXcmFwcGVyLmFwcGVuZENoaWxkKGRpdik7XG59O1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXBkYXRlQ29udGVudChkaXYpIHtcbiAgLy8gUmVtb3ZlIGFsbCBjaGlsZCBkaXZzIHRoZW4gY2FsbCBzZXRDb250ZW50XG4gIGNvbnN0IGVsZW1lbnQgPSBkaXY7XG4gIHdoaWxlIChlbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICBlbGVtZW50LmZpcnN0Q2hpbGQucmVtb3ZlKCk7XG4gIH1cbiAgc2V0Q29udGVudChlbGVtZW50KTtcbn1cbiIsImltcG9ydCBzYWtlSW1nIGZyb20gXCIuL3Nha2UtaG9tZS5qcGdcIjtcblxuY29uc3Qgc2V0Q29udGVudCA9IChlbGVtZW50KSA9PiB7XG4gIGNvbnN0IGNvbnRlbnRXcmFwcGVyID0gZWxlbWVudDtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAvLyBIZWFkaW5nXG4gIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGhlYWRpbmcudGV4dENvbnRlbnQgPSBcIlNla2kgTG91bmdlXCI7XG4gIGhlYWRpbmcuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJob21lLWhlYWRpbmdcIik7XG5cbiAgLy8gRGVzY3JpcHRpb25cbiAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICB0ZXh0LnRleHRDb250ZW50ID1cbiAgICAnXCJFc2NhcGUgdGhlIG9yZGluYXJ5IGFuZCBqb3VybmV5IHVuZGVyZ3JvdW5kIHRvIG91ciBoaWRkZW4gSmFwYW5lc2Ugb2FzaXMuXCInO1xuICB0ZXh0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaG9tZS10ZXh0XCIpO1xuXG4gIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB3cmFwcGVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaG9tZS13cmFwcGVyXCIpO1xuXG4gIC8vIEltYWdlXG4gIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuICBpbWcuc3JjID0gc2FrZUltZztcblxuICAvLyBBcHBlbmQgZGl2c1xuICB3cmFwcGVyLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICB3cmFwcGVyLmFwcGVuZENoaWxkKHRleHQpO1xuICB3cmFwcGVyLmFwcGVuZENoaWxkKGltZyk7XG5cbiAgZGl2LmFwcGVuZENoaWxkKHdyYXBwZXIpO1xuICBjb250ZW50V3JhcHBlci5hcHBlbmRDaGlsZChkaXYpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXBkYXRlQ29udGVudChkaXYpIHtcbiAgLy8gUmVtb3ZlIGFsbCBjaGlsZCBkaXZzIHRoZW4gY2FsbCBzZXRDb250ZW50XG4gIGNvbnN0IGVsZW1lbnQgPSBkaXY7XG4gIHdoaWxlIChlbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICBlbGVtZW50LmZpcnN0Q2hpbGQucmVtb3ZlKCk7XG4gIH1cbiAgc2V0Q29udGVudChlbGVtZW50KTtcbn1cbiIsImltcG9ydCByYW1lbkltZyBmcm9tIFwiLi9yYW1lbi5qcGdcIjtcbmltcG9ydCB0YWNvSW1nIGZyb20gXCIuL3RhY28uanBnXCI7XG5pbXBvcnQgbmlnaXJpSW1nIGZyb20gXCIuL25pZ2lyaS5qcGdcIjtcbmltcG9ydCBjdXJyeUltZyBmcm9tIFwiLi9jdXJyeS5qcGdcIjtcbmltcG9ydCBzYWtlSW1nIGZyb20gXCIuL3Nha2UuanBnXCI7XG5pbXBvcnQgbWFydGluaUltZyBmcm9tIFwiLi9tYXJ0aW5pLmpwZ1wiO1xuaW1wb3J0IHNhbmdyaWFJbWcgZnJvbSBcIi4vc2FuZ3JpYS5qcGdcIjtcbmltcG9ydCBnaW1sZXRJbWcgZnJvbSBcIi4vZ2ltbGV0LmpwZ1wiO1xuXG5jb25zdCBmb29kT25lID0ge1xuICBuYW1lOiBcIlJhbWVuIFJlYmVsbGlvblwiLFxuICBkZXNjcmlwdGlvbjpcbiAgICBcIkEgaGVhcnR5IGJvd2wgb2YgdHJhZGl0aW9uIHJhbWVuIG5vb2RsZXMgaW4gYSBzYXZvcnkgYnJvdGgsXFxuXCIgK1xuICAgIFwidG9wcGVkIHdpdGggdGVuZGVyIHNsaWNlcyBvZiBjaGFzaHUgcG9yaywgYmFtYm9vIHNob290cywgc2NhbGxpb25zIGFuZCBhIHBlcmZlY3RseSBzb2Z0IGJvaWxlZCBlZ2cuXCIsXG4gIHByaWNlOiBcIiQxMi41MFwiLFxuICBpY29uOiByYW1lbkltZyxcbn07XG5jb25zdCBmb29kVHdvID0ge1xuICBuYW1lOiBcIlRva3lvIFRhY29zXCIsXG4gIGRlc2NyaXB0aW9uOlxuICAgIFwiQSBmdXNpb24gb2YgSmFwYW5lc2UgYW5kIE1leGljYW4gY3Vpc2luZSwgZmVhdHVyaW5nIGNyaXNweSB0ZW1wdXJhIHNocmltcCwgYXZvY2FkbywgcGlja2xlZCBkYWlrb24gYW5kIGNhcnJvdCxcXG5cIiArXG4gICAgXCJhbmQgYSBkcml6emxlIG9mIHNwaWN5IG1heW8gaW4gYSB3YXJtIHRvcnRpbGxhLiBTZXJ2ZWQgd2l0aCBhIHNpZGUgb2Ygd2FzYWJpLWluZnVzZWQgc2Fsc2EuXCIsXG4gIHByaWNlOiBcIiQxMC4wMFwiLFxuICBpY29uOiB0YWNvSW1nLFxufTtcbmNvbnN0IGZvb2RUaHJlZSA9IHtcbiAgbmFtZTogXCJOaW5qYSBOaWdpcmlcIixcbiAgZGVzY3JpcHRpb246XG4gICAgXCJBIHNlbGVjdGlvbiBvZiBiaXRlLXNpemVkIHN1c2hpIGZlYXR1cmluZyBmcmVzaCBzYWxtb24sIHR1bmEsIHllbGxvd3RhaWwsIGFuZCBlZWwuXFxuXCIgK1xuICAgIFwiRWFjaCBwaWVjZSBpcyBleHBlcnRseSBoYW5kLXByZXNzZWQgYW5kIGdhcm5pc2hlZCB3aXRoIGEgZGFiIG9mIHdhc2FiaSBhbmQgYSB0b3VjaCBvZiBzb3kgc2F1Y2UuXCIsXG4gIHByaWNlOiBcIiQxNC4wMFwiLFxuICBpY29uOiBuaWdpcmlJbWcsXG59O1xuY29uc3QgZm9vZEZvdXIgPSB7XG4gIG5hbWU6IFwiS2F0c3UgQ3VycnlcIixcbiAgZGVzY3JpcHRpb246XG4gICAgXCJUZW5kZXIgYnJlYWRlZCBjaGlja2VuIGN1dGxldCBzZXJ2ZWQgb24gYSBiZWQgb2Ygc3RlYW1pbmcgSmFwYW5lc2UgcmljZSB3aXRoIGEgc2lkZSBvZiBjcmVhbXkgY3Vycnkgc2F1Y2UuXCIgK1xuICAgIFwiVG9wcGVkIHdpdGggY3Jpc3B5IGZyaWVkIG9uaW9ucyBhbmQgYSBzcHJpbmtsZSBvZiBmcmVzaCBwYXJzbGV5LlwiLFxuICBwcmljZTogXCIkMTYuNTBcIixcbiAgaWNvbjogY3VycnlJbWcsXG59O1xuY29uc3QgZHJpbmtPbmUgPSB7XG4gIG5hbWU6IFwiU2FtdXJhaSBTYWtlXCIsXG4gIGRlc2NyaXB0aW9uOlxuICAgIFwiQSBwcmVtaXVtIHNha2Ugc2VydmVkIGNoaWxsZWQgaW4gYSB0cmFkaXRpb25hbCBjZXJhbWljIGN1cC4gUmljaCBhbmQgZnJhZ3JhbnQgd2l0aCBhIHNtb290aCBmaW5pc2guXCIsXG4gIHByaWNlOiBcIiQ4LjAwXCIsXG4gIGljb246IHNha2VJbWcsXG59O1xuY29uc3QgZHJpbmtUd28gPSB7XG4gIG5hbWU6IFwiTWF0Y2hhIE1hcnRpbmlcIixcbiAgZGVzY3JpcHRpb246XG4gICAgXCJBIGRlY2FkZW50IGJsZW5kIG9mIHByZW1pdW0gdm9ka2EsIGdyZWVuIHRlYSBsaXF1ZXVyLCBhbmQgcHVyZSBtYXRjaGEgcG93ZGVyLlxcblwiICtcbiAgICBcIlNlcnZlZCB1cCB3aXRoIGEgZHVzdGluZyBvZiBtYXRjaGEgYW5kIGEgZGVsaWNhdGUgbGVtb24gdHdpc3QuXCIsXG4gIHByaWNlOiBcIiQxMi4wMFwiLFxuICBpY29uOiBtYXJ0aW5pSW1nLFxufTtcbmNvbnN0IGRyaW5rVGhyZWUgPSB7XG4gIG5hbWU6IFwiU2hvZ3VuIFNhbmdyaWFcIixcbiAgZGVzY3JpcHRpb246XG4gICAgXCJBIHJlZnJlc2hpbmcgdHdpc3Qgb24gdGhlIGNsYXNzaWMgU3BhbmlzaCBkcmluaywgZmVhdHVyaW5nIHJlZCB3aW5lLCBjaXRydXMgZnJ1aXRzLCBhbmQgYSBzcGxhc2ggb2YgSmFwYW5lc2UgeXV6dSBqdWljZS5cXG5cIiArXG4gICAgXCJTZXJ2ZWQgb3ZlciBpY2Ugd2l0aCBhIHNsaWNlIG9mIGZyZXNoIG9yYW5nZS5cIixcbiAgcHJpY2U6IFwiJDkuMDBcIixcbiAgaWNvbjogc2FuZ3JpYUltZyxcbn07XG5cbmNvbnN0IGRyaW5rRm91ciA9IHtcbiAgbmFtZTogXCJHZWlzaGEgR2ltbGV0XCIsXG4gIGRlc2NyaXB0aW9uOlxuICAgIFwiQSBjbGFzc2ljIGdpbiBnaW1sZXQgd2l0aCBhIEphcGFuZXNlIHR3aXN0LlxcblwiICtcbiAgICBcIk1hZGUgd2l0aCBwcmVtaXVtIGdpbiwgZnJlc2ggbGltZSBqdWljZSwgYW5kIGEgc3BsYXNoIG9mIHN3ZWV0IGFuZCBzb3VyIHl1enUgc3lydXAuIFNlcnZlZCB1cCB3aXRoIGEgYmVhdXRpZnVsIGVkaWJsZSBmbG93ZXIgZ2FybmlzaC5cIixcbiAgcHJpY2U6IFwiJDExLjAwXCIsXG4gIGljb246IGdpbWxldEltZyxcbn07XG5cbmNvbnN0IGZvb2RzTGlzdCA9IFtmb29kT25lLCBmb29kVHdvLCBmb29kVGhyZWUsIGZvb2RGb3VyXTtcbmNvbnN0IGRyaW5rc0xpc3QgPSBbZHJpbmtPbmUsIGRyaW5rVHdvLCBkcmlua1RocmVlLCBkcmlua0ZvdXJdO1xuXG5jb25zdCBjcmVhdGVMaXN0SXRlbSA9IChpdGVtKSA9PiB7XG4gIGNvbnN0IGxpc3RFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBjb25zdCBpdGVtV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGl0ZW1XcmFwcGVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaXRlbS1kaXZpZGVcIik7XG5cbiAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgbmFtZS50ZXh0Q29udGVudCA9IGl0ZW0ubmFtZTtcblxuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGl0ZW0uZGVzY3JpcHRpb247XG5cbiAgY29uc3QgcHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgcHJpY2UudGV4dENvbnRlbnQgPSBpdGVtLnByaWNlO1xuXG4gIGNvbnN0IGljb24gPSBuZXcgSW1hZ2UoKTtcbiAgaWNvbi5zcmMgPSBpdGVtLmljb247XG5cbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChuYW1lKTtcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQocHJpY2UpO1xuXG4gIGl0ZW1XcmFwcGVyLmFwcGVuZENoaWxkKGNvbnRlbnREaXYpO1xuICBpdGVtV3JhcHBlci5hcHBlbmRDaGlsZChpY29uKTtcbiAgbGlzdEVsZW0uYXBwZW5kQ2hpbGQoaXRlbVdyYXBwZXIpO1xuXG4gIHJldHVybiBsaXN0RWxlbTtcbn07XG5cbmNvbnN0IGNyZWF0ZUxpc3QgPSAoYXJyYXksIHRleHQpID0+IHtcbiAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgaGVhZGluZy50ZXh0Q29udGVudCA9IHRleHQ7XG4gIGxpc3QuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG5cbiAgYXJyYXkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGl0ZW0gPSBjcmVhdGVMaXN0SXRlbShlbGVtZW50KTtcbiAgICBsaXN0LmFwcGVuZENoaWxkKGl0ZW0pO1xuICB9KTtcbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5jb25zdCBzZXRDb250ZW50ID0gKGVsZW1lbnQpID0+IHtcbiAgY29uc3QgY29udGVudFdyYXBwZXIgPSBlbGVtZW50O1xuICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgd3JhcHBlci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1lbnUtd3JhcHBlclwiKTtcblxuICAvLyBIZWFkaW5nc1xuICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBoZWFkaW5nLnRleHRDb250ZW50ID0gXCJNZW51XCI7XG4gIGhlYWRpbmcuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtZW51LWhlYWRpbmdcIik7XG5cbiAgLy8gRm9vZHMgbGlzdFxuICBjb25zdCBmTGlzdCA9IGNyZWF0ZUxpc3QoZm9vZHNMaXN0LCBcIkZvb2RzXCIpO1xuICBjb25zdCBkTGlzdCA9IGNyZWF0ZUxpc3QoZHJpbmtzTGlzdCwgXCJEcmlua3NcIik7XG5cbiAgLy8gQXBwZW5kIGxpc3QgYW5kIGhlYWRpbmdcbiAgd3JhcHBlci5hcHBlbmRDaGlsZChoZWFkaW5nKTtcbiAgd3JhcHBlci5hcHBlbmRDaGlsZChmTGlzdCk7XG4gIHdyYXBwZXIuYXBwZW5kQ2hpbGQoZExpc3QpO1xuICBjb250ZW50V3JhcHBlci5hcHBlbmRDaGlsZCh3cmFwcGVyKTtcbn07XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1cGRhdGVDb250ZW50KGRpdikge1xuICAvLyBSZW1vdmUgYWxsIGNoaWxkIGRpdnMgdGhlbiBjYWxsIHNldENvbnRlbnRcbiAgY29uc3QgZWxlbWVudCA9IGRpdjtcbiAgd2hpbGUgKGVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgIGVsZW1lbnQuZmlyc3RDaGlsZC5yZW1vdmUoKTtcbiAgfVxuICBzZXRDb250ZW50KGVsZW1lbnQpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0VXBQYWdlKGVsZW1lbnQpIHtcbiAgLy8gSGVhZGVyXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhlYWRlci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhlYWRlclwiKTtcblxuICAvLyBIZWFkZXIgaXRlbXNcbiAgY29uc3QgaGVhZGVySXRlbXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBoZWFkZXJJdGVtcy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhlYWRlci1pdGVtc1wiKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlckl0ZW1zKTtcblxuICBjb25zdCBob21lQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgaG9tZUJ0bi50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xuICBob21lQnRuLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaG9tZUJ0blwiKTtcbiAgY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIG1lbnVCdG4udGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcbiAgbWVudUJ0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1lbnVCdG5cIik7XG4gIGNvbnN0IGNvbnRhY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb250YWN0QnRuLnRleHRDb250ZW50ID0gXCJDb250YWN0XCI7XG4gIGNvbnRhY3RCdG4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjb250YWN0QnRuXCIpO1xuXG4gIGhlYWRlckl0ZW1zLmFwcGVuZENoaWxkKGhvbWVCdG4pO1xuICBoZWFkZXJJdGVtcy5hcHBlbmRDaGlsZChtZW51QnRuKTtcbiAgaGVhZGVySXRlbXMuYXBwZW5kQ2hpbGQoY29udGFjdEJ0bik7XG5cbiAgLy8gTWFpbiBjb250ZW50XG4gIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWFpbkNvbnRlbnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtYWluLWNvbnRlbnRcIik7XG5cbiAgLy8gRm9vdGVyXG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGZvb3Rlci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImZvb3RlclwiKTtcblxuICBjb25zdCBhbmNob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgYW5jaG9yLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCJodHRwczovL2dpdGh1Yi5jb20vbmRyZXd0YVwiKTtcbiAgYW5jaG9yLnNldEF0dHJpYnV0ZShcInRhcmdldFwiLCBcIl9ibGFua1wiKTtcbiAgYW5jaG9yLnNldEF0dHJpYnV0ZShcInJlbFwiLCBcIm5vb3BlbmVyIG5vcmVmZXJyZXJcIik7XG4gIGFuY2hvci50ZXh0Q29udGVudCA9IFwiU2l0ZSBkZXNpZ25lZCBieSBuZHJld3RhXCI7XG4gIGZvb3Rlci5hcHBlbmRDaGlsZChhbmNob3IpO1xuXG4gIC8vIEFwcGVuZCBkaXZzXG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgZWxlbWVudC5hcHBlbmRDaGlsZChtYWluQ29udGVudCk7XG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgcGFnZVNldHVwIGZyb20gXCIuL3BhZ2VzZXR1cFwiO1xuaW1wb3J0IHVwZGF0ZUhvbWUgZnJvbSBcIi4vaG9tZVwiO1xuaW1wb3J0IHVwZGF0ZU1lbnUgZnJvbSBcIi4vbWVudVwiO1xuaW1wb3J0IHVwZGF0ZUNvbnRhY3QgZnJvbSBcIi4vY29udGFjdFwiO1xuXG4vLyBTZXR1cCBoZWFkZXIsIGNvbnRlbnQsIGZvb3RlclxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbnBhZ2VTZXR1cChjb250ZW50KTtcbmNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluLWNvbnRlbnRcIik7XG51cGRhdGVIb21lKG1haW5Db250ZW50KTtcblxuLy9cbmNvbnN0IGhvbWVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvbWVCdG5cIik7XG5jb25zdCBtZW51QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51QnRuXCIpO1xuY29uc3QgY29udGFjdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGFjdEJ0blwiKTtcbmhvbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHVwZGF0ZUhvbWUobWFpbkNvbnRlbnQpKTtcbm1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHVwZGF0ZU1lbnUobWFpbkNvbnRlbnQpKTtcbmNvbnRhY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHVwZGF0ZUNvbnRhY3QobWFpbkNvbnRlbnQpKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==