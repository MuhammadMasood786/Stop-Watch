let cacheData = "timerAppV1";

this.addEventListener("install", (event) => {

    event.waitUntil(
        caches.open(cacheData).then((cache) => {
            cache.addAll([
                "/",
                '/static/js/bundle.js',
                '/static/js/0.chunk.js',
                '/static/js/main.chunk.js',
                "/src/Components/App/App.tsx",
                "/src/Components/Timer/Timer.tsx",
                "/src/Components/BtnTimer/Btns.tsx",
                "/public/index.html"
            ])
        })
    )
})

this.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((result) => {
            return result
        })
    )
})


console.log('Registered')


