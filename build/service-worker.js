"use strict";var precacheConfig=[["/index.html","ae3b87f01b0d290d42940e34a174701d"],["/static/css/main.4eea499b.css","9dc33786c13de17fe23b99603dca07fc"],["/static/js/main.5b5afefd.js","9431dcbd514f3bdcbd8d90d50ee885c3"],["/static/media/Clay Rosica.4297cebc.jpg","4297cebc0aece07d5c1d9918deb76faa"],["/static/media/Holly.e633b20d.jpg","e633b20db7c014614e97538eea460980"],["/static/media/Michael Kindy.a88192ff.jpg","a88192ff79c91777e50200528597cfae"],["/static/media/Nick Brosamle.82d3156f.jpg","82d3156f7c63b81fcc46a7465f0e3fda"],["/static/media/OD-logo.c13c5d50.svg","c13c5d50bf24faf8b6c85c03c2483f93"],["/static/media/Owen Picariello.d9293523.jpg","d929352373b93d7ceabdd94f834f40ee"],["/static/media/Steve Thouvenot.7ca396c6.jpg","7ca396c60f8d7781b610f7fdc01f93da"],["/static/media/Tanner D'Ortenzio.e41bf1a5.jpg","e41bf1a51b33f394dfc41b3c51954d33"],["/static/media/bg.779a85be.png","779a85bef415b2bb353e7b87cb20c826"],["/static/media/blank.8cb04c92.png","8cb04c9257b4a8c80ab792437cfefc9a"],["/static/media/fontawesome-webfont.674f50d2.eot","674f50d287a8c48dc19ba404d20fe713"],["/static/media/fontawesome-webfont.912ec66d.svg","912ec66d7572ff821749319396470bde"],["/static/media/fontawesome-webfont.af7ae505.woff2","af7ae505a9eed503f8b8e6982036873e"],["/static/media/fontawesome-webfont.b06871f2.ttf","b06871f281fee6b241d60582ae9369b9"],["/static/media/fontawesome-webfont.fee66e71.woff","fee66e712a8a08eef5805a46892932ad"],["/static/media/greycliff-cf-heavy-oblique.3992ab5c.woff2","3992ab5caf684c3d3b6c3b27f1bc11da"],["/static/media/greycliff-cf-heavy-oblique.701dcddf.ttf","701dcddf7ff185ca2e0351aaafb2b1c4"],["/static/media/greycliff-cf-heavy.12de22f1.ttf","12de22f1ee5f34725430a44a534a4778"],["/static/media/greycliff-cf-heavy.c6c62cfb.woff2","c6c62cfb4f58af7e0f845e8763f89b62"],["/static/media/greycliff-cf-medium-oblique.4a4a8526.woff2","4a4a852666bf9cfc96d799fe29ac6a37"],["/static/media/greycliff-cf-medium-oblique.a535856c.ttf","a535856ca075361b77f9e35494d7c35b"],["/static/media/greycliff-cf-medium.48239b86.ttf","48239b86bb25236aad0180938d08eddd"],["/static/media/greycliff-cf-medium.698b8e8a.woff2","698b8e8ad08daca024907862c67c1aba"],["/static/media/greycliff-cf-regular-oblique.a47eec90.ttf","a47eec90300fc687f64ba41d29a307ca"],["/static/media/greycliff-cf-regular-oblique.e8195482.woff2","e81954821d70987b4878c538ea099a63"],["/static/media/greycliff-cf-regular.61e3771a.woff2","61e3771a56f5071074800582eee2aa8c"],["/static/media/greycliff-cf-regular.e6663cae.ttf","e6663caec42a0c60fb5948b6edd2cbac"],["/static/media/logo.9163381d.svg","9163381d6f657e4702d9c483d3ac0a45"],["/static/media/red-logo.84d7794e.svg","84d7794e2b4bf7666bd45da4ed823a18"],["/static/media/redPhiSig.c17e0ecb.svg","c17e0ecbf63c7414ee61f071a56594b4"],["/static/media/white-logo.8e77bd7f.svg","8e77bd7f9934a0fb05747185cf9483e3"],["/static/media/whitePhiSig.923676d0.svg","923676d032415e9f2782c3acf50d33e9"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var f=new URL(e);return c&&f.pathname.match(c)||(f.search+=(f.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),f.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),f=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),f]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var f="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(f,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});