/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body{\r\n    font-family: poppins, sans-serif;\r\n    background-color: #FEF3E2;\r\n    display: grid;\r\n    grid-template-columns: repeat(4, 1fr);\r\n    grid-template-rows: auto auto auto;\r\n    grid-template-areas:\r\n    'header  header  header  header'\r\n    'content sidebar sidebar sidebar'\r\n    'footer  footer  footer  footer';\r\n    min-height: 100vh;\r\n    overflow-y: auto;\r\n}\r\n\r\nheader {\r\n  grid-area: header;\r\n}\r\n \r\nmain {\r\n  grid-area: content;\r\n}\r\n  \r\naside {\r\n  overflow-y: hidden;\r\n  grid-area: sidebar;\r\n}\r\n \r\nfooter {\r\n  grid-area: footer;\r\n}\r\n\r\ninput, textarea{\r\n    width: 270px;\r\n    padding: 15px;\r\n    border-radius: 10px;\r\n    font-size: 16px;\r\n    box-shadow: 4px 4px 0px #515151;\r\n    font-family: poppins, sans-serif;\r\n    border: 2px solid black;\r\n    transition: 0.4s;\r\n    margin-top: 20px;\r\n}\r\ntextarea{\r\n  margin-top: 10px;\r\n  display: block;\r\n}\r\n\r\ninput:focus, textarea:focus {\r\n  outline: none;\r\n}\r\n\r\ninput:hover , textarea:hover {\r\n  box-shadow: none;\r\n}\r\n\r\n.saveBtn{\r\n    width: 300px;\r\n    padding: 15px;\r\n    border-radius: 25px;\r\n    font-size: 16px;\r\n    box-shadow: 4px 4px 0px #515151;\r\n    font-family: poppins, sans-serif;\r\n    border: 2px solid black;\r\n    background-color: #0BA6DF;\r\n    color: white;\r\n    cursor: pointer;\r\n    transition: 0.4s;\r\n    margin-top: 20px;\r\n    font-weight: bold;\r\n}\r\n\r\n.saveBtn:hover{\r\n    box-shadow: none;\r\n    color: #0BA6DF;\r\n    background-color: white;\r\n}\r\n\r\n\r\n\r\n.contCard{\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\r\n  gap: 20px;\r\n  overflow-y: auto;\r\n  height: 350px;\r\n  padding-right: 10px;\r\n  margin-top: 20px;\r\n  border: 3px solid black;\r\n  border-radius: 10px;\r\n}\r\n\r\n.noteCard{\r\n    margin: 5px;\r\n    display: inline-block;\r\n    min-width: 200px;\r\n    height: fit-content;\r\n    background-color: white;\r\n    box-shadow: 4px 4px 0px #515151;\r\n    border-radius: 10px;\r\n    padding: 15px;\r\n    margin-bottom: 20px;\r\n    font-family: poppins, sans-serif;\r\n    border: 2px solid black;\r\n    break-inside: avoid;\r\n    transition: 0.4s;\r\n}\r\n\r\n.noteCard:hover{\r\n    box-shadow: none;\r\n}\r\n\r\n.hpsNote{\r\n    width: 50%;\r\n    float: right;\r\n    padding: 10px;\r\n    border-radius: 25px;\r\n    font-size: 14px;\r\n    box-shadow: 4px 4px 0px #515151;\r\n    font-family: poppins, sans-serif;\r\n    border: 2px solid black;\r\n    background-color: #FF4C4C;\r\n    color: white;\r\n    cursor: pointer;\r\n    transition: 0.4s;\r\n    margin-top: 10px;\r\n    font-weight: bold;\r\n}\r\n\r\n.hpsNote:hover{\r\n    box-shadow: none;\r\n    color: #FF4C4C;\r\n    background-color: white;\r\n}\r\n\r\n.validation-message {\r\n  color: red;\r\n}\r\n\r\n.loading {\r\n  text-align: center;\r\n  font-weight: bold;\r\n  color: #FA812F;\r\n  padding: 20px;\r\n  display: none; /* disembunyikan dulu */\r\n}\r\n\r\n.spinner {\r\n  border: 6px solid #f3f3f3;\r\n  border-top: 6px solid #FA812F;\r\n  border-radius: 50%;\r\n  width: 40px;\r\n  height: 40px;\r\n  animation: spin 1s linear infinite;\r\n  margin: 0 auto 10px auto;\r\n}\r\n\r\n@keyframes spin {\r\n  0% { transform: rotate(0deg); }\r\n  100% { transform: rotate(360deg); }\r\n}\r\n\r\n\r\n@media screen and (max-width: 768px){\r\n  html, body {\r\n    overflow-y: auto; \r\n    min-height: 100%;\r\n  }\r\n  body {\r\n    grid-template-columns: 1fr;\r\n    grid-template-rows: auto auto auto auto;\r\n    grid-template-areas:\r\n      'header'\r\n      'content'\r\n      'sidebar'\r\n      'footer';\r\n  }\r\n  .contCard{\r\n    height: fit-content;\r\n    overflow-y: hidden;\r\n  }\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://note.app-with-api/./src/style.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://note.app-with-api/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://note.app-with-api/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://note.app-with-api/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://note.app-with-api/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://note.app-with-api/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://note.app-with-api/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://note.app-with-api/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://note.app-with-api/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ }),

/***/ "./src/load.js":
/*!*********************!*\
  !*** ./src/load.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   hideLoading: () => (/* binding */ hideLoading),\n/* harmony export */   showLoading: () => (/* binding */ showLoading)\n/* harmony export */ });\nfunction showLoading() {\r\n  const loading = document.getElementById('loading');\r\n  if (loading) loading.style.display = 'block';\r\n}\r\n\r\nfunction hideLoading() {\r\n  const loading = document.getElementById('loading');\r\n  if (loading) loading.style.display = 'none';\r\n}\r\n\n\n//# sourceURL=webpack://note.app-with-api/./src/load.js?\n}");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _my_input_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-input.js */ \"./src/my-input.js\");\n/* harmony import */ var _my_input_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_my_input_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _my_nav_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./my-nav.js */ \"./src/my-nav.js\");\n/* harmony import */ var _my_nav_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_my_nav_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _my_footer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-footer.js */ \"./src/my-footer.js\");\n/* harmony import */ var _my_footer_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_my_footer_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _load_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./load.js */ \"./src/load.js\");\n/* harmony import */ var _note_api_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./note-api.js */ \"./src/note-api.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst judulInput = document.getElementById(\"judul\").querySelector(\"input\");\r\nconst errorEl = document.getElementById(\"usernameValidation\");\r\n\r\nasync function renderNotes() {\r\n  const container = document.querySelector('.contCard');\r\n  (0,_load_js__WEBPACK_IMPORTED_MODULE_4__.showLoading)()\r\n  container.innerHTML = '';\r\n\r\n  try {\r\n    await new Promise(r => setTimeout(r, 2000));\r\n    const notes = await (0,_note_api_js__WEBPACK_IMPORTED_MODULE_5__.getNotes)();\r\n    notes.forEach(note => {\r\n      const card = document.createElement('div');\r\n      card.classList.add('noteCard');\r\n      card.innerHTML = `\r\n        <h2>${note.title}</h2>\r\n        <p>${note.body}</p>\r\n        <button class=\"hpsNote\">Hapus</button>\r\n      `;\r\n      const h2 = card.querySelector('h2');\r\n      const huruf1 = /^[A-F]/i;\r\n      const huruf2 = /^[G-L]/i;\r\n      const huruf3 = /^[M-R]/i;\r\n      const huruf4 = /^[S-Z]/i;\r\n  \r\n      if (huruf1.test(note.title)) h2.style.color = '#F08787';\r\n      else if (huruf2.test(note.title)) h2.style.color = '#FFC7A7';\r\n      else if (huruf3.test(note.title)) h2.style.color = '#90EE90';\r\n      else if (huruf4.test(note.title)) h2.style.color = '#A2AADB';\r\n      else h2.style.color = '#f0f0f0';\r\n\r\n      card.querySelector('.hpsNote').addEventListener('click', async () => {\r\n        await (0,_note_api_js__WEBPACK_IMPORTED_MODULE_5__.deleteNote)(note.id);\r\n        renderNotes();\r\n      });\r\n      container.appendChild(card);\r\n    });\r\n    } catch (err) {\r\n    console.error('Error:', err);\r\n    container.innerHTML = '<p style=\"color:red;\">Gagal memuat data</p>';\r\n  } finally {\r\n    (0,_load_js__WEBPACK_IMPORTED_MODULE_4__.hideLoading)();\r\n  }\r\n}\r\n\r\njudulInput.addEventListener(\"input\", () => {\r\n  const value = judulInput.value.trim();\r\n  const regex = /^[A-Za-z0-9_ ]+$/;\r\n\r\n  if (value === \"\") {\r\n    errorEl.textContent = \"Judul wajib diisi.\";\r\n    judulInput.setCustomValidity(\"Judul wajib diisi.\");\r\n  } else if (value.length < 6) {\r\n    errorEl.textContent = \"Minimal panjang adalah 6 karakter.\";\r\n    judulInput.setCustomValidity(\"Minimal panjang adalah 6 karakter.\");\r\n  } else if (!regex.test(value)) {\r\n    errorEl.textContent = \"Tidak boleh mengandung simbol atau karakter spesial.\";\r\n    judulInput.setCustomValidity(\"Tidak boleh mengandung simbol atau karakter spesial.\");\r\n  } else {\r\n    errorEl.textContent = \"\";\r\n    judulInput.setCustomValidity(\"\");\r\n  }\r\n});\r\n\r\nasync function handleAddNote() {\r\n  const judulInput = document.getElementById('judul');\r\n  const descInput = document.getElementById('desc');\r\n\r\n  const title = judulInput.getData();\r\n  const body = descInput.getData();\r\n\r\n  if (title.length < 6) {\r\n    alert(\"Minimal panjang judul adalah 6 karakter.\");\r\n    return;\r\n  }\r\n\r\n  if (!title || !body) {\r\n    alert(\"Judul dan deskripsi wajib diisi!\");\r\n    return;\r\n  }\r\n\r\n  await (0,_note_api_js__WEBPACK_IMPORTED_MODULE_5__.addNote)(title, body);\r\n  renderNotes();\r\n\r\n\r\n  judulInput.querySelector('input, textarea').value = '';\r\n  descInput.querySelector('input, textarea').value = '';\r\n}\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n  document.getElementById('saveBtn').addEventListener('click', handleAddNote);\r\n  renderNotes();\r\n});\r\n\n\n//# sourceURL=webpack://note.app-with-api/./src/main.js?\n}");

/***/ }),

/***/ "./src/my-footer.js":
/*!**************************!*\
  !*** ./src/my-footer.js ***!
  \**************************/
/***/ (() => {

eval("{class Myfooter extends HTMLElement {\r\n  constructor() {\r\n    super();\r\n    this.attachShadow({ mode: 'open' });\r\n  }\r\n\r\n  connectedCallback() {\r\n  this.render();\r\n}\r\n\r\nrender() {\r\n    this.shadowRoot.innerHTML = `\r\n  <style>\r\n  .footer-container{\r\n    border-radius: 10px ;\r\n    border: 2px solid black;\r\n    text-align: center;\r\n    padding: 5px;\r\n    font-size: 14px;\r\n    background-color: #FAA533;\r\n    height: 30px;\r\n    }\r\n  </style>\r\n    \r\n    <div class=\"footer-container\">\r\n    @Created by Achmad Zidan Al-Baihaqi - f269d5y0031 - 2025 ASAH 2025 \r\n    </div>\r\n    `;\r\n  }\r\n}\r\n\r\n \r\ncustomElements.define('my-footer', Myfooter);\n\n//# sourceURL=webpack://note.app-with-api/./src/my-footer.js?\n}");

/***/ }),

/***/ "./src/my-input.js":
/*!*************************!*\
  !*** ./src/my-input.js ***!
  \*************************/
/***/ (() => {

eval("{class Myinput extends HTMLElement {\r\n  constructor() {\r\n    super();\r\n    this.types=this.getAttribute('type') || 'text';\r\n  }\r\n\r\n  connectedCallback() {\r\n    if(this.types === 'text'){\r\n      this.rendertext();\r\n    } else if(this.types === 'textarea'){\r\n      this.rendertextarea();\r\n    }\r\n  }\r\n\r\n  rendertext() {\r\n    this.innerHTML = `\r\n    <input id=\"judul\" placeholder=\"Tambahkan Judul catatan...\" class=\"new-task-input\">\r\n    `;\r\n  }\r\n  rendertextarea() {\r\n    this.innerHTML = `\r\n    <textarea id=\"desc\" rows=\"10\" placeholder=\"Tulis deskripsi di sini...\"></textarea>\r\n    `;\r\n  }\r\n  getData() {\r\n  const el = this.shadowRoot?.querySelector('input, textarea') || this.querySelector('input, textarea');\r\n  return el ? el.value.trim() : '';\r\n}\r\n\r\n  \r\n}\r\n\r\n\r\n \r\n\r\ncustomElements.define('my-input', Myinput);\n\n//# sourceURL=webpack://note.app-with-api/./src/my-input.js?\n}");

/***/ }),

/***/ "./src/my-nav.js":
/*!***********************!*\
  !*** ./src/my-nav.js ***!
  \***********************/
/***/ (() => {

eval("{class Mynav extends HTMLElement {\r\n  constructor() {\r\n    super();\r\n    this.username = localStorage.getItem('username') || null;\r\n    this.attachShadow({ mode: 'open' });\r\n  }\r\n\r\n  connectedCallback() {\r\n    if (!this.username) {\r\n  const input = prompt(\"Masukkan Nama Anda:\");\r\n  if (input && input.trim() !== \"\") {\r\n    this.username = input.trim();\r\n    localStorage.setItem('username', this.username);\r\n  } else {\r\n    this.username = \"User\";\r\n  }\r\n}\r\n\r\n  this.render();\r\n}\r\n\r\nrender() {\r\n    this.shadowRoot.innerHTML = `\r\n  <style>\r\n  .header-container{\r\n    display: flex;\r\n    align-items: center;\r\n    background-color: #FAA533;\r\n    gap: 10px;\r\n    border-radius: 15px;\r\n    justify-content: space-between;\r\n    border: 2px solid black;\r\n    box-shadow: 4px 4px 0px #FA812F;\r\n    }\r\n  nav ul{\r\n    list-style: none;\r\n    display: flex;\r\n    gap: 40px;\r\n    margin-right: 20px;\r\n    }\r\n  nav a{\r\n    text-decoration: none;\r\n    color: #FAA533;\r\n    font-weight: bold;\r\n    background-color: white;\r\n    padding: 10px 20px;\r\n    border-radius: 20px;\r\n    border: 2px solid black;\r\n    transition: 0.4s;\r\n    box-shadow: 4px 4px 0px #FA812F;\r\n    }\r\n  nav a:hover{\r\n    color: white;\r\n    background-color: #FA812F;\r\n    box-shadow: none;\r\n    }\r\n  p{\r\n    font-weight: bold;\r\n    color: white;\r\n    margin-left: 10px;\r\n    font-size: 20px;\r\n    }\r\n\r\n    @media screen and (max-width: 768px){\r\n   nav ul{\r\n    list-style: none;\r\n    display: flex;\r\n    gap: 10px;\r\n    margin-right: 5px;\r\n    }\r\n  p{\r\n    font-weight: bold;\r\n    color: white;\r\n    margin-left: 5px;\r\n    font-size: 10px;\r\n    }\r\n  nav a{\r\n    text-decoration: none;\r\n    color: #FAA533;\r\n    font-weight: bold;\r\n    background-color: white;\r\n    padding: 10px 20px;\r\n    border-radius: 20px;\r\n    border: 2px solid black;\r\n    transition: 0.4s;\r\n    box-shadow: 4px 4px 0px #FA812F;\r\n    font-size: 10px;\r\n    }\r\n}\r\n  </style>\r\n    \r\n    <div class=\"header-container\">\r\n    <p>Hello ${this.username}!</p>\r\n    <nav>\r\n        <ul>\r\n            <li><a href=\"/Note.app with API/index.html\">Note Apps</a></li>\r\n            <li><a href=\"/Note.app with API/about.html\">About Me</a></li>\r\n        </ul>\r\n    </nav>\r\n    </div>\r\n    `;\r\n  }\r\n}\r\n\r\n \r\ncustomElements.define('my-nav', Mynav);\n\n//# sourceURL=webpack://note.app-with-api/./src/my-nav.js?\n}");

/***/ }),

/***/ "./src/note-api.js":
/*!*************************!*\
  !*** ./src/note-api.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addNote: () => (/* binding */ addNote),\n/* harmony export */   deleteNote: () => (/* binding */ deleteNote),\n/* harmony export */   getNotes: () => (/* binding */ getNotes)\n/* harmony export */ });\nconst BASE_URL = \"https://notes-api.dicoding.dev/v2\";\r\n\r\nasync function getNotes() {\r\n  try {\r\n    const response = await fetch(`${BASE_URL}/notes`);\r\n    const result = await response.json();\r\n    return result.data;\r\n  } catch (error) {\r\n    console.error(\"Gagal ambil data:\", error);\r\n    return [];\r\n  }\r\n}\r\n\r\nasync function addNote(title, body) {\r\n  try {\r\n    const response = await fetch(`${BASE_URL}/notes`, {\r\n      method: \"POST\",\r\n      headers: { \"Content-Type\": \"application/json\" },\r\n      body: JSON.stringify({ title, body }),\r\n    });\r\n    const result = await response.json();\r\n    return result.data;\r\n  } catch (error) {\r\n    console.error(\"Gagal menambahkan note:\", error);\r\n  }\r\n}\r\n\r\nasync function deleteNote(id) {\r\n  try {\r\n    const response = await fetch(`${BASE_URL}/notes/${id}`, { method: \"DELETE\" });\r\n    const result = await response.json();\r\n    return result.message;\r\n  } catch (error) {\r\n    console.error(\"Gagal menghapus note:\", error);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://note.app-with-api/./src/note-api.js?\n}");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://note.app-with-api/./src/style.css?\n}");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;