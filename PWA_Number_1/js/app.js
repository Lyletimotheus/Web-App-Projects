// Check to see if service workers are supported by the browser
if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/PWA_Number_1/sw.js')
    .then((reg) => console.log('Service Worker registered.', reg))
    .catch((err) => console.log('Service Worker not registered.', err))
}