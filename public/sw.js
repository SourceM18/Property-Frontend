function registerPwaWorker() {
	navigator.serviceWorker.register('/pwa-sw.js').then(console.log).catch(console.error)
}
// function registerPusherWorker (){
// 	navigator.serviceWorker
// 		.register( 'https://js.pusher.com/beams/service-worker.js' )
// 		.then( console.log )
// 		.catch( console.error );
// }

if (navigator.serviceWorker) {
	window.addEventListener('load', registerPwaWorker)
	// window.addEventListener( 'load', registerPusherWorker );
}
