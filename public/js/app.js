import Game from './Game.js';

function loop() {
	window.game.update();
	requestAnimationFrame(loop);
}

window.addEventListener('load', _ => {
	window.game = new Game();
	loop();
})