const staticCacheName = 'site-static';
const assets =[
	'/',
	'/index.html',
	'/js/app.js',
	'/sw.js',
	'/img/uncp144.png',
	'/img/uncp-old-map.jpg',
	'/manifest.json'

];
self.addEventListener('install', evt => {
	console.log('service worker has been installed!!');
	evt.waitUntil(
	caches.open(staticCacheName).then(cache => {
		cache.addAll(assets)
	}))
})

self.addEventListener('activate',evt => {
	console.log('service worker has been activated')
})

self.addEventListener('fetch', evt => {
evt.respondWith(
	caches.match(evt.request).then(cacheRes => {
		return cacheRes || fetch(evt.request);
	})
)
})