'use strict';

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
  S2: 0x2764,
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

const emojer = function(source) {
  try {
    if (typeof source !== 'string')
      throw new Error('The value needs to be a string.');

    return replace(source);
  } catch (e) {
    console.error(`emojer: ${e.message}`);
  }
};

module.exports = emojer;
