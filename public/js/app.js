import Game from './Game.js';

function loop() {
	window.game.update();
	requestAnimationFrame(loop);
}

window.addEventListener('load', _ => {
	window.game = new Game();
	window.game.resize(
		window.innerWidth,
		window.innerHeight
	);
	loop();
})

let resizeTimer;
window.addEventListener('resize', _ => {
	clearTimeout(resizeTimer);
	resizeTimer = setTimeout(_ => {
		window.game.resize(
			window.innerWidth,
			window.innerHeight
		);
	}, 250);
});