let CACHE_NAME = 'cache-v1';

/**
 * TODO:
 * [ ] Crie uma lista com todos os arquivos a serem disponibilizados offline
 */
let urlsToCache = [];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        /**
         * TODO:
         * [ ] Adicione a sua lista de arquivos em cache
         */
        return cache.addAll(/* ... */);
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