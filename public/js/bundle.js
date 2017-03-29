(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
const random = require('./random');
const navigator = require('./navigator');

console.log(random);


},{"./navigator":2,"./random":3}],2:[function(require,module,exports){
// if serviceworker is supported
if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('./sw.js', { scope: './' }).then((registration) => {
		console.log('SW found');
	}).catch((err) => {
		console.log('SW not found', err);
	});
}

module.exports = navigator;
},{}],3:[function(require,module,exports){
const random = 'wow this is random';

module.exports = random;


},{}]},{},[1]);
