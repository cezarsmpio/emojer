(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["emojer"] = factory();
	else
		root["emojer"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


const emojiCodes = {
  ':)': 0x1f603,
  ':]': 0x1f603,
  '=)': 0x1f603,
  '=]': 0x1f603,
  '(:': 0x1f603,
  '[:': 0x1f603,
  '(=': 0x1f603,
  '[=': 0x1f603,
  ':3': 0x1f600,
  ':D': 0x1f601,
  '=D': 0x1f601,
  ';)': 0x1f609,
  ';]': 0x1f609,
  '8)': 0x1f913,
  '8]': 0x1f913,
  '(H)': 0x1f60b,
  ':*': 0x1f618,
  ':|': 0x1f611,
  ':O': 0x1f62e,
  ':P': 0x1f60b,
  ';P': 0x1f61c,
  ":'(": 0x1f62d,
  ":'[": 0x1f62d,
  ")':": 0x1f62d,
  "]':": 0x1f62d,
  ':#': 0x1f910,
  '(A)': 0x1f607,
  '8)': 0x1f60b,
  '8]': 0x1f60b,
  ':(': 0x1f614,
  ':[': 0x1f614,
  ':@': 0x1f621,
  '(6)': 0x1f608,
  '+(': 0x1f922,
  '+[': 0x1f922,
  '<3': 0x2764,
  s2: 0x2764,
  '(L)': 0x2764,
  '(8)': 0x1f3b5,
  '(Y)': 0x1f44d,
  '(OK)': 0x1f44c
};

const fromCodePoint = function() {
  let chars = Array.prototype.slice.call(arguments);

  for (var i = chars.length; i-- > 0; ) {
    var n = chars[i] - 0x10000;
    if (n >= 0) chars.splice(i, 1, 0xd800 + (n >> 10), 0xdc00 + (n & 0x3ff));
  }

  return String.fromCharCode.apply(null, chars);
};

const replace = function(text) {
  const words = text.split(' ');

  return words
    .map(word => {
      return emojiCodes[word.toUpperCase()]
        ? fromCodePoint(emojiCodes[word.toUpperCase()])
        : word;
    })
    .join(' ');
};

const emojer = function() {
  const source =
    typeof arguments[0] === 'string' ? arguments[0] : arguments[0].value;

  return replace(source);
};

/* harmony default export */ __webpack_exports__["default"] = (emojer);


/***/ })
/******/ ]);
});