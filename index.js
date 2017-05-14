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
	
	so(function*() {
		let list = []
		const characters = text.split('')
		for (let char of characters) {
			yield findHanzi(char).then((data) => {
				list = list.concat(data)
			}, (error) => nay('pinyin-or-hanzi -> ' + error))	
		}
		for (let item of list) {
			if (item.hanzi && text.match(item.hanzi)) {
				yay(1)
				return
			}
		}
		yay(0)
	})()
})

module.exports = check
