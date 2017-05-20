# Pinyin or Hanzi

[![npm version](https://img.shields.io/npm/v/pinyin-or-hanzi.svg)](https://www.npmjs.com/package/pinyin-or-hanzi)
[![Travis Build Status](https://travis-ci.org/pepebecker/pinyin-or-hanzi.svg)](https://travis-ci.org/pepebecker/pinyin-or-hanzi)
[![Coverage Status](https://coveralls.io/repos/github/pepebecker/pinyin-or-hanzi/badge.svg)](https://coveralls.io/github/pepebecker/pinyin-or-hanzi)
[![dependency status](https://img.shields.io/david/pepebecker/pinyin-or-hanzi.svg)](https://david-dm.org/pepebecker/pinyin-or-hanzi)
[![dev dependency status](https://img.shields.io/david/dev/pepebecker/pinyin-or-hanzi.svg)](https://david-dm.org/pepebecker/pinyin-or-hanzi#info=devDependencies)
[![MIT-licensed](https://img.shields.io/github/license/pepebecker/pinyin-or-hanzi.svg)](https://opensource.org/licenses/MIT)
[![chat on gitter](https://badges.gitter.im/pepebecker.svg)](https://gitter.im/pepebecker)

## Install

```shell
npm install pinyin-or-hanzi
```

## Usage

```js
const getType = require('pinyin-or-hanzi')

getType('wo3 de mao1 xi3huan3 he2 niu3nai3')
.then(console.log) // 3
.catch(console.error)

getType('wǒ de māo xǐhuǎn hé niǔnǎi')
.then(console.log) // 2
.catch(console.error)

getType('我的猫喜欢喝牛奶')
.then(console.log) // 1
.catch(console.error)

getType('this is not chinese at all!')
.then(console.log) // 0
.catch(console.error)
```

## Related

- [`pinyin-utils`](https://github.com/pepebecker/pinyin-utils)
- [`pinyin-split`](https://github.com/pepebecker/pinyin-split)
- [`find-hanzi`](https://github.com/pepebecker/find-hanzi)
- [`hanzi-to-pinyin`](https://github.com/pepebecker/hanzi-to-pinyin)
- [`pinyin-convert`](https://github.com/pepebecker/pinyin-convert)

## Contributing

If you **have a question**, **found a bug** or want to **propose a feature**, have a look at [the issues page](https://github.com/pepebecker/pinyin-or-hanzi/issues).