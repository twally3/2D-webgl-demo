import Sprite from './Sprite.js';

export default class Game {
	constructor() {
		this.canvasElement = document.createElement('canvas');
		this.canvasElement.width = 800;
		this.canvasElement.height = 600;

		this.gl = this.canvasElement.getContext('webgl2');
		this.gl.clearColor(0.4, 0.6, 1.0, 1.0);

		document.body.appendChild(this.canvasElement);

		const vs = document.getElementById('vs_01').innerHTML;
		const fs = document.getElementById('fs_01').innerHTML;

		this.sprite = new Sprite(this.gl, 'img/nolt.png', vs, fs);
	}

	update() {
		this.gl.viewport(0, 0, this.canvasElement.width, this.canvasElement.height);
		this.gl.clear(this.gl.COLOR_BUFFER_BIT);

		this.gl.enable(this.gl.BLEND);
		this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);

		this.sprite.render();

		this.gl.flush();
	}
}