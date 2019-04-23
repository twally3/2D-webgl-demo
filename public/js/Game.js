import Sprite from './Sprite.js';
import Matrix3 from './Matrix3.js';
import Point from './Point.js';

export default class Game {
	constructor() {
		this.canvasElement = document.createElement('canvas');
		this.canvasElement.width = 800;
		this.canvasElement.height = 600;

		this.worldSpaceMatrix = new Matrix3;

		this.gl = this.canvasElement.getContext('webgl2');
		this.gl.clearColor(0.4, 0.6, 1.0, 1.0);

		document.body.appendChild(this.canvasElement);

		const vs = document.getElementById('vs_01').innerHTML;
		const fs = document.getElementById('fs_01').innerHTML;

		this.sprite1 = new Sprite(this.gl, 'img/manonfire.png', vs, fs, { width: 48, height: 48 });
		this.sprite2 = new Sprite(this.gl, 'img/walker.png', vs, fs, { width: 64, height: 64 });

		// TODO Delete
		this.sprite1Pos = new Point();
		this.sprite2Pos = new Point();

		this.sprite1Frame = new Point();
		this.sprite2Frame = new Point();
	}

	resize(x, y) {
		this.canvasElement.width = x;
		this.canvasElement.height = y;

		const wRatio = x / (y / 240)
		this.worldSpaceMatrix = new Matrix3()
			.translate(-1, 1)
			.scale(2 / wRatio, -2 / 240); // 240 because NES vertical lines -2 to flip from 0 -> 240
	}

	update() {
		this.gl.viewport(0, 0, this.canvasElement.width, this.canvasElement.height);
		this.gl.clear(this.gl.COLOR_BUFFER_BIT);

		this.gl.enable(this.gl.BLEND);
		this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);

		this.sprite1Frame.x = (new Date() * 0.006) % 3
		this.sprite1Frame.y = (new Date() * 0.002) % 2

		this.sprite2Frame.x = (new Date() * 0.006) % 3
		this.sprite2Frame.y = (new Date() * 0.002) % 2

		this.sprite2Pos.x = (this.sprite2Pos.x + 1) % 256

		this.sprite1.render(this.sprite1Pos, this.sprite1Frame);
		this.sprite2.render(this.sprite2Pos, this.sprite2Frame);

		this.gl.flush();
	}
}