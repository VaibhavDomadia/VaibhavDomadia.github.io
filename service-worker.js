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
      'css/taskmanagermq.css',
      'css/taskmenu.css',
      'images/arrow-right-solid.svg',
      'images/bars-solid-white.svg',
      'images/bars-solid.svg',
      'images/check-circle-regular.svg',
      'images/check-solid-white.svg',
      'images/check-solid-yellow.svg',
      'images/check-solid.svg',
      'images/circle-regular.svg',
      'images/home-todo-image.png',
      'images/palette-solid.svg',
      'images/pen-solid.svg',
      'images/plus-solid-yellow.svg',
      'images/sign-out-alt-solid.svg',
      'images/sort-amount-up-solid.svg',
      'images/star-regular-dark.svg',
      'images/star-regular-white.svg',
      'images/star-regular.svg',
      'images/star-solid-yellow.svg',
      'images/star-solid.svg',
      'images/tasks-solid.svg',
      'images/th-large-solid.svg',
      'images/times-solid.svg',
      'images/todo.png',
      'images/todo192.png',
      'images/todo512.png',
      'images/todoy.png',
      'images/trash-solid-white.svg',
      'images/trash-solid.svg',
      'js/addtask.js',
      'js/authentication.js',
      'js/dropdown.js',
      'js/header.js',
      'js/important.js',
      'js/sidenav.js',
      'js/taskgroupcontainer.js',
      'js/taskmanager.js',
      'js/tasks.js'
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