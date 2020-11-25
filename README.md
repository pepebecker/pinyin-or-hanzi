# Pinyin or Hanzi

[![npm version](https://img.shields.io/npm/v/pinyin-or-hanzi.svg)](https://www.npmjs.com/package/pinyin-or-hanzi)
[![Travis Build Status](https://travis-ci.org/pepebecker/pinyin-or-hanzi.svg)](https://travis-ci.org/pepebecker/pinyin-or-hanzi)
[![dependency status](https://img.shields.io/david/pepebecker/pinyin-or-hanzi.svg)](https://david-dm.org/pepebecker/pinyin-or-hanzi)
[![dev dependency status](https://img.shields.io/david/dev/pepebecker/pinyin-or-hanzi.svg)](https://david-dm.org/pepebecker/pinyin-or-hanzi#info=devDependencies)
[![ISC-licensed](https://img.shields.io/github/license/pepebecker/pinyin-or-hanzi.svg)](https://choosealicense.com/licenses/isc/)

## Install

```shell
npm install pinyin-or-hanzi
```

## Usage

```js
import getType from 'pinyin-or-hanzi'

console.log(getType('wo3 de mao1 xi3huan3 he2 niu3nai3'))
// pinyin-numbered

console.log(getType('wǒ de māo xǐhuǎn hé niǔnǎi'))
// pinyin-marked

console.log(getType('ㄨㄛˇ ㄉㄜ˙ ㄇㄠ ㄒㄧˇ ㄏㄨㄢˇ ㄏㄜˊ ㄋㄧㄡˇ ㄋㄞˇ'))
// zhuyin

console.log(getType('我的猫喜欢喝牛奶'))
// mandarin

console.log(getType('this is not chinese at all!'))
// other
```

## Related

- [`pinyin-utils`](https://github.com/pepebecker/pinyin-utils)
- [`pinyin-split`](https://github.com/pepebecker/pinyin-split)
- [`find-hanzi`](https://github.com/pepebecker/find-hanzi)
- [`hsk-words`](https://github.com/pepebecker/hsk-words)
- [`cedict`](https://github.com/pepebecker/cedict)
- [`mdbg`](https://github.com/pepebecker/mdbg)
- [`hanzi-to-pinyin`](https://github.com/pepebecker/hanzi-to-pinyin)
- [`pinyin-convert`](https://github.com/pepebecker/pinyin-convert)
- [`pinyin-rest`](https://github.com/pepebecker/pinyin-rest)
- [`pinyin-api`](https://github.com/pepebecker/pinyin-api)
- [`pinyin-bot-core`](https://github.com/pepebecker/pinyin-bot-core)
- [`pinyin-telegram`](https://github.com/pepebecker/pinyin-telegram)
- [`pinyin-messenger`](https://github.com/pepebecker/pinyin-messenger)
- [`pinyin-line`](https://github.com/pepebecker/pinyin-line)
- [`pinyin-chrome`](https://github.com/pepebecker/pinyin-chrome)
- [`pinyin-cli`](https://github.com/pepebecker/pinyin-cli)
- [`hanzi-cli`](https://github.com/pepebecker/hanzi-cli)

## Contributing

If you **have a question**, **found a bug** or want to **propose a feature**, have a look at [the issues page](https://github.com/pepebecker/pinyin-or-hanzi/issues).
