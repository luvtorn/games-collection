if(!self.define){let e,i={};const n=(n,d)=>(n=new URL(n+".js",d).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(d,a)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let c={};const s=e=>n(e,r),f={module:{uri:r},exports:c,require:s};i[r]=Promise.all(d.map((e=>f[e]||s(e)))).then((e=>(a(...e),c)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"1024x1024.png",revision:"8d8b8ea5e2aa62b9d03aa4250b4b00af"},{url:"192x192.png",revision:"044b0367e4f3feda8b7bbc2304d756d0"},{url:"48x48.png",revision:"3070287c51824710dab872afa7add17f"},{url:"512x512.png",revision:"011a5ad88bd666f9cd8a50d4aea4ce10"},{url:"72x72.png",revision:"cf5ac12ea7e99a3c210968e997770acd"},{url:"apple-touch-icon-180x180.png",revision:"2bd4dbf32064522ead21ce093bcbbef5"},{url:"assets/index-_6jJylfy.css",revision:null},{url:"assets/index-Dpf9qJYU.js",revision:null},{url:"favicon.ico",revision:"8169c619298003dd44d0efade9a096c6"},{url:"favicon.svg",revision:"689cd84c5f5ea6d9c3d51e5c20abbba6"},{url:"index.html",revision:"bae5d64c4bb701a229cc2b460f1f2899"},{url:"maskable-icon-512x512.png",revision:"c9d220596865dd0885ead6fc73e6c139"},{url:"pwa-192x192.png",revision:"86cbddc2d9a82ee0a9e4db49d15e79fc"},{url:"pwa-512x512.png",revision:"29eff76f3da5f49ae8002b625ade5837"},{url:"pwa-64x64.png",revision:"3dba30607a87fc0beaf2df640c544843"},{url:"192x192.png",revision:"044b0367e4f3feda8b7bbc2304d756d0"},{url:"48x48.png",revision:"3070287c51824710dab872afa7add17f"},{url:"512x512.png",revision:"011a5ad88bd666f9cd8a50d4aea4ce10"},{url:"72x72.png",revision:"cf5ac12ea7e99a3c210968e997770acd"},{url:"manifest.webmanifest",revision:"f4d057f07bc20546f0e47d37e74b1fb7"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
