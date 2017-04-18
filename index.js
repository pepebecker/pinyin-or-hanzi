'use strict'

const utils = require('pinyin-utils')
const findHanzi = require('find-hanzi')
const so = require('so')

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
	
	so(function*(){
		const chars = text.split('')
		for (let char of chars) {
			yield findHanzi(char).then((data) => {
				for (let item of data) {
					if (text.match(item.hanzi)) {
						yay(1)
						return
					}
				}
			}, (error) => nay('pinyin-or-hanzi -> ' + error))
		}
		nay('Not a Chinese language')
	})()
})

module.exports = check
