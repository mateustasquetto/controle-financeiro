self.addEventListener('install', (e) => self.skipWaiting());
self.addEventListener('activate', (e) => clients.claim());
self.addEventListener('fetch', (e) => {
  // Deixa requisições do Google Apps Script passarem direto para a rede
  if (e.request.url.includes('script.google.com')) {
    return fetch(e.request);
  }
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});