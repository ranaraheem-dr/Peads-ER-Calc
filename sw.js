self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('paeds-er-calculator').then(cache => {
      return cache.addAll([
        '/',
        'icon.png',
        'index.html',
        'styles.css',
        'script.js'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});