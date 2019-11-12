export const install = () => {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', async function() {
      const registrations = await navigator.serviceWorker.getRegistrations()
      registrations.forEach(registration => {
        registration.unregister()
        console.log("uninstalled old service worker")
      })
      navigator.serviceWorker.register('/sw.js').then(function(registration) {
        // Registration was successful
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      }, function(err) {
        // registration failed :(
        console.log('ServiceWorker registration failed: ', err);
      });
    })
  }
}

