export default class Material {
	/**
	 * Create a material object
	 * @param {WebGLRenderingContext} gl 
	 * @param {String} vs 
	 * @param {String} fs 
	 */
	constructor(gl, vs, fs) {
		this.gl = gl;

		const vsShader = this.getShader(vs, gl.VERTEX_SHADER);
		const fsShader = this.getShader(fs, gl.FRAGMENT_SHADER);

		if (vsShader && fsShader) {
			this.program = gl.createProgram();
			gl.attachShader(this.program, vsShader);
			gl.attachShader(this.program, fsShader);
			gl.linkProgram(this.program);

			if (!gl.getProgramParameter(this.program, gl.LINK_STATUS)) {
				console.error(`Cannot load shader: ${gl.getProgramInfoLog(this.program)}`);
				return null;
			}

			gl.detachShader(this.program, vsShader);
			gl.detachShader(this.program, fsShader);
			gl.deleteShader(vsShader);
			gl.deleteShader(fsShader);
		}
	}

	getShader(script, type) {
		const output = this.gl.createShader(type);
		this.gl.shaderSource(output, script);
		this.gl.compileShader(output);

		if (!this.gl.getShaderParameter(output, this.gl.COMPILE_STATUS)) {
			console.error(`Shader error: ${this.gl.getShaderInfoLog(output)}`);
			return null;
		}

		return output;
	}
}