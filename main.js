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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/about.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/about.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `.main-container {\n    grid-template-rows: 1fr auto;\n}\n\n.information-container {\n    grid-template-rows: auto;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-demo/./src/styles/about.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/index.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/index.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    font-family: Arial, sans-serif;\n    background-color: #f8f9fa;\n    color: #343a40;\n    display: grid;\n    grid-template-rows: auto 1fr auto;\n    min-height: 100vh;\n}\n\nheader {\n    background-color: #343a40;\n    color: #fff;\n    padding: 1rem;\n}\n\nnav {\n    display: flex;\n    justify-content: center;\n    gap: 1rem;\n}\n\nnav button {\n    background-color: #007bff;\n    color: #fff;\n    border: none;\n    padding: 0.5rem 1rem;\n    cursor: pointer;\n    font-size: 1rem;\n    transition: background-color 0.3s ease;\n}\n\nnav button:hover {\n    background-color: #0056b3;\n}\n\n.main-container {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: auto auto;\n    width: 100%;\n    height: 100%;\n}\n\n.hero-container {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: auto auto;\n    justify-items: center;\n    text-align: center;\n    position: relative;\n    height: 100%;\n    overflow: hidden; /* Hide overflowing content */\n}\n\n.hero-title {\n    font-size: 5rem;\n    grid-column: 1 / -1;\n    grid-row: 1 / 2;\n    padding: 3%;\n    z-index: 1;\n    color: #fff;\n    text-shadow: 2px 2px 4px rgba(0,0,0,0.7);\n}\n\n.hero-image {\n    position: absolute;\n    top: 0;\n    left: 50%;\n    transform: translateX(-50%);\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n}\n\n.information-container {\n    display: grid;\n    align-items: center;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 1fr;\n    padding: 0 5%;\n    color: white;\n    font-size: 1rem;\n    z-index: 2;\n    background-color: rgba(0, 0, 0, 0.5);\n    border-radius: 8px;\n}\n\n.information-order,\n.information-order a {\n    font-size: 4rem;\n    padding: 0 5% 10%;\n    text-align: center;\n    text-decoration: none;  \n    color: white;  \n}\n\n.information-paragraph {\n    text-align: justify;\n    line-height: 1.5;\n    font-size: 1.25rem;\n    padding: 1rem 25%;\n}\n\n.footer-container {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    background-color: #343a40;\n    color: #fff;\n    padding: 0.5rem 1rem;\n    align-items: center;\n    grid-column: 1 / -1;\n    margin-top: auto;\n    height: 100%;\n}\n\n.footer-group {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 0.5rem;\n}\n\n.footer-heading {\n    font-size: 1.25rem;\n    margin-bottom: 0.5rem;\n}\n\n.footer-info {\n    font-size: 1rem;\n}\n\n.footer-author {\n    grid-column: 3 / 4;\n    text-align: center;\n    margin-top: auto;\n    padding: 0.25rem 0;\n    font-size: 0.875rem;\n    line-height: 1;\n}\n\n.footer-author p {\n    margin: 0;\n    padding: 0;\n    font-size: 0.875rem;\n    line-height: 1;\n    height: auto;\n}\n\n@media (max-width: 768px) {\n    .hero-title {\n        font-size: 3rem;\n    }\n    \n    .hero-container {\n        grid-template-columns: 1fr;\n        grid-template-rows: auto auto;\n    }\n    \n    .hero-image {\n        max-width: 100%;\n        width: auto;\n        height: auto;\n    }\n    \n    .information-container {\n        grid-template-columns: 1fr;\n        grid-template-rows: auto auto;\n    }\n    \n    .information-heading {\n        grid-column: 1 / -1;\n        text-align: center;\n    }\n    \n    .information-paragraph {\n        grid-column: 1 / -1;\n        font-size: 1rem;\n    }\n    \n    .footer-container {\n        grid-template-columns: 1fr;\n    }\n    \n    .footer-information {\n        grid-template-columns: 1fr;\n    }\n    \n    .footer-author {\n        grid-column: 1 / -1;\n    }\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-demo/./src/styles/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/menu.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/menu.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `.information-container {\n    display: grid;\n    grid-template-rows: auto;\n}\n\n.menu-item-card {\n    background-color: black;\n    padding: 20px;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-demo/./src/styles/menu.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/about.css":
/*!******************************!*\
  !*** ./src/styles/about.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_about_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./about.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/about.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_about_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_about_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_about_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_about_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-demo/./src/styles/about.css?");

/***/ }),

/***/ "./src/styles/index.css":
/*!******************************!*\
  !*** ./src/styles/index.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/index.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-demo/./src/styles/index.css?");

/***/ }),

/***/ "./src/styles/menu.css":
/*!*****************************!*\
  !*** ./src/styles/menu.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./menu.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/menu.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-demo/./src/styles/menu.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/about_html.js":
/*!***************************!*\
  !*** ./src/about_html.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generateAboutHTML: () => (/* binding */ generateAboutHTML)\n/* harmony export */ });\n/* harmony import */ var _styles_about_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/about.css */ \"./src/styles/about.css\");\n/* harmony import */ var _Burger_img_3_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Burger_img_3.jpg */ \"./src/Burger_img_3.jpg\");\n\n\n\nfunction generateAboutHTML() {\n\n    const mainContainer = document.querySelector('.main-container');\n    mainContainer.innerHTML = '';\n\n    const heroContainer = document.createElement('div');\n    heroContainer.classList.add('hero-container');\n\n    const heroTitle = document.createElement('h1');\n    heroTitle.classList.add('hero-title');\n    heroTitle.textContent = \"About\";\n\n    const informationContainer = document.createElement('div');\n    informationContainer.classList.add('information-container');\n\n    const informationParagraph1 = document.createElement('p');\n    informationParagraph1.classList.add('information-paragraph');\n    informationParagraph1.textContent = \"We're glad that you're curious, there are no secrets here. \"\n    informationParagraph1.textContent += \"With an eye for taste and a mouth for adventure, we're nested \"\n    informationParagraph1.textContent += \"in the heart of Mergenville, a special little place we call home.\";\n\n    const informationParagraph2 = document.createElement('p');\n    informationParagraph2.classList.add('information-paragraph');\n    informationParagraph2.textContent = \"For any queries or orders, contact us directly on 0422457823 to see how we can help\"\n\n    const orderLink = document.createElement('a');\n    orderLink.href = '#';\n    orderLink.textContent = 'Order Now';\n\n    const img = document.createElement('img');\n    img.src = _Burger_img_3_jpg__WEBPACK_IMPORTED_MODULE_1__;\n    img.alt = 'Hero-image';\n    img.className = 'hero-image';\n\n    informationContainer.appendChild(informationParagraph1);\n    informationContainer.appendChild(informationParagraph2);\n    heroContainer.appendChild(heroTitle);\n    heroContainer.appendChild(informationContainer);\n    heroContainer.appendChild(img);\n    mainContainer.appendChild(heroContainer);\n\n    const footerContainer = document.createElement('div');\n    footerContainer.classList.add('footer-container');\n\n    const footerGroup1 = document.createElement('div');\n    footerGroup1.classList.add('footer-group');\n\n    const footerHeading1 = document.createElement('h2');\n    footerHeading1.classList.add('footer-heading');\n    footerHeading1.textContent = 'Find Us';\n\n    const footerInfo1 = document.createElement('span');\n    footerInfo1.classList.add('footer-info');\n    footerInfo1.textContent = '100 Street';\n\n    const footerInfo2 = document.createElement('span');\n    footerInfo2.classList.add('footer-info');\n    footerInfo2.textContent = 'Mergenville, Australia';\n\n    footerGroup1.appendChild(footerHeading1);\n    footerGroup1.appendChild(footerInfo1);\n    footerGroup1.appendChild(footerInfo2);\n\n    const footerGroup2 = document.createElement('div');\n    footerGroup2.classList.add('footer-group');\n\n    const footerHeading2 = document.createElement('h2');\n    footerHeading2.classList.add('footer-heading');\n    footerHeading2.textContent = 'Our Hours';\n\n    const footerInfo3 = document.createElement('span');\n    footerInfo3.classList.add('footer-info');\n    footerInfo3.textContent = 'Monday to Friday: 11:00 - 22:00';\n\n    const footerInfo4 = document.createElement('span');\n    footerInfo4.classList.add('footer-info');\n    footerInfo4.textContent = 'Saturday to Sunday: 11:30 - 23:00';\n\n    footerGroup2.appendChild(footerHeading2);\n    footerGroup2.appendChild(footerInfo3);\n    footerGroup2.appendChild(footerInfo4);\n\n    const footerAuthor = document.createElement('div');\n    footerAuthor.classList.add('footer-author');\n\n    const authorParagraph = document.createElement('p');\n    authorParagraph.innerHTML = '&copy; Joe Matthews';\n\n    footerAuthor.appendChild(authorParagraph);\n\n    footerContainer.appendChild(footerGroup1);\n    footerContainer.appendChild(footerGroup2);\n    footerContainer.appendChild(footerAuthor);\n\n    mainContainer.appendChild(footerContainer);\n\n    document.body.appendChild(mainContainer);\n}\n\n//# sourceURL=webpack://webpack-demo/./src/about_html.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.css */ \"./src/styles/index.css\");\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index_html */ \"./src/index_html.js\");\n/* harmony import */ var _menu_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu_html */ \"./src/menu_html.js\");\n/* harmony import */ var _about_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about_html */ \"./src/about_html.js\");\n\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n\n    (0,_index_html__WEBPACK_IMPORTED_MODULE_1__.generateIndexHTML)();\n});\n\nconst homeButton = document.querySelector(('.nav-home'));\nconst menuButton = document.querySelector(('.nav-menu'));\nconst aboutButton = document.querySelector(('.nav-about'));\n\nhomeButton.addEventListener('click', _index_html__WEBPACK_IMPORTED_MODULE_1__.generateIndexHTML);\n\nmenuButton.addEventListener('click', _menu_html__WEBPACK_IMPORTED_MODULE_2__.generateMenuHTML);\n\naboutButton.addEventListener('click', _about_html__WEBPACK_IMPORTED_MODULE_3__.generateAboutHTML);\n\n\n\n//# sourceURL=webpack://webpack-demo/./src/index.js?");

/***/ }),

/***/ "./src/index_html.js":
/*!***************************!*\
  !*** ./src/index_html.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generateIndexHTML: () => (/* binding */ generateIndexHTML)\n/* harmony export */ });\n/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.css */ \"./src/styles/index.css\");\n/* harmony import */ var _hero_img_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hero_img.jpg */ \"./src/hero_img.jpg\");\n/* harmony import */ var _menu_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu_html */ \"./src/menu_html.js\");\n\n\n\n\nfunction generateIndexHTML() {\n\n    const mainContainer = document.querySelector('.main-container');\n    mainContainer.innerHTML = '';\n\n    const heroContainer = document.createElement('div');\n    heroContainer.classList.add('hero-container');\n\n    const heroTitle = document.createElement('h1');\n    heroTitle.classList.add('hero-title');\n    heroTitle.textContent = \"Joe's Burger Bistro\";\n\n    const informationContainer = document.createElement('div');\n    informationContainer.classList.add('information-container');\n\n    const informationParagraph = document.createElement('p');\n    informationParagraph.classList.add('information-paragraph');\n    informationParagraph.textContent = \"Built from the idea that great taste is one of life's greatest pleasures,we emphasise on huge flavours in all of our recipes. All of our dishes are made with love, and these juicy burgers and sauces will drive you crazy for wanting more\";\n\n    const informationOrder = document.createElement('h2');\n    informationOrder.classList.add('information-order');\n\n    const orderLink = document.createElement('a');\n    orderLink.href = '#';\n    orderLink.textContent = 'Order Now';\n    orderLink.addEventListener('click', _menu_html__WEBPACK_IMPORTED_MODULE_2__.generateMenuHTML);\n\n    const img = document.createElement('img');\n    img.src = _hero_img_jpg__WEBPACK_IMPORTED_MODULE_1__;\n    img.alt = 'Hero-image';\n    img.className = 'hero-image';\n\n    informationOrder.appendChild(orderLink);\n    informationContainer.appendChild(informationParagraph);\n    informationContainer.appendChild(informationOrder);\n    heroContainer.appendChild(heroTitle);\n    heroContainer.appendChild(informationContainer);\n    heroContainer.appendChild(img);\n    mainContainer.appendChild(heroContainer);\n\n    const footerContainer = document.createElement('div');\n    footerContainer.classList.add('footer-container');\n\n    const footerGroup1 = document.createElement('div');\n    footerGroup1.classList.add('footer-group');\n\n    const footerHeading1 = document.createElement('h2');\n    footerHeading1.classList.add('footer-heading');\n    footerHeading1.textContent = 'Find Us';\n\n    const footerInfo1 = document.createElement('span');\n    footerInfo1.classList.add('footer-info');\n    footerInfo1.textContent = '100 Street';\n\n    const footerInfo2 = document.createElement('span');\n    footerInfo2.classList.add('footer-info');\n    footerInfo2.textContent = 'Mergenville, Australia';\n\n    footerGroup1.appendChild(footerHeading1);\n    footerGroup1.appendChild(footerInfo1);\n    footerGroup1.appendChild(footerInfo2);\n\n    const footerGroup2 = document.createElement('div');\n    footerGroup2.classList.add('footer-group');\n\n    const footerHeading2 = document.createElement('h2');\n    footerHeading2.classList.add('footer-heading');\n    footerHeading2.textContent = 'Our Hours';\n\n    const footerInfo3 = document.createElement('span');\n    footerInfo3.classList.add('footer-info');\n    footerInfo3.textContent = 'Monday to Friday: 11:00 - 22:00';\n\n    const footerInfo4 = document.createElement('span');\n    footerInfo4.classList.add('footer-info');\n    footerInfo4.textContent = 'Saturday to Sunday: 11:30 - 23:00';\n\n    footerGroup2.appendChild(footerHeading2);\n    footerGroup2.appendChild(footerInfo3);\n    footerGroup2.appendChild(footerInfo4);\n\n    const footerAuthor = document.createElement('div');\n    footerAuthor.classList.add('footer-author');\n\n    const authorParagraph = document.createElement('p');\n    authorParagraph.innerHTML = '&copy; Joe Matthews';\n\n    footerAuthor.appendChild(authorParagraph);\n\n    footerContainer.appendChild(footerGroup1);\n    footerContainer.appendChild(footerGroup2);\n    footerContainer.appendChild(footerAuthor);\n\n    mainContainer.appendChild(footerContainer);\n\n    document.body.appendChild(mainContainer);\n}\n\n    \n\n//# sourceURL=webpack://webpack-demo/./src/index_html.js?");

/***/ }),

/***/ "./src/menu_html.js":
/*!**************************!*\
  !*** ./src/menu_html.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generateMenuHTML: () => (/* binding */ generateMenuHTML)\n/* harmony export */ });\n/* harmony import */ var _styles_menu_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/menu.css */ \"./src/styles/menu.css\");\n/* harmony import */ var _Burger_img_2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Burger_img_2.jpg */ \"./src/Burger_img_2.jpg\");\n\n\n\nfunction generateMenuHTML() {\n\n    const mainContainer = document.querySelector('.main-container');\n    mainContainer.innerHTML = '';\n\n    const heroContainer = document.createElement('div');\n    heroContainer.classList.add('hero-container');\n\n    const heroTitle = document.createElement('h1');\n    heroTitle.classList.add('hero-title');\n    heroTitle.textContent = \"Menu\";\n\n    const informationContainer = document.createElement('div');\n    informationContainer.classList.add('information-container');\n\n    const menuItemCard = document.createElement('div');\n    menuItemCard.classList.add('menu-item-card');\n\n    const menuItemTitle = document.createElement('h3');\n    menuItemTitle.classList.add('menu-item-title');\n    menuItemTitle.textContent = \"CheeseIfYouPlease Burger\";\n\n    const menuItemDescription = document.createElement('p');\n    menuItemDescription.classList.add('menu-item-description');\n    menuItemDescription.textContent = \"Cheese in your mouth plus extras\";\n\n    const menuItemCard2 = document.createElement('div');\n    menuItemCard2.classList.add('menu-item-card');\n\n    const menuItemTitle2 = document.createElement('h3');\n    menuItemTitle2.classList.add('menu-item-title');\n    menuItemTitle2.textContent = \"BeefInAndAroundMyTeeth Burger\";\n\n    const menuItemDescription2 = document.createElement('p');\n    menuItemDescription2.classList.add('menu-item-description');\n    menuItemDescription2.textContent = \"Beefy goodness you can't resist\";\n\n    const menuItemCard3 = document.createElement('div');\n    menuItemCard3.classList.add('menu-item-card');\n\n    const menuItemTitle3 = document.createElement('h3');\n    menuItemTitle3.classList.add('menu-item-title');\n    menuItemTitle3.textContent = \"ChickenForThePicken Burger\";\n\n    const menuItemDescription3 = document.createElement('p');\n    menuItemDescription3.classList.add('menu-item-description');\n    menuItemDescription3.textContent = \"Crispy Chicken Goodness\";\n\n    const menuItemCard4 = document.createElement('div');\n    menuItemCard4.classList.add('menu-item-card');\n\n    const menuItemTitle4 = document.createElement('h3');\n    menuItemTitle4.classList.add('menu-item-title');\n    menuItemTitle4.textContent = \"PorkOnMyFork Burger\";\n\n    const menuItemDescription4 = document.createElement('p');\n    menuItemDescription4.classList.add('menu-item-description');\n    menuItemDescription4.textContent = \"Oink in my mouth, please\";\n\n    const menuItemCard5 = document.createElement('div');\n    menuItemCard5.classList.add('menu-item-card');\n\n    const menuItemTitle5 = document.createElement('h3');\n    menuItemTitle5.classList.add('menu-item-title');\n    menuItemTitle5.textContent = \"Vegan Burger\";\n\n    const menuItemDescription5 = document.createElement('p');\n    menuItemDescription5.classList.add('menu-item-description');\n    menuItemDescription5.textContent = \"Can't promise anything\";\n\n    const menuItemCard6 = document.createElement('div');\n    menuItemCard6.classList.add('menu-item-card');\n\n    const menuItemTitle6 = document.createElement('h3');\n    menuItemTitle6.classList.add('menu-item-title');\n    menuItemTitle6.textContent = \"Veggie YumYum Burger\";\n\n    const menuItemDescription6 = document.createElement('p');\n    menuItemDescription6.classList.add('menu-item-description');\n    menuItemDescription6.textContent = \"For when meat isn't an option\";\n\n    const img = document.createElement('img');\n    img.src = _Burger_img_2_jpg__WEBPACK_IMPORTED_MODULE_1__;\n    img.alt = 'Hero-image';\n    img.className = 'hero-image';\n\n    menuItemCard.appendChild(menuItemTitle);\n    menuItemCard.appendChild(menuItemDescription);\n    menuItemCard2.appendChild(menuItemTitle2);\n    menuItemCard2.appendChild(menuItemDescription2);\n    menuItemCard3.appendChild(menuItemTitle3);\n    menuItemCard3.appendChild(menuItemDescription3);\n    menuItemCard4.appendChild(menuItemTitle4);\n    menuItemCard4.appendChild(menuItemDescription4);\n    menuItemCard5.appendChild(menuItemTitle5);\n    menuItemCard5.appendChild(menuItemDescription5);\n    menuItemCard6.appendChild(menuItemTitle6);\n    menuItemCard6.appendChild(menuItemDescription6);\n\n    informationContainer.appendChild(menuItemCard);\n    informationContainer.appendChild(menuItemCard2);\n    informationContainer.appendChild(menuItemCard3);\n    informationContainer.appendChild(menuItemCard4);\n    informationContainer.appendChild(menuItemCard5);\n    informationContainer.appendChild(menuItemCard6);\n    heroContainer.appendChild(heroTitle);\n    heroContainer.appendChild(informationContainer);\n    heroContainer.appendChild(img);\n    mainContainer.appendChild(heroContainer);\n\n    const footerContainer = document.createElement('div');\n    footerContainer.classList.add('footer-container');\n\n    const footerGroup1 = document.createElement('div');\n    footerGroup1.classList.add('footer-group');\n\n    const footerHeading1 = document.createElement('h2');\n    footerHeading1.classList.add('footer-heading');\n    footerHeading1.textContent = 'Find Us';\n\n    const footerInfo1 = document.createElement('span');\n    footerInfo1.classList.add('footer-info');\n    footerInfo1.textContent = '100 Street';\n\n    const footerInfo2 = document.createElement('span');\n    footerInfo2.classList.add('footer-info');\n    footerInfo2.textContent = 'Mergenville, Australia';\n\n    footerGroup1.appendChild(footerHeading1);\n    footerGroup1.appendChild(footerInfo1);\n    footerGroup1.appendChild(footerInfo2);\n\n    const footerGroup2 = document.createElement('div');\n    footerGroup2.classList.add('footer-group');\n\n    const footerHeading2 = document.createElement('h2');\n    footerHeading2.classList.add('footer-heading');\n    footerHeading2.textContent = 'Our Hours';\n\n    const footerInfo3 = document.createElement('span');\n    footerInfo3.classList.add('footer-info');\n    footerInfo3.textContent = 'Monday to Friday: 11:00 - 22:00';\n\n    const footerInfo4 = document.createElement('span');\n    footerInfo4.classList.add('footer-info');\n    footerInfo4.textContent = 'Saturday to Sunday: 11:30 - 23:00';\n\n    footerGroup2.appendChild(footerHeading2);\n    footerGroup2.appendChild(footerInfo3);\n    footerGroup2.appendChild(footerInfo4);\n\n    const footerAuthor = document.createElement('div');\n    footerAuthor.classList.add('footer-author');\n\n    const authorParagraph = document.createElement('p');\n    authorParagraph.innerHTML = '&copy; Joe Matthews';\n\n    footerAuthor.appendChild(authorParagraph);\n\n    footerContainer.appendChild(footerGroup1);\n    footerContainer.appendChild(footerGroup2);\n    footerContainer.appendChild(footerAuthor);\n\n    mainContainer.appendChild(footerContainer);\n\n    document.body.appendChild(mainContainer);\n}\n\n//# sourceURL=webpack://webpack-demo/./src/menu_html.js?");

/***/ }),

/***/ "./src/Burger_img_2.jpg":
/*!******************************!*\
  !*** ./src/Burger_img_2.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"813c4a0f84c621d67693.jpg\";\n\n//# sourceURL=webpack://webpack-demo/./src/Burger_img_2.jpg?");

/***/ }),

/***/ "./src/Burger_img_3.jpg":
/*!******************************!*\
  !*** ./src/Burger_img_3.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c60a139093aae73f1f38.jpg\";\n\n//# sourceURL=webpack://webpack-demo/./src/Burger_img_3.jpg?");

/***/ }),

/***/ "./src/hero_img.jpg":
/*!**************************!*\
  !*** ./src/hero_img.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6806090fab2895ffe330.jpg\";\n\n//# sourceURL=webpack://webpack-demo/./src/hero_img.jpg?");

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
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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