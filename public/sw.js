const cacheName = 'Address_Book';
const staticAssets = [
    './',
    './index.html',
    './main.css',
    './main.js',
    './manifest.json',
    './Assets/Images/iphone-notebook-pen-working-34088.jpg'
];

// Only gets installed once during lifecycle
self.addEventListener("install", e => {
    //console.log("Install");
    e.waitUntil(
        caches.open(cacheName).then(cache => {
            return cache.addAll(staticAssets)
        })
    );
});

self.addEventListener("fetch", e => {
    //console.log(`Intercepting fetch request for: ${e.request.url}`);
    e.respondWith(
        caches.open(cacheName)
            .then(cache => cache.match(e.request, {ignoreSearch: true}))
            .then(response => {
                // either cache will be 1st, if not it will go to the network;
                return response || fetch(e.request);            
        })
    );
});