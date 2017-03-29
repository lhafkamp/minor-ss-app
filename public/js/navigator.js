// if serviceworker is supported
if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('./sw.js', { scope: './' }).then((registration) => {
		console.log('SW found');
	}).catch((err) => {
		console.log('SW not found', err);
	});
}

module.exports = navigator;