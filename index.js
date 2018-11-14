'use strict'

const utils = require('pinyin-utils')
const zhuyin = require('zhuyin')

const ranges = [
	{
		start: parseInt('2E80', 16),
		end: parseInt('2FD5', 16)
	},
	{
		start: parseInt('3400', 16),
		end: parseInt('4DBF', 16)
	},
	{
		start: parseInt('4E00', 16),
		end: parseInt('9FCC', 16)
	}
]

const check = text => {
	const numberedPinnyinRE = /[a-zü]+[1-5]/i
	if (numberedPinnyinRE.test(zhuyin.toPinyin(text, { numbered: true }).join(''))) {
		return 'zhuyin'
	} else if (numberedPinnyinRE.test(text)) {
		return 'pinyin-numbered'
	} else {
		for (let tone of utils.tones) {
			if (text.normalize('NFD').includes(tone)) {
				return 'pinyin-marked'
			}
		}
	}

	for (let i = 0; i < text.length; i++) {
		let code = text[i].charCodeAt(0)
		for (let range of ranges) {
			if (code >= range.start && code <= range.end) {
				return 'mandarin'
			}
		}
	}

	return 'other'
}

module.exports = check
