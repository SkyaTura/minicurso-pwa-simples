let CACHE_NAME = 'cache-v1';

/**
 * TODO:
 * [X] Crie uma lista com todos os arquivos a serem disponibilizados offline
 */
let urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/assets/css/main.css',
  '/assets/css/normalize.css',
  '/assets/js/ServiceWorker.js',
  '/assets/js/Tasks.js'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        /**
         * TODO:
         * [X] Adicione a sua lista de arquivos em cache
         */
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
          if (response) {
            return response;
          }
          return fetch(event.request);
        }
      )
  );
});