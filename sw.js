if(!self.define){let e,i={};const s=(s,d)=>(s=new URL(s+".js",d).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(d,r)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let c={};const f=e=>s(e,n),a={module:{uri:n},exports:c,require:f};i[n]=Promise.all(d.map((e=>a[e]||f(e)))).then((e=>(r(...e),c)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"1ship.svg",revision:"b31ed990925e6e9165ec09abbb0c692f"},{url:"2ship.svg",revision:"02bc37da2ef82b3d2a46c7d8f10d4d46"},{url:"3ship.svg",revision:"24dfe83b4179df9dc02ecc015e88cff1"},{url:"4ship.svg",revision:"fb03147fd75479ca7e1f901853bf8708"},{url:"apple-touch-icon-180x180.png",revision:"2bd4dbf32064522ead21ce093bcbbef5"},{url:"assets/index-GgXV-3lU.css",revision:null},{url:"assets/index-Ra9fcx3S.js",revision:null},{url:"favicon.ico",revision:"8169c619298003dd44d0efade9a096c6"},{url:"favicon.svg",revision:"689cd84c5f5ea6d9c3d51e5c20abbba6"},{url:"Flag_of_Russia.svg",revision:"7a8b3a7d8204983d246e6edbcbe21413"},{url:"index.html",revision:"c27e214242001337311481d3c104e1f4"},{url:"maskable-icon-512x512.png",revision:"c9d220596865dd0885ead6fc73e6c139"},{url:"pl.svg",revision:"aa3ad8a9daa8ec9d6018955708fe5737"},{url:"pwa-192x192.png",revision:"86cbddc2d9a82ee0a9e4db49d15e79fc"},{url:"pwa-512x512.png",revision:"29eff76f3da5f49ae8002b625ade5837"},{url:"pwa-64x64.png",revision:"3dba30607a87fc0beaf2df640c544843"},{url:"ua.svg",revision:"31e39f502bd68aa5673897f3aeaf6c2b"},{url:"usa.svg",revision:"4cdb75b07e35b223d2330c3789d5507c"},{url:"manifest.webmanifest",revision:"f4d057f07bc20546f0e47d37e74b1fb7"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
