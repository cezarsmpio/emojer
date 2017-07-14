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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Appends a emoji font to render the emojers properly
 */
var createStyle = function createStyle() {
  var style = document.createElement('style');
  style.rel = 'stylesheet';
  style.type = 'text/css';

  var css = '.emojer-icon{font-family:"Apple Color Emoji","Segoe UI","Segoe UI Emoji","Segoe UI Symbol",Helvetica,Arial,sans-serif}';

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }

  document.body.appendChild(style);
};

/**
 * The list of the emojis following their char codes
 */
var emojiCodes = {
  ':)': 0x1f603,
  ':]': 0x1f603,
  '=)': 0x1f603,
  '=]': 0x1f603,
  '(:': 0x1f603,
  '[:': 0x1f603,
  '(=': 0x1f603,
  '[=': 0x1f603,
  ':3': 0x1f60a,
  ':D': 0x1f601,
  '=D': 0x1f601,
  ';)': 0x1f609,
  ';]': 0x1f609,
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
  ':(': 0x1f614,
  ':[': 0x1f614,
  ':@': 0x1f621,
  '(6)': 0x1f608,
  '+(': 0x1f922,
  '+[': 0x1f922,
  '<3': 0x2764,
  S2: 0x2764,
  '(L)': 0x2764,
  '(8)': 0x1f3b5,
  '(Y)': 0x1f44d,
  '(OK)': 0x1f44c,
  ':rock:': 0x1f918
};

/**
 * Add a new emoji to the list
 *
 * @param {String} character The character to be replaced by emoji
 * @param {Number} charCode The char code
 */
var addEmoji = function addEmoji(character, charCode) {
  if (typeof charCode !== 'number') throw new Error('emojer: charCode must be a number.');

  emojiCodes[character] = charCode;
};

/**
 * Configs
 */
var configs = {
  span_class: [],
  html: true
};

/**
 * Sets the new configs to be passed to the emojer
 *
 * @param {object} newConfigs The new configs to be replaced
 */
var setConfigs = function setConfigs(newConfigs) {
  configs = Object.assign({}, configs, newConfigs);
};

/**
 * Escapes some characters to be a valid RegExp expression
 *
 * @param {String} str The string to be replaced
 */
var escapeRegExp = function escapeRegExp(str) {
  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
};

/**
 * Polyfill to the native method String.fromCodePoint
 */
var fromCodePoint = function fromCodePoint() {
  if ('fromCodePoint' in String) return String.fromCodePoint(arguments[0]);

  var chars = Array.prototype.slice.call(arguments);

  for (var i = chars.length; i-- > 0;) {
    var n = chars[i] - 0x10000;
    if (n >= 0) chars.splice(i, 1, 0xd800 + (n >> 10), 0xdc00 + (n & 0x3ff));
  }

  return String.fromCharCode.apply(null, chars);
};

/**
 * Detects if the env is a browser.
 */
var isBrowser = new Function('try {return this===window;}catch(e){ return false;}');

/**
 * Main function. Find into the text the characters to be replaced by the emojis according to the emojiCodes.
 *
 * @param {String} text The text to be replaced by the emojis
 */
var replace = function replace(text) {
  for (var x in emojiCodes) {
    var code = emojiCodes[x];

    var value = configs.html === true && isBrowser() ? '<span class="emojer-icon ' + configs.span_class.join(' ') + '">' + fromCodePoint(code) + '</span>' : fromCodePoint(code);

    text = text.replace(new RegExp(escapeRegExp(x), 'g'), value);
  }

  return text;
};

/**
 * Parse the string/source and returns the string with the new emojis
 *
 * @param {String} source The source that will be replaced
 */
var parse = function parse(source) {
  try {
    if (typeof source !== 'string') throw new Error('The value needs to be a string.');

    return replace(source);
  } catch (e) {
    console.error('emojer: ' + e.message);
  }
};

/**
 * Call the methods to initialize the application
 */
var init = function init() {
  createStyle();
};

/**
 * Run app, run!
 */
init();

module.exports = {
  parse: parse,
  addEmoji: addEmoji,
  setConfigs: setConfigs
};

/***/ })
/******/ ]);
});