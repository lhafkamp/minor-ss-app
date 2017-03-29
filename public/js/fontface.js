const FontFaceObserver = require('fontfaceobserver');

const font = new FontFaceObserver('Far');

font.load().then(() => {
	console.log('Font has loaded.');
}).catch(() => {
	console.log('Font failed to load.');
});

module.exports = font;