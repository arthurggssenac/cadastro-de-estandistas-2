importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}

workbox.routing.registerRoute(
  /\.(?:js|html|css|jpg)$/,
  new workbox.strategies.NetworkFirst()
);

workbox.routing.registerRoute(
  //'http://localhost:3000/',
  'https://arthurggssenac.github.io/cadastro-de-estandistas-2/',
  new workbox.strategies.NetworkFirst()
);