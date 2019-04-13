const cacheName = 'cache-v1';
const precacheResources = [
      '/',
      'index.html',
      'login.html',
      'tasks.html',
      'important.html',
      'css/header.css',
      'css/headermq.css',
      'css/home.css',
      'css/listname.css',
      'css/listnamemq.css',
      'css/page.css',
      'css/scroll.css',
      'css/sidenav.css',
      'css/sidenavmq.css',
      'css/taskcontainer.css',
      'css/taskcontainermq.css',
      'css/taskmanager.css',
      'css/taskmenu.css',
      'images\arrow-right-solid.svg',
      'images\bars-solid-white.svg',
      'images\bars-solid.svg',
      'images\check-solid-white.svg'
      // 'images/space1.jpg',
      // 'images/space2.jpg',
      // 'images/space3.jpg'
];

self.addEventListener('install', event => {
      console.log('Service worker install event!');
      event.waitUntil(
            caches.open(cacheName)
                  .then(cache => {
                        return cache.addAll(precacheResources);
                  })
      );
});

self.addEventListener('activate', event => {
      console.log('Service worker activate event!');
});

self.addEventListener('fetch', event => {
      console.log('Fetch intercepted for:', event.request.url);
      event.respondWith(caches.match(event.request)
            .then(cachedResponse => {
                  if (cachedResponse) {
                        return cachedResponse;
                  }
                  return fetch(event.request);
            })
      );
});
