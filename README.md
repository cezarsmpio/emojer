# emojer

> Smiles to emojis. Natively.

Emojer is a simple library to transform your smiles like `:)` to :smiley:.

We use the `String.fromCodePoint` method to transform char code to the emoji. Not images.

To use it, is very simple, let's take a look:

```
const rock = emojer.parse('My rock text :rock: ;P');
```

The result will be: My rock text :metal: :stuck_out_tongue_winking_eye:

## Demo

https://cezarlz.github.io/emojer/

## Install

```
npm install emojer.js --save
```

```
yarn add emojer.js
```

## API

#### emojer.parse(string: text)

Parse the string to the string "emojed".

Example:

```
emojer.parse('Hello guys :D');
```

#### emojer.addEmoji(string: smile, number: charCode)

Add a new emoji to the list to be replaced by the charCode.

Example:

```
emojer.addEmoji("--'", 0x1f612);
```

You can check the full list of emojis and their unicodes [here](http://unicode.org/emoji/charts/full-emoji-list.html).

#### emojer.setConfigs(object: newConfigs)

Emojer uses configs to do somethings, like add css classes to the emoji and a option to render the emojis with a HTML wrapper.

The default configs are:
```
{
  span_classes: [],
  html: true
}
```

You can use it:
```
emojer.setConfigs({
  span_classes: ['foo', 'bar''],
  html: false
});
```

By default, emojer adds the `emojer-icon` css class in every emoji rendered if the flag `html` is `true`.

## Emojis Available

```
:) :] =) =] (: [: (= [= :3 :D =D ;) ;] (H) :* :| :O :P ;P :'( :'[ )': ]': :# (A) :( :[ :@ (6) +( +[ <3 S2 (L) (8) (Y) (OK) :rock:
```

## Contributing

Just clone, yarn, `npm start`, make your magic, push and open a pull request. Voilá!

## Browser and OS Support

Check the support of native emojis [here](http://caniemoji.com/).

---

Made with :heart: