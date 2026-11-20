/* Service worker : usage hors ligne + mise à jour automatique au lancement.
   Stratégie « réseau d'abord » : à chaque ouverture, on demande la version actuelle au serveur
   (en ignorant le cache HTTP du navigateur) et on la sert. Elle est aussi copiée sur l'appareil.
   Si le réseau est absent, ou ne répond pas en moins de TIMEOUT ms, on sert la copie déjà
   enregistrée ; la mise à jour se termine alors en arrière-plan et sera là au lancement suivant.
   CACHE ne sert qu'à vider les anciennes copies : le changer est facultatif après une modification de la page. */
var CACHE = 'courbes-gf-v2';
var TIMEOUT = 3000;
var FILES = [
  './',
  'index.html',
  'manifest.webmanifest',
  'icons/icon-192.png',
  'icons/icon-512.png',
  'icons/icon-maskable-512.png',
  'icons/apple-touch-icon.png'
];

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(CACHE).then(function (c) {
      return Promise.all(FILES.map(function (f) {
        return fetch(new Request(f, { cache: 'reload' })).then(function (r) { if (r.ok) return c.put(f, r); });
      }));
    }).then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;

  /* demande au serveur, sans passer par le cache HTTP, puis range la réponse dans le cache */
  var network = fetch(new Request(req, { cache: 'no-cache' })).then(function (res) {
    if (res && res.ok) {
      var copy = res.clone();
      caches.open(CACHE).then(function (c) { c.put(req, copy); });
    }
    return res;
  });
  e.waitUntil(network.catch(function () {}));   /* laisse la mise à jour finir même si on a servi le cache */

  var fallback = caches.match(req, { ignoreSearch: true });
  var timer;
  var slow = new Promise(function (resolve) {
    timer = setTimeout(function () { fallback.then(function (hit) { if (hit) resolve(hit); }); }, TIMEOUT);
  });
  e.respondWith(
    Promise.race([network.then(function (res) { clearTimeout(timer); return res; }), slow])
      .catch(function () { return fallback.then(function (hit) { return hit || Response.error(); }); })
  );
});
