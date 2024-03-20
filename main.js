// https://www.w3schools.com/python/module_random.asp
class random {
	static random() {
		return (Math.random());
	}
	static randint(a, b) {
		return (Math.ceil(Math.random() * ((b - a) + 1)) + a - 1);
	}
	static choice(arr) {
		return (arr[Math.ceil(Math.random() * arr.length) - 1]);
	}
	static shuffle(arr) {
		let wasString = false;
		let len = arr.length;
		if (typeof (arr) == 'string') {
			arr = arr.split('');
			wasString = true;
		}
		let newArr = [];
		for (let i = 0; i < len; i++) {
			newArr.push(arr.splice(Math.ceil(Math.random() * arr.length) - 1, 1)[0]);
		}
		return (wasString ? newArr.join('') : newArr);
	}
}

function type(n) {
	return typeof n;
}

function int(n, base = 10) {
	return parseInt(String(n), base);
}

function float(n) {
	return parseFloat(String(n));
}

function str(n) {
	return String(n);
}

function len(n) {
	return n.length;
}

function range(...inputs) {
	let start;
	let stop;
	let step;
	if (inputs.length == 1) {
		[start, stop, step] = [0, inputs[0], 1];
	} else if (inputs.length == 2) {
		[start, stop, step] = [inputs[0], inputs[1], 1];
	} else {
		[start, stop, step] = [inputs[0], inputs[1], inputs[2]];
	}
	let out = [];
	if (step > 0) {
		for (let index = start; index < stop; index += step) {
			out.push(index);
		}
	} else {
		for (let index = stop; index > start; index -= step) {
			out.push(index);
		}
	}
	return out;
}

function round(number, digits) {
	return Math.round(number * 10 ** digits) / 10 ** digits;
}

function chr(__i) {
	return String.fromCharCode(__i);
}

function ord(__c) {
	return __c.charCodeAt(0);
}
String.prototype.join = function (arr) {
	return arr.join(this);
};
print = console.log;

const True = true;
const False = false;

// https://www.w3schools.com/python/module_math.asp
class math {
	static acos(__x){
		return Math.acos(__x);
	}
	static acosh(__x){
		return Math.acosh(__x);
	}
	static asin(__x){
		return Math.asin(__x);
	}
	static asinh(__x){
		return Math.asinh(__x);
	}
	static atan(__x){
		return Math.atan(__x);
	}
	static atan2(__x){
		return Math.atan2(__x);
	}
	static atanh(__x){
		return Math.atanh(__x);
	}
	static ceil(__x){
		return Math.ceil(__x);
	}
	static comb(__x){
		return Math.comb(__x);
	}
	static copysign(__x){
		return Math.copysign(__x);
	}
	static cos(__x){
		return Math.cos(__x);
	}
	static cosh(__x){
		return Math.cosh(__x);
	}
	static degrees(__x){
		return __x * (180/Math.PI);
	}
		static dist(__p,__q){
			if (__p.length == 1){
				__p.push(__p[0])
			}
			if (__q.length == 1){
				__q.push(__p[0])
			}
			let x1 = __p[0];
			let x2 = __q[0];
			let y1 = __p[1];
			let y2 = __q[1];
		return Math.sqrt( Math.pow((x1-x2), 2) + Math.pow((y1-y2), 2) );
	}
	static erf(x){ // https://hewgill.com/picomath/javascript/erf.js.html
		// constants
		var a1 =  0.254829592;
		var a2 = -0.284496736;
		var a3 =  1.421413741;
		var a4 = -1.453152027;
		var a5 =  1.061405429;
		var p  =  0.3275911;
	
		// Save the sign of x
		var sign = 1;
		if (x < 0) {
			sign = -1;
		}
		x = Math.abs(x);
	
		// A&S formula 7.1.26
		var t = 1.0/(1.0 + p*x);
		var y = 1.0 - (((((a5*t + a4)*t) + a3)*t + a2)*t + a1)*t*Math.exp(-x*x);
	
		return sign*y;
	}
	static erfc(){
		throw Error("Function not implemented");
	}
	static exp(x){
		return Math.E ** x;
	}
	static expm1(x){
		return (Math.E ** x) - 1;
	}
	static fabs(__x){
		return Math.abs(__x) * 1.0;
	}
	static factorial(__x){
		let out = 1;
		let i = 1;
		for (i;i<=__x;i++){
			out *= i;
		}
		return out;
	}
	static floor(__x){
		return Math.floor(__x);
	}
	static fmod(x,y){
		return x%y * 1.0
	}
	static frexp(value) { // https://blog.codefrau.net/2014/08/deconstructing-floats-frexp-and-ldexp.html
		if (value === 0) return [value, 0];
		var data = new DataView(new ArrayBuffer(8));
		data.setFloat64(0, value);
		var bits = (data.getUint32(0) >>> 20) & 0x7FF;
		if (bits === 0) { // denormal
			data.setFloat64(0, value * Math.pow(2, 64));  // exp + 64
			bits = ((data.getUint32(0) >>> 20) & 0x7FF) - 64;
		}
		var exponent = bits - 1022;
		var mantissa = ldexp(value, -exponent);
		return [mantissa, exponent];
	}
	static fsum(__x){
		//get sum
	}
}
