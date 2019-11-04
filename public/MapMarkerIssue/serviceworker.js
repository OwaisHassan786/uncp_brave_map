//Caching Pages individually
const cacheName = 'finalversion5' ;


//call install event
self.addEventListener('install', event => {
    console.log('Service Worker has been Installed');
});

//Calling Activate Event: Can use this to clean up old cache hereas well!
self.addEventListener('activate', event => {
    console.log('Service Worker has been Activated');
    //Remove Unwanted Cache
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if(cache !== cacheName) {
                        console.log('Service Worker is clearing old cache...');
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
});

//Call Fetch Event (Using this to get SW to display the saved cache) Also, Caching all pages on site is done here!
self.addEventListener('fetch', event => {
    console.log('Servce Worker is Fetching Files...');
    event.respondWith(
        fetch(event.request)
            .then(res => {
                //Make a clone/copy of the response
                const resClone = res.clone();
                //open Cache
                caches.open(cacheName).then(cache => {
                        //add respoonse to cache
                        cache.put(event.request, resClone);
                });
                return res;
            })
            .catch(err => caches.match(event.request).then(res => res))
    );
});
