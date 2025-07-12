
export function registerServiceWorker() {
  // Skip Service Worker registration in StackBlitz environment
  if (window.location.hostname.includes('stackblitz') || 
      window.location.hostname.includes('webcontainer')) {
    console.log('Service Worker registration skipped in StackBlitz environment');
    return;
  }

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js')
        .then(registration => {
          console.log('ServiceWorker registration successful with scope: ', registration.scope);
        })
        .catch(error => {
          console.error('ServiceWorker registration failed: ', error);
        });
    });
  }
}
