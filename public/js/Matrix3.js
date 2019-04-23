export default class Matrix3 {
	constructor() {
		this.matrix = [
			1, 0, 0,
			0, 1, 0,
			0, 0, 1
		];
	}

	multiply(m) {
		const output = new Matrix3;
		output.matrix = [
			this.matrix[Matrix3.M00] * m.matrix[Matrix3.M00] + this.matrix[Matrix3.M10] * m.matrix[Matrix3.M01] + this.matrix[Matrix3.M20] * m.matrix[Matrix3.M02],
			this.matrix[Matrix3.M01] * m.matrix[Matrix3.M00] + this.matrix[Matrix3.M11] * m.matrix[Matrix3.M01] + this.matrix[Matrix3.M21] * m.matrix[Matrix3.M02],
			this.matrix[Matrix3.M02] * m.matrix[Matrix3.M00] + this.matrix[Matrix3.M12] * m.matrix[Matrix3.M01] + this.matrix[Matrix3.M22] * m.matrix[Matrix3.M02],
			
			this.matrix[Matrix3.M00] * m.matrix[Matrix3.M10] + this.matrix[Matrix3.M10] * m.matrix[Matrix3.M11] + this.matrix[Matrix3.M20] * m.matrix[Matrix3.M12],
			this.matrix[Matrix3.M01] * m.matrix[Matrix3.M10] + this.matrix[Matrix3.M11] * m.matrix[Matrix3.M11] + this.matrix[Matrix3.M21] * m.matrix[Matrix3.M12],
			this.matrix[Matrix3.M02] * m.matrix[Matrix3.M10] + this.matrix[Matrix3.M12] * m.matrix[Matrix3.M11] + this.matrix[Matrix3.M22] * m.matrix[Matrix3.M12],
			
			this.matrix[Matrix3.M00] * m.matrix[Matrix3.M20] + this.matrix[Matrix3.M10] * m.matrix[Matrix3.M21] + this.matrix[Matrix3.M20] * m.matrix[Matrix3.M22],
			this.matrix[Matrix3.M01] * m.matrix[Matrix3.M20] + this.matrix[Matrix3.M11] * m.matrix[Matrix3.M21] + this.matrix[Matrix3.M21] * m.matrix[Matrix3.M22],
			this.matrix[Matrix3.M02] * m.matrix[Matrix3.M20] + this.matrix[Matrix3.M12] * m.matrix[Matrix3.M21] + this.matrix[Matrix3.M22] * m.matrix[Matrix3.M22]
		];
		return output;
	}

	translate(x, y) {
		const output = new Matrix3;
		output.matrix = [
			this.matrix[Matrix3.M00],
			this.matrix[Matrix3.M01],
			this.matrix[Matrix3.M02],

			this.matrix[Matrix3.M10],
			this.matrix[Matrix3.M11],
			this.matrix[Matrix3.M12],

			x * this.matrix[Matrix3.M00] + y * this.matrix[Matrix3.M10] + this.matrix[Matrix3.M20],
			x * this.matrix[Matrix3.M01] + y * this.matrix[Matrix3.M11] + this.matrix[Matrix3.M21],
			x * this.matrix[Matrix3.M02] + y * this.matrix[Matrix3.M12] + this.matrix[Matrix3.M22],
		];
		return output;
	}

	scale(x, y) {
		const output = new Matrix3;
		output.matrix = [
			this.matrix[Matrix3.M00] * x,
			this.matrix[Matrix3.M01] * x,
			this.matrix[Matrix3.M02] * x,

			this.matrix[Matrix3.M10] * y,
			this.matrix[Matrix3.M11] * y,
			this.matrix[Matrix3.M12] * y,

			this.matrix[Matrix3.M20],
			this.matrix[Matrix3.M21],
			this.matrix[Matrix3.M22]
		];
		return output;
	}

	getFloatArray() {
		return new Float32Array(this.matrix);
	}
}

Matrix3.M00 = 0
Matrix3.M01 = 1
Matrix3.M02 = 2
Matrix3.M10 = 3
Matrix3.M11 = 4
Matrix3.M12 = 5
Matrix3.M20 = 6
Matrix3.M21 = 7
Matrix3.M22 = 8