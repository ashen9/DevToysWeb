if(!self.define){let e,s={};const c=(c,a)=>(c=new URL(c+".js",a).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(a,n)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let i={};const r=e=>c(e,t),o={module:{uri:t},exports:i,require:r};s[t]=Promise.all(a.map((e=>o[e]||r(e)))).then((e=>(n(...e),i)))}}define(["./workbox-b8d7f95a"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/11e07bb4-926a45b9f44e0905.js",revision:"926a45b9f44e0905"},{url:"/_next/static/chunks/157-e942c10711f7194c.js",revision:"e942c10711f7194c"},{url:"/_next/static/chunks/162-fb2838ffce17b213.js",revision:"fb2838ffce17b213"},{url:"/_next/static/chunks/263-38e0ff51ecccf9b9.js",revision:"38e0ff51ecccf9b9"},{url:"/_next/static/chunks/380-8aa55c9027f5a6f4.js",revision:"8aa55c9027f5a6f4"},{url:"/_next/static/chunks/441-f5b18903dc559086.js",revision:"f5b18903dc559086"},{url:"/_next/static/chunks/596-f2cbb294ec7e78d1.js",revision:"f2cbb294ec7e78d1"},{url:"/_next/static/chunks/798-f05ac2c0335eb26e.js",revision:"f05ac2c0335eb26e"},{url:"/_next/static/chunks/848-68c53968f8fdcccb.js",revision:"68c53968f8fdcccb"},{url:"/_next/static/chunks/882-1980b4b8bc9dffa6.js",revision:"1980b4b8bc9dffa6"},{url:"/_next/static/chunks/957-6706015b5476ec65.js",revision:"6706015b5476ec65"},{url:"/_next/static/chunks/963-5b69f711466bc3cf.js",revision:"5b69f711466bc3cf"},{url:"/_next/static/chunks/framework-964ee0448751bb21.js",revision:"964ee0448751bb21"},{url:"/_next/static/chunks/main-2868e5c9a6d9adfb.js",revision:"2868e5c9a6d9adfb"},{url:"/_next/static/chunks/pages/%5Bcategory%5D-057540ab5181b7c7.js",revision:"057540ab5181b7c7"},{url:"/_next/static/chunks/pages/%5Bcategory%5D/base64-28b814b825e4beef.js",revision:"28b814b825e4beef"},{url:"/_next/static/chunks/pages/%5Bcategory%5D/checksum-bb1999f97f4fc646.js",revision:"bb1999f97f4fc646"},{url:"/_next/static/chunks/pages/%5Bcategory%5D/gzip-7b37a0a8bdf4d2f9.js",revision:"7b37a0a8bdf4d2f9"},{url:"/_next/static/chunks/pages/%5Bcategory%5D/hash-38b59cbb8728d947.js",revision:"38b59cbb8728d947"},{url:"/_next/static/chunks/pages/%5Bcategory%5D/html-d853a10ca246301c.js",revision:"d853a10ca246301c"},{url:"/_next/static/chunks/pages/%5Bcategory%5D/inspector-case-converter-96110aa9b4fa77f7.js",revision:"96110aa9b4fa77f7"},{url:"/_next/static/chunks/pages/%5Bcategory%5D/json-2849c8a1ae5a6403.js",revision:"2849c8a1ae5a6403"},{url:"/_next/static/chunks/pages/%5Bcategory%5D/json-yaml-af7bb90f0a853af0.js",revision:"af7bb90f0a853af0"},{url:"/_next/static/chunks/pages/%5Bcategory%5D/jwt-decoder-af2c427c3acca989.js",revision:"af2c427c3acca989"},{url:"/_next/static/chunks/pages/%5Bcategory%5D/lorem-ipsum-87fda8c1563bc0c7.js",revision:"87fda8c1563bc0c7"},{url:"/_next/static/chunks/pages/%5Bcategory%5D/markdown-preview-4edce18188c0af6b.js",revision:"4edce18188c0af6b"},{url:"/_next/static/chunks/pages/%5Bcategory%5D/number-base-8302233a94ea3ccd.js",revision:"8302233a94ea3ccd"},{url:"/_next/static/chunks/pages/%5Bcategory%5D/sql-c5aafb2375bd4342.js",revision:"c5aafb2375bd4342"},{url:"/_next/static/chunks/pages/%5Bcategory%5D/url-f8ae3e530cd0442e.js",revision:"f8ae3e530cd0442e"},{url:"/_next/static/chunks/pages/%5Bcategory%5D/uuid-352e6466b9979446.js",revision:"352e6466b9979446"},{url:"/_next/static/chunks/pages/%5Bcategory%5D/xml-26a48ee7d0955d26.js",revision:"26a48ee7d0955d26"},{url:"/_next/static/chunks/pages/404-855d0c7800f38cf1.js",revision:"855d0c7800f38cf1"},{url:"/_next/static/chunks/pages/_app-dbaf4d149815513a.js",revision:"dbaf4d149815513a"},{url:"/_next/static/chunks/pages/_error-5a00309fd5f4b49e.js",revision:"5a00309fd5f4b49e"},{url:"/_next/static/chunks/pages/index-12a8b7e809e27d37.js",revision:"12a8b7e809e27d37"},{url:"/_next/static/chunks/pages/search-7631811e0f06acd5.js",revision:"7631811e0f06acd5"},{url:"/_next/static/chunks/pages/settings-2ac3f176dbd4a67d.js",revision:"2ac3f176dbd4a67d"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-6ef43a8d4a395f49.js",revision:"6ef43a8d4a395f49"},{url:"/_next/static/css/1f668023a127a29c.css",revision:"1f668023a127a29c"},{url:"/_next/static/kvkldYfDdizaXlWIEgGv0/_buildManifest.js",revision:"edfc2cb4e3dd931559dd0a6d133cdced"},{url:"/_next/static/kvkldYfDdizaXlWIEgGv0/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/favicon.ico",revision:"c549195b530e346275ca5bc4475b24ac"},{url:"/fonts/ibm-plex-sans-var.woff2",revision:"53c19ee2692551f7830c9bf2f8234ce4"},{url:"/icons/apple-touch-icon.png",revision:"e606592680a6fabed18697578203cf69"},{url:"/icons/icon-192.png",revision:"29a8c3ec0cbb4dd7180257e92b5333f7"},{url:"/icons/icon-512.png",revision:"b293c1fac8eb7f5839a9cce1909fd888"},{url:"/manifest.json",revision:"3600d718dff5bc3d81ff9e5d4c7dcb9f"},{url:"/robots.txt",revision:"35a161f1a9908bec04a1f4d292c4ae27"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:c,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
