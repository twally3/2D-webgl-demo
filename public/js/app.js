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

window.addEventListener('resize', _ => {
	window.game.resize(
		window.innerWidth,
		window.innerHeight
	);
});