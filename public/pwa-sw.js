const version = '1'
const cacheName = `rent-wallet-pwa-v${version}`
const cachingFiles = ['/', /^\.html/, /^\.js/, /^\.css/]

const onInstall = (e) => {
	e.waitUntil(
		caches
			.open(cacheName)
			.then((cache) => {
				return cache.addAll(cachingFiles)
			})
			.catch(console.error),
	)
}

// eslint-disable-next-line no-unused-vars,@typescript-eslint/no-unused-vars
const onActivate = (e) => {}

const onFetch = (event) => {
	event.respondWith(
		caches
			.match(event.request)
			.then((res) => {
				if (res) {
					return res
				}
				return fetch(event.request)
			})
			.catch(console.error),
	)

	self.addEventListener('fetch', (e) => {
		e.respondWith(
			caches.match(e.request).then((response) => {
				if (response !== undefined) {
					return response
				}
				return fetch(e.request)
					.then((res) => {
						const responseClone = res.clone()

						caches.open('v1').then((cache) => {
							cache.put(e.request, responseClone)
						})

						return res
					})
					.catch(() => {
						return caches.match('/sw-test/gallery/myLittleVader.jpg')
					})
			}),
		)
	})
}

self.addEventListener('install', onInstall)
self.addEventListener('activate', onActivate)
self.addEventListener('fetch', onFetch)
