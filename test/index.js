'use strict'

const pinyinOrHanzi = require('../index')
const so = require('so')

const print = (data) => {
	switch(data) {
	case 1:
		console.log('Mandarin')
		break
	case 2:
		console.log('Pinyin with tone marks')
		break
	case 3:
		console.log('Pinyin with tone numbers')
		break
	}
}

so(function*(){
	yield pinyinOrHanzi('我的猫喜欢喝牛奶').then(print, console.log)
	yield pinyinOrHanzi('wǒ de māo xǐhuǎn hé niǔnǎi').then(print, console.log)
	yield pinyinOrHanzi('wo3 de mao1 xi3huan3 he2 niu3nai3').then(print, console.log)
	yield pinyinOrHanzi('lǜ').then(print, console.log)
	yield pinyinOrHanzi('lü4').then(print, console.log)
	yield pinyinOrHanzi('this is not a chinese language').then(print, console.log)
})()
