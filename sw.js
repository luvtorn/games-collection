if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,c)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(i[a])return;let s={};const d=e=>n(e,a),o={module:{uri:a},exports:s,require:d};i[a]=Promise.all(r.map((e=>o[e]||d(e)))).then((e=>(c(...e),s)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"1024x1024.png",revision:"8d8b8ea5e2aa62b9d03aa4250b4b00af"},{url:"192x192.png",revision:"044b0367e4f3feda8b7bbc2304d756d0"},{url:"48x48.png",revision:"3070287c51824710dab872afa7add17f"},{url:"512x512.png",revision:"011a5ad88bd666f9cd8a50d4aea4ce10"},{url:"72x72.png",revision:"cf5ac12ea7e99a3c210968e997770acd"},{url:"apple-touch-icon-180x180.png",revision:"a27d7b61a0241052f736ebe81718c101"},{url:"assets/index-Ba92MeC_.js",revision:null},{url:"assets/index-CNOFBiXW.css",revision:null},{url:"favicon.ico",revision:"89099cfae0775e3e086613bca3190493"},{url:"favicon.svg",revision:"71dcfd191507c31dc79efe3341dfa3b9"},{url:"index.html",revision:"1cef3bf25fdcdc6309da691b38a16000"},{url:"maskable-icon-512x512.png",revision:"126c55dc030a58db716758479c41c570"},{url:"pwa-192x192.png",revision:"14a23cc23a2f5a3157ac52e78135346c"},{url:"pwa-512x512.png",revision:"5a051418936d2f633fc164f78b1662e1"},{url:"pwa-64x64.png",revision:"f35ebe1d2519c34b44344b0135c4f1a1"},{url:"192x192.png",revision:"044b0367e4f3feda8b7bbc2304d756d0"},{url:"72x72.png",revision:"cf5ac12ea7e99a3c210968e997770acd"},{url:"manifest.webmanifest",revision:"60d3e68db1e82f10407ce56110c84096"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
