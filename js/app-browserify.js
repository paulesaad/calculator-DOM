"use strict";

// es5 polyfills, powered by es5-shim
require("es5-shim")
// es6 polyfills, powered by babel
require("babel/register")

var Promise = require('es6-promise').Promise
var $ = require("jquery")
var backbone = require("backbone")

import * as templates from "./templates.js"


var CalculatorView = backbone.View.extend({
	el: '.container',
	events: {
		'click .nums': 'append_to_console',
		'click .clear': 'clear_screen',
		'click .evaluate': 'evaluate_input'
	},
	append_to_console: function(evt) {
		console.log(evt)
		this.el.querySelector('.console span').innerText += evt.currentTarget.innerText
	},
	clear_screen: function(){
		this.el.querySelector('.console span').innerText = ''
	},
	evaluate_input: function() {
		this.el.querySelector('.console span').innerText = eval(this.el.querySelector('.console').innerText)
	},
	initialize: function() {
		this.el.innerHTML = templates.calcHTML
	}

})

window.displayCalc = new CalculatorView()