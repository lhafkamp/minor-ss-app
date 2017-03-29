const fileVersion = 'v1';
const pageVersion = 'v1-pages';
const cacheFiles = [
	'./offline.html',
	'/images/logo.png',
	'/css/style.css',
	'/fonts/Farsan-Regular.ttf',
];

// install SW to open the cache files
this.addEventListener('install', (event) => {
	event.waitUntil(
		caches.open(fileVersion)
			.then(cache => cache.addAll(cacheFiles))
			.then(this.skipWaiting())
	);
});

this.addEventListener('activate', (event) => {
	console.log('activate');

	event.waitUntil(
		caches.keys().then((cacheNames) => {
			return Promise.all(cacheNames.map((thisCacheName) => {
				if (thisCacheName !== fileVersion) {
					console.log('Removing cached files from', thisCacheName);
					return caches.delete(thisCacheName);
				}
			}));
		})
	);
});

// code author: Jeroen

this.addEventListener('fetch', (event) => {
	const request = event.request;
	if (request.mode === 'navigate') {
		event.respondWith(
            fetch(request)
				.then(response => cachePage(request, response))
				.catch(err => getCachedPage(request))
				.catch(err => fetchCoreFile('./offline.html'))
        );
	} else {
		event.respondWith(
			fetch(request)
				.catch(err => fetchCoreFile(request.url))
				.catch(err => fetchCoreFile('./offline.html'))
        );
    }
});

function fetchCoreFile(url) {
	return caches.open(fileVersion)
        .then(cache => cache.match(url))
        .then(response => response ? response : Promise.reject());
}

function getCachedPage(request) {
	return caches.open(pageVersion)
		.then(cache => cache.match(request))
		.then(response => response ? response : Promise.reject());
}

function cachePage(request, response) {
	const clonedResponse = response.clone();
	caches.open(pageVersion)
		.then(cache => cache.put(request, clonedResponse));
	return response;
}
