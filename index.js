'use strict'

const utils = require('pinyin-utils')
const findHanzi = require('find-hanzi')

const check = (text) => new Promise((yay, nay) => {
	if (text.match(new RegExp('[a-zA-ZüÜ]+[1-4]'))) {
		yay(3)
		return
	} else {
		for (let i in utils.vovels) {
			for (let tone of utils.vovels[i]) {
				if (text.match(tone)) {
					yay(2)
					return
				}
			}
		}
	}
	
	findHanzi(text, {multiple: true}).then((data) => {
		if (data && data.length > 0) {
			for (let item of data) {
				if (item.hanzi && text.match(item.hanzi)) {
					yay(1)
					return
				}
			}
		}
		yay(0)
	}, (error) => nay('pinyin-or-hanzi -> ' + error))
})

module.exports = check
