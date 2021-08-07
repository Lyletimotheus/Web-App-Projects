// Static resources / shell resources of the website 
const staticCacheName = 'site-static-v1';

// Dynamic resources that should be cached 
const dynamicCache = 'site-dynamic-v1'; 

// Assets we want to cache 
const assets = [
    '/PWA_Number_1/',
    '/PWA_Number_1/index.html',
    '/PWA_Number_1/js/app.js',
    '/PWA_Number_1/js/ui.js',
    '/PWA_Number_1/js/materialize.min.js',
    '/PWA_Number_1/css/styles.css',
    '/PWA_Number_1/css/materialize.min.css',
    '/PWA_Number_1/img/dish.png',
    'https://fonts.googleapis.com/icon?family=Material+Icons',
    'https://fonts.gstatic.com/s/materialicons/v97/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2'
];

//Install the service worker
self.addEventListener('install', evt => {
    // console.log('Service worker has been installed');
    
    // Wait until all the assets have loaded before ending the installation of the service worker 
        evt.waitUntil(
            caches.open(staticCacheName).then(cache => {
            console.log('caching shell assets');
            cache.addAll(assets);
        }
    ));
});


// Activate service worker
self.addEventListener('activate', evt => {
    // console.log('Service worker has been activated.');
    evt.waitUntil(
        caches.keys().then(keys =>{
            // keys returns an array of cache names we have stored 
            //console.log(keys);
            return Promise.all(keys
                .filter(key => key !== staticCacheName)
                .map(key => caches.delete(key))
            )
        })
    )
});

// Fetch events - getting files from the server such as JS,HTML,CSS
self.addEventListener('fetch', evt => {
    // console.log('fetch event', evt);

    // Checking to see if the request is in our pre-cached assets and return the assets from the cache, else go to the server and return the assets from the initial request
    evt.respondWith(
        caches.match(evt.request).then(cacheRes => {
            return cacheRes || fetch(evt.request).then(fetchRes => {
                return caches.open(dynamicCache).then(cache => {
                    cache.put(evt.request.url, fetchRes.clone());
                    return fetchRes;
                })
            });
        })
    );
}); 