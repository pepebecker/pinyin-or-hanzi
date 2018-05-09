'use strict'

const pinyinOrHanzi = require('../index')

describe('Detect the right language', () => {
	it('should detect Pinyin with tone numbers', done => {
		const result = pinyinOrHanzi('wo3 de mao1 xi3huan3 he2 niu3nai3')
		result.should.equal('pinyin-numbered')
		done()
	})
	it('should detect Pinyin with tone marks', done => {
		const result = pinyinOrHanzi('wǒ de māo xǐhuǎn hé niǔnǎi')
		result.should.equal('pinyin-marked')
		done()
	})
	it('should detect Zhuyin', done => {
		const result = pinyinOrHanzi('ㄨㄛˇ ㄉㄜ˙ ㄇㄠ ㄒㄧˇ ㄏㄨㄢˇ ㄏㄜˊ ㄋㄧㄡˇ ㄋㄞˇ')
		result.should.equal('zhuyin')
		done()
	})
	it('should detect Mandarin', done => {
		const result = pinyinOrHanzi('我的猫喜欢喝牛奶')
		result.should.equal('mandarin')
		done()
	})
	it('should not detect anything', done => {
		const result = pinyinOrHanzi('this is not chinese at all!')
		result.should.equal('other')
		done()
	})
})
