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

const addEmoji = function(character, charCode) {
  if (typeof charCode !== 'number')
    throw new Error('emojer: charCode must be a number.');

  emojiCodes[character] = charCode;
};

const escapeRegExp = function(str) {
  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
};

const fromCodePoint = function() {
  if ('fromCodePoint' in String) return String.fromCodePoint(arguments[0]);

  let chars = Array.prototype.slice.call(arguments);

  for (var i = chars.length; i-- > 0; ) {
    var n = chars[i] - 0x10000;
    if (n >= 0) chars.splice(i, 1, 0xd800 + (n >> 10), 0xdc00 + (n & 0x3ff));
  }

  return String.fromCharCode.apply(null, chars);
};

const replace = function(text) {
  for (let x in emojiCodes) {
    let code = emojiCodes[x];

    text = text.replace(new RegExp(escapeRegExp(x), 'g'), fromCodePoint(code));
  }

  return text;
};

const parse = function(source) {
  try {
    if (typeof source !== 'string')
      throw new Error('The value needs to be a string.');

    return replace(source);
  } catch (e) {
    console.error(`emojer: ${e.message}`);
  }
};

module.exports = {
  parse,
  addEmoji
};
