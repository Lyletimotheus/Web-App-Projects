// Static resources / shell resources of the website 
const staticCacheName = 'site-static';

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
});

// Fetch events - getting files from the server such as JS,HTML,CSS
self.addEventListener('fetch', evt => {
    // console.log('fetch event', evt);
}); 