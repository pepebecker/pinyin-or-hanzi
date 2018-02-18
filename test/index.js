'use strict'

const pinyinOrHanzi = require('../index')

describe('Detect the right language', () => {
	it('should detect Pinyin with tone numbers', () => {
		return pinyinOrHanzi('wo3 de mao1 xi3huan3 he2 niu3nai3').then((data) => {
			data.should.equal('pinyin-numbered')
		})
	})
	it('should detect Pinyin with tone marks', () => {
		return pinyinOrHanzi('wǒ de māo xǐhuǎn hé niǔnǎi').then((data) => {
			data.should.equal('pinyin-marked')
		})
	})
	it('should detect Mandarin', () => {
		return pinyinOrHanzi('我的猫喜欢喝牛奶').then((data) => {
			data.should.equal('mandarin')
		})
	})
	it('should not detect anything', () => {
		return pinyinOrHanzi('this is not chinese at all!').then((data) => {
			data.should.equal('other')
		})
	})
})
