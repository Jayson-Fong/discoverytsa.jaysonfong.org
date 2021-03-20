/* global self, caches */

const discoveryTSA = "discovery-tsa-v1";
const assets = [
    /* Pages */
    "/",
    "/index.html",
    /* CSS */
    "/assets/css/style.min.css",
    /* Images */
    "/assets/img/front.jpeg",
    "/assets/img/front.webp",
    "/assets/img/logo-full.png",
    "/assets/img/logo-full.webp",
    "/assets/img/logo.png",
    "/assets/img/logo.webp",
    /* Scripts */
    "/assets/js/all.min.js"
];

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(discoveryTSA).then(cache => {
            cache.addAll(assets);
        })
    );
});


