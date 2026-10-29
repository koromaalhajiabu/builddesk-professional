const CACHE_NAME = 'builddesk-professional-v7';
const APP_SHELL = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icon-192.png',
  './icon-512.png'
];
const NEVER_CACHE_HOSTS = ['supabase.co', 'supabase.in'];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (NEVER_CACHE_HOSTS.some(h => url.hostname.endsWith(h))) return;

  const isPage = url.origin === self.location.origin && (req.mode === 'navigate' || url.pathname.endsWith('/') || url.pathname.endsWith('/index.html'));

  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);
    if (isPage) {
      // Pages: network first, so design and content updates appear straight away.
      // The saved copy is used only when the phone is offline.
      try {
        const res = await fetch(req);
        if (res && res.ok) cache.put('./index.html', res.clone()).catch(() => {});
        return res;
      } catch (err) {
        const shell = await cache.match('./index.html');
        if (shell) return shell;
        throw err;
      }
    }
    // Other files (icons, background, manifest): saved copy first, then network.
    const cached = await cache.match(req);
    if (cached) return cached;
    const res = await fetch(req);
    if (res && res.ok) cache.put(req, res.clone()).catch(() => {});
    return res;
  })());
});
