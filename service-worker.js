/* eslint-disable func-names */
/* eslint-disable no-restricted-globals */
const cacheName = "abhijit945-github-io";
const filesToCache = [
  "/",
  "/index.html",
  "/service-worker.js",
  "/public/manifest.json",
  "/public/favicon.ico",
  "/dist/bundle.js"
];

/* Start the service worker and cache all of the app's content */
self.addEventListener("install", function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});

/* Serve cached content when offline */
self.addEventListener("fetch", function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
