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
    "revision": "12c5ead1b68baf34a1e40029ce2a5bd2"
  },
  {
    "url": "api/components/bemModifiers.html",
    "revision": "9c24232c6e28a93042f85ecc707f951b"
  },
  {
    "url": "api/components/index.html",
    "revision": "f8833a6a68fb2eee22c4eb854a34c110"
  },
  {
    "url": "api/methods/index.html",
    "revision": "b5511a8ed27d016a8277f3775fef65a9"
  },
  {
    "url": "api/methods/withBeforeAfter.html",
    "revision": "de79c64894ef6d50f9f254e2e7ceb1e9"
  },
  {
    "url": "assets/css/0.styles.1edb1086.css",
    "revision": "2cd6de0f12fc0028876a59b3e8c8d825"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.5092f1c4.js",
    "revision": "eac8f7d2bc6138ead1f948db7e987436"
  },
  {
    "url": "assets/js/3.beb75ec9.js",
    "revision": "4c9d1e208ee38655c15eb966e01daa76"
  },
  {
    "url": "assets/js/4.72171a52.js",
    "revision": "9cc259150abbd3d56035996ca111330e"
  },
  {
    "url": "assets/js/5.ab165ca3.js",
    "revision": "54caa8c3d4fd979a3bb3462d76f6a837"
  },
  {
    "url": "assets/js/6.11d17e16.js",
    "revision": "e1f6771f99a186d0d945a73270d8d2eb"
  },
  {
    "url": "assets/js/7.5b5add5f.js",
    "revision": "c47284137398e98c4dad0dac92db3b0b"
  },
  {
    "url": "assets/js/8.e7dbbfdf.js",
    "revision": "494732e1c04435b9c1f360d7df209149"
  },
  {
    "url": "assets/js/app.25265c69.js",
    "revision": "0f6c9acfc5227ee78b20bcf514f1baa1"
  },
  {
    "url": "index.html",
    "revision": "b490e9c253cd9757993467d57b30e049"
  },
  {
    "url": "install/index.html",
    "revision": "554407528c89eaa6fcbce75859438fbc"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
