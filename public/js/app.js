// if serviceworker is supported
if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('./sw.js', { scope: './' }).then((registration) => {
		console.log('yes', registration);
	}).catch((err) => {
		console.log('no', err);
	});
}

