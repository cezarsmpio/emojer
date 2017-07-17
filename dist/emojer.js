(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.emojer = {})));
}(this, (function (exports) { 'use strict';

/**
 * The list of the emojis following their char codes
 */
var emojiCodes = {};

/**
 * Configs
 */
var configs = {
  span_class: [],
  html: true
};

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
  if (isBrowser()) {
    createStyle();
  }
};

/**
 * Run app, run!
 */
init();

exports.addEmoji = addEmoji;
exports.setConfigs = setConfigs;
exports.parse = parse;

Object.defineProperty(exports, '__esModule', { value: true });

})));
