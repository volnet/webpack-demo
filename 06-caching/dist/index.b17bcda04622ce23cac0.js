/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkwebpack_demo"] = self["webpackChunkwebpack_demo"] || []).push([["index"],{

/***/ 138:
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("/*function getComponent() {\r\n    return import('lodash')\r\n        .then(({ default: _ }) => {\r\n            const element = document.createElement('div');\r\n\r\n            element.innerHTML = _.join(['Hello', 'webpack'], ' ');\r\n            return element;\r\n        })\r\n        .catch((error) => 'An error occurred while loading the component');\r\n}\r\n*/\r\n\r\nasync function getComponent() {\r\n    const element = document.createElement('div');\r\n    const { default: _ } = await __webpack_require__.e(/*! import() */ \"vendors\").then(__webpack_require__.t.bind(__webpack_require__, /*! lodash */ 486, 23));\r\n    element.innerHTML = _.join(['Hello', 'webpack'], ' ');\r\n    return element;\r\n}\r\n\r\ngetComponent().then((component) => {\r\n  document.body.appendChild(component);\r\n});\n\n//# sourceURL=webpack://webpack-demo/./src/index.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(138));
/******/ }
]);