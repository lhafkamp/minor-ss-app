const cacheName = 'v1';
const cacheFiles = [
	'/images/logo.png',
	'/css/style.css',
	'/fonts/Farsan-Regular.ttf',
];

this.addEventListener('install', (e) => {
	e.waitUntil(
		caches.open(cacheName)
			.then(cache => cache.addAll(cacheFiles)),
	);
});
