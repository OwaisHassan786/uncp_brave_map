//Make sure service workers are supported
//We are registering the sw in this file, or the main js file for the application. We have a seperate file, which does the job of caching the files.
//ES6 Arrow functions are used to simplify the syntax of each function
if('serviceWorker' in navigator) {
    console.log('Service Worker Supported by Browser')
    //We are registering when the window loads!
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('serviceworker.js')
            .then(reg => console.log('Service Worker Registered'))
            //We are using promises here to register the SW
            .catch(err => console.log('Service Worker: Error: ${err} '))
    });
}
