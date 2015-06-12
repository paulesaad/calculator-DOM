"use strict";

// es5 polyfills, powered by es5-shim
require("es5-shim")
// es6 polyfills, powered by babel
require("babel/register")

var Promise = require('es6-promise').Promise
var $ = require("jquery")
var backbone = require("backbone")

function qs(selector) {
	return document.querySelector(selector)
}

import * as templates from "./templates.js"

var CalculatorView = backbone.View.extend({
	el: '.container',
	events: {
		'click .enter span': 'append_to_console',
		'click .clear': 'clear_screen',
		'click .evaluate': 'evaluate_input'
	},
	append_to_console: (evt) => {
		console.log(evt)
		qs('.console').innerText += evt.currentTarget.innerText
	},
	clear_screen: () => {
		qs('.console').innerText = ''
	},
	evaluate_input: () => {
		qs('.console').innerText = eval(qs('.console').innerText)
	},
	initialize: () => {
		qs('body').innerHTML=templates.calcHTML
	}

})

var displayCalc = new CalculatorView()