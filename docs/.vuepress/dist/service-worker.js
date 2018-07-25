/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "b5078335b30562962a586034f4ddd05b"
  },
  {
    "url": "api/methods/index.html",
    "revision": "68ad407a333c9aa59334fabdecb7bd53"
  },
  {
    "url": "api/methods/withBeforeAfter.html",
    "revision": "75a7f91f36092ca08372c561ef451e68"
  },
  {
    "url": "assets/css/0.styles.6d614d05.css",
    "revision": "b89a4e11259620fdaef1d30152920816"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.de06f3ac.js",
    "revision": "f27c996e7a3c6159de707f9410ca18da"
  },
  {
    "url": "assets/js/3.adcab1d6.js",
    "revision": "92b4acbd0333776bf88caaa2266c8fe6"
  },
  {
    "url": "assets/js/4.54bcc5ca.js",
    "revision": "fa03d2f9c1814a03d9c58cf89b51919c"
  },
  {
    "url": "assets/js/5.f4048133.js",
    "revision": "5577a9842987cde7da51c0831851856a"
  },
  {
    "url": "assets/js/6.0907da61.js",
    "revision": "79e351a44e0a8d90cb91dc368e82d91b"
  },
  {
    "url": "assets/js/app.dc4fbd3c.js",
    "revision": "57ba60e6985d65a99f3f43f91ad78385"
  },
  {
    "url": "index.html",
    "revision": "9b6473eaa3d7c7f1743e3c4c9dc78093"
  },
  {
    "url": "install/index.html",
    "revision": "c2a1d87c868c5d4658d75157c4845c88"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
