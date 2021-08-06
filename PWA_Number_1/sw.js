//Install the service worker
self.addEventListener('install', evt => {
    console.log('Service worker has been installed');
});

// Activate service worker
self.addEventListener('activate', evt => {
    console.log('Service worker has been activated.');
});

// Fetch events - getting files from the server such as JS,HTML,CSS
self.addEventListener('fetch', evt => {
    console.log('fetch event');
}); 