'use strict'

const pinyinOrHanzi = require('../index')

describe('Detect the right language', () => {
	it('should detect Pinyin with tone numbers', () => {
		return pinyinOrHanzi('wo3 de mao1 xi3huan3 he2 niu3nai3').then((data) => {
			data.should.equal(3)
		})
	})
	it('should detect Pinyin with tone marks', () => {
		return pinyinOrHanzi('wǒ de māo xǐhuǎn hé niǔnǎi').then((data) => {
			data.should.equal(2)
		})
	})
	it('should detect Mandarin', () => {
		return pinyinOrHanzi('我的猫喜欢喝牛奶').then((data) => {
			data.should.equal(1)
		})
	})
})
