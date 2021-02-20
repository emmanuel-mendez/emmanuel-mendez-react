/* eslint-disable no-restricted-globals */

import { clientsClaim } from 'workbox-core';
import { ExpirationPlugin } from 'workbox-expiration';
import { precacheAndRoute, createHandlerBoundToURL } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate, CacheFirst, NetworkFirst } from 'workbox-strategies';
import * as googleAnalytics from 'workbox-google-analytics';

clientsClaim();


// PRECACHE ASSETS
precacheAndRoute(self.__WB_MANIFEST);


// APP SHELL
const fileExtensionRegexp = new RegExp('/[^/?]+\\.[^/]+$');
registerRoute(
  ({ request, url }) => {
    if (request.mode !== 'navigate') {
      return false;
    }

    if (url.pathname.startsWith('/_')) {
      return false;
    }

    if (url.pathname.match(fileExtensionRegexp)) {
      return false;
    }

    return true;
  },
  createHandlerBoundToURL(process.env.PUBLIC_URL + '/index.html')
);


// GOOGLE ANALYTICS OFFLINE
googleAnalytics.initialize({
  parameterOverrides: {
    cd1: 'offline',
  },
});


// STALE WHILE REVALIDATE

//PNG files
registerRoute(
  ({ url }) => url.origin === self.location.origin && url.pathname.endsWith('.png'),
  new StaleWhileRevalidate({
    cacheName: 'images',
    plugins: [
      new ExpirationPlugin({ maxEntries: 50 }),
    ],
  })
);

//ICO Files
registerRoute(
  ({ url }) => url.origin === self.location.origin && url.pathname.endsWith('.ico'),
  new StaleWhileRevalidate({
    cacheName: 'icons',
    plugins: [
      new ExpirationPlugin({ maxEntries: 50 }),
    ],
  })
);

//SVG Files
registerRoute(
  ({ url }) => url.origin === self.location.origin && url.pathname.endsWith('.svg'),
  new StaleWhileRevalidate({
    cacheName: 'svgs',
    plugins: [
      new ExpirationPlugin({ maxEntries: 50 }),
    ],
  })
);


// CACHE FIRST

//TTF Files
registerRoute(
  ({ url }) => url.origin === self.location.origin && url.pathname.endsWith('.ttf'),
  new CacheFirst({
    cacheName: 'fonts',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 2,
        maxAgeSeconds: 30 * 24 * 60 * 60,
      }),
    ],
  })
);


// NETWORK FIRST
registerRoute(
  ({ url }) => url.pathname.startsWith('/'),
  new NetworkFirst()
);



// This allows the web app to trigger skipWaiting via
// registration.waiting.postMessage({type: 'SKIP_WAITING'})
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// Any other custom service worker logic can go here.
