var CACHE_NAME = "hospital";

var moveToCache = [
    '/',
    // '/index.html',
    // 'js/store.js',
    // '/js/app.js'
    '/Hos.jsx'
]


self.addEventListener('install', (event) => {
    console.log('[Service Worker] Installing Service Worker ...',event);

    event.waitUntil(
        caches.open(CACHE_NAME)
        .then( (cache) => {
            console.log("Cache is opened");
            return cache.addAll(moveToCache)
        })
    );
});

self.addEventListener('activate', (event) => {
    console.log('[Service Worker] Activating Service Worker ...',event);
    return self.clients.claim();
});

self.addEventListener('fetch', (event) => {
    console.log('[Service Worker] Fetching Something ...',event);
    event.respondWith(
        caches.match(event.request)
        .then( (response) => {
            console.log('request' , event.response);

            if(response) {
                console.log('responded');
                return response;
            }

            console.log('fetching');
            return fetch(event.request)
        })
    )

})