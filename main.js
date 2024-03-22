/* Functions
? Functions added so far
* random.random()
* random.randint()
* random.choice()
* random.shuffle()
* pow()
* bool()
* type()
* int()
* float()
* str()
* len()
* range()
* round()
* chr()
* ord()
* min()
* max()
* join
* print()
* True
* False
* math.acos()
* math.acosh()
* math.asin()
* math.asinh()
* math.atan()
* math.atan2()
* math.atanh()
* math.ceil()
* math.comb()
* math.copysign()
* math.cos()
* math.cosh()
* math.degrees()
* math.dist()
* math.erf()
* math.erfc()
* math.exp()
* math.expm1()
* math.fabs()
* math.factorial()
* math.floor()
* math.fmod()
* math.frexp()
* math.fsum()
* math.gamma()
* math.gcd()
* math.hypot()
* math.isclose()
* math.isfinite()
* math.isinf()
* math.isnan()
* math.isqrt()
* math.ldexp()
* math.lgamma()
* math.log()
* math.log10()
* math.log1p()
* math,log2()
* math.perm()
* math.pow()
* math.prod()
* math.radians()
* math.remainder()
* math.sin()
* math.sinh()
* math.sqrt()
* math.tan()
* math.tanh()
* string.capitalize()
*/
/* TODO
https://www.w3schools.com/python/python_ref_functions.asp
TODO String prototype modifications https://www.w3schools.com/python/python_ref_string.asp
TODO string.casefold() proving difficult, will return to later
TODO string.center()
TODO string.count()
TODO string.encode() might be difficult
TODO string.endswith()
TODO string.expandtabs()
TODO string.find()
TODO string.format()
TODO string.format_map()
TODO string.index()
TODO string.isalnum()
TODO string.isalpha()
TODO string.isascii()
TODO string.isdecimal()
TODO string.isdigit()
TODO string.isidentifier()
TODO string.islower()
TODO string.isnumeric()
TODO string.isprintable()
TODO string.isspace()
TODO string.istitle()
TODO string.isupper()
TODO string.ljust()
TODO string.lower()
TODO string.lstrip()
TODO string.maketrans()
TODO string.partition()
TODO string.rfind()
TODO string.rindex()
TODO string.rjust()
TODO string.rpartition()
TODO string.rsplit()
TODO string.rstrip()
TODO string.splitlines()
TODO string.startswith()
TODO string.strip()
TODO string.swapcase()
TODO string.title()
TODO string.translate()
TODO string.upper()
TODO string.zfill()
TODO Array prototype modifications https://www.w3schools.com/python/python_ref_list.asp
TODO Dictionary prototype modifications https://www.w3schools.com/python/python_ref_dictionary.asp
TODO ascii()
TODO bin()
TODO bytearray()
TODO bytes()
TODO callable()
TODO classmethod()
TODO compile()
TODO complex()
TODO delattr()
TODO dict()
TODO dir()
TODO divmod()
TODO enumerate()
TODO eval()
TODO exec()
TODO filter()
TODO format()
TODO frozenset()
TODO getattr()
TODO globals()
TODO hasattr()
TODO hash()
TODO help()
TODO hex()
TODO id()
TODO input() likely not possible 
TODO isinstance()
TODO issubclass()
TODO iter()
TODO list()
TODO locals()
TODO map()
TODO memoryview()
TODO next()
TODO object()
todo oct()
TODO open() might not be possible
TODO property()
TODO repr()
TODO reversed()
TODO set()
TODO setattr()
TODO slice()
TODO sorted()
TODO staticmethod()
TODO sum()
TODO super()
TODO tuple()
TODO vars()
TODO zip()
! Setting # to comment not possible
*/
class random {
	static random() {
		return (Math.random());
	}
	static randint(min, max) { // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
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
function print(...args){
	console.log(...args);
}
const True = true;
const False = false;

// https://www.w3schools.com/python/module_math.asp
class math {

	static acos(...args){
		Math.acos(...args);
	}
	static acosh(...args){
		Math.acosh(...args);
	}
	static asin(...args){
		Math.asin(...args);
	}
	static asinh(...args){
		Math.asinh(...args);
	}
	static atan(...args){
		Math.atan(...args);
	}
	static atan2(...args){
		Math.atan2(...args);
	}
	static atanh(...args){
		Math.atanh(...args);
	}
	static ceil(...args){
		Math.ceil(...args);
	}
	static comb(...args){
		Math.comb(...args);
	}
	static copysign(...args){
		Math.copysign(...args);
	}
	static cos(...args){
		Math.cos(...args);
	}
	static cosh(...args){
		Math.cosh(...args);
	}
	static degrees(__x) {
		return __x * (180 / Math.PI);
	}
	static dist(__p, __q) {
		if (__p.length == 1) {
			__p.push(__p[0])
		}
		if (__q.length == 1) {
			__q.push(__p[0])
		}
		let x1 = __p[0];
		let x2 = __q[0];
		let y1 = __p[1];
		let y2 = __q[1];
		return Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2));
	}
	static erf(x) { // https://hewgill.com/picomath/javascript/erf.js.html
		// constants
		var a1 = 0.254829592;
		var a2 = -0.284496736;
		var a3 = 1.421413741;
		var a4 = -1.453152027;
		var a5 = 1.061405429;
		var p = 0.3275911;

		// Save the sign of x
		var sign = 1;
		if (x < 0) {
			sign = -1;
		}
		x = Math.abs(x);

		// A&S formula 7.1.26
		var t = 1.0 / (1.0 + p * x);
		var y = 1.0 - (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * Math.exp(-x * x);

		return sign * y;
	}
	static erfc(x) {
		// Abramowitz and Stegun function 7.1.1
		let a = 1253314137654376;
		let b = -1.135203980240205;
		let c = 1.341267915016756e-3;
		let d = -3.722078785823172e-9;
		let p = 0.254829592;
		let q = 1.135203980240205;
		let t = Math.abs(x);

		let err;
		if (t < 1) {
			err = 1 - t / (p + q * t);
		} else {
			let z = Math.exp(-t * t);
			err = (a + b * t) * z / (1 + c * t + d * t * t);
		}

		return x < 0 ? 1 + 2 * err : 1 - 2 * err;
	}

	static exp(x) {
		return Math.E ** x;
	}
	static expm1(x) {
		return (Math.E ** x) - 1;
	}
	static fabs(__x) {
		return Math.abs(__x) * 1.0;
	}
	static factorial(__x) {
		let out = 1;
		let i = 1;
		for (i; i <= __x; i++) {
			out *= i;
		}
		return out;
	}
	static floor(...args){
		Math.floor(...args);
	}
	static fmod(x, y) {
		return x % y * 1.0
	}
	static frexp(value) { // https://blog.codefrau.net/2014/08/deconstructing-floats-frexp-and-ldexp.html
		if (value === 0) return [value, 0];
		var data = new DataView(new ArrayBuffer(8));
		data.setFloat64(0, value);
		var bits = (data.getUint32(0) >>> 20) & 0x7FF;
		if (bits === 0) { // denormal
			data.setFloat64(0, value * Math.pow(2, 64)); // exp + 64
			bits = ((data.getUint32(0) >>> 20) & 0x7FF) - 64;
		}
		var exponent = bits - 1022;
		var mantissa = ldexp(value, -exponent);
		return [mantissa, exponent];
	}
	static fsum(__x) {
		let total = 0;
		for (let i in __x) {
			total += 1;
		}
		return total;
	}
	static gamma(x) { // https://rosettacode.org/wiki/Gamma_function#JavaScript
		let p = [0.99999999999980993, 676.5203681218851, -1259.1392167224028,
			771.32342877765313, -176.61502916214059, 12.507343278686905,
			-0.13857109526572012, 9.9843695780195716e-6, 1.5056327351493116e-7
		];

		let g = 7;
		if (x < 0.5) {
			return Math.PI / (Math.sin(Math.PI * x) * this.gamma(1 - x));
		}

		x -= 1;
		let a = p[0];
		let t = x + g + 0.5;
		for (let i = 1; i < p.length; i++) {
			a += p[i] / (x + i);
		}

		return Math.sqrt(2 * Math.PI) * Math.pow(t, x + 0.5) * Math.exp(-t) * a;
	}
	static gcd(a, b) {
		while (b != 0) {
			[a, b] = [b, a % b];
		}
		return a;
	}
	static hypot(...args){
		Math.hypot(...args);
	}
	static isClose(a, b, relTol = 1e-9, absTol = 0) {
		// Handle cases where either a or b is NaN
		if (isNaN(a) || isNaN(b)) {
			return false;
		}

		// If both numbers are exactly equal, no further check is needed
		if (a === b) {
			return true;
		}

		// If either number is infinite, check if they are the same sign of infinity
		if (isFinite(a) === false || isFinite(b) === false) {
			return Math.sign(a) === Math.sign(b);
		}

		// Use relative tolerance if provided
		if (relTol > 0) {
			const diff = Math.abs(a - b);
			return diff <= Math.abs(a * relTol) || diff <= absTol;
		}

		// Otherwise, use absolute tolerance
		return Math.abs(a - b) <= absTol;
	}

	static isfinite(__x) {
		return __x != Infinity;
	}
	static isinf(__x) {
		return __x == Infinity;
	}
	static isnan(...args){
		isNaN(...args);
	}

	static isqrt(__x) {
		return Math.floor(__x ** 0.5);
	}
	static ldexp(mantissa, exponent) { // https://blog.codefrau.net/2014/08/deconstructing-floats-frexp-and-ldexp.html
		var steps = Math.min(3, Math.ceil(Math.abs(exponent) / 1023));
		var result = mantissa;
		for (var i = 0; i < steps; i++)
			result *= Math.pow(2, Math.floor((exponent + i) / steps));
		return result;
	}
	static lgamma(__x) {
		let p = [0.99999999999980993, 676.5203681218851, -1259.1392167224028,
			771.32342877765313, -176.61502916214059, 12.507343278686905,
			-0.13857109526572012, 9.9843695780195716e-6, 1.5056327351493116e-7
		];

		let g = 7;
		if (x < 0.5) {
			return Math.PI / (Math.sin(Math.PI * x) * this.gamma(1 - x));
		}

		x -= 1;
		let a = p[0];
		let t = x + g + 0.5;
		for (let i = 1; i < p.length; i++) {
			a += p[i] / (x + i);
		}

		return Math.log(Math.sqrt(2 * Math.PI) * Math.pow(t, x + 0.5) * Math.exp(-t) * a);
	}
	static log(...args){
		Math.log(...args);
	}

	static log10(...args){
		Math.log10(...args);
	}

	static log1p(...args){
		Math.log1p(...args);
	}

	static log2(...args){
		Math.log2(...args);
	}

	static perm(n, r) {
		if (n < r) return -1
		return this.factorial(n) / this.factorial(n - r)
	}
	static pow(x, y) {
		return x ** y;
	}
	static prod(iterable, start = 1) {
		for (let i in iterable) {
			start *= i;
		}
		return start
	}
	static radians(__x) {
		return degrees * (Math.PI / 180);
	}
	static remainder(x, y) {
		// if (y === 0) {
		// 	return x;
		// }
		return y === 0 ? x : ((x % absY) + Math.sign(y) * Math.abs(y)) % Math.abs(y);
		// let sign = Math.sign(y);
		// let absY = Math.abs(y);
		// let remainder = x % absY;
		// return (remainder + sign * absY) % absY;
	}
	static sin(...args){
		Math.sin(...args);
	}
	static sinh(...args){
		Math.sinh(...args);
	}
	static sqrt(__x) {
		return __x ** 0.5;
	}
	static tan(...args){
		Math.tan(...args);
	}
	static tanh(...args){
		Math.tanh(...args);
	}
	static trunc(...args){
		Math.trunc(...args);
	}
}
math.e = 2.718281828459045;
math.pi = 3.141592653589793;
math.tau = 6.283185307179586;
math.inf = Infinity;
math.nan = NaN;
function abs(n){
	return Math.abs(n);
}

function all(iterable){
	return iterable.includes(false)?false:true;
}

function bool(object){
	(object.length==0 || object==false || object === 0 || object == undefined)?false:true;
}
function pow(a,b){
	return a**b;
}
function min(...args){
	if (typeof args[0] == "object"){
		return Math.min(...args[0]);
	} else {
		return Math.min(...args);
	}
}

function max(...args){
	if (typeof args[0] == "object"){
		return Math.max(...args[0]);
	} else {
		return Math.max(...args);
	}
}

String.prototype.capitalize = function (theStr) {
	//let inputs = this;
	let temp = theStr.shift();
	return temp.toUpperCase() + theStr.toLowerCase();
};
// String.prototype.casefold = function (theStr) {
// 	let inputs = this;
// 	return theStr.toLowerCase();
// };

// String.prototype.functionName = function (theStr) {
// 	let inputs = this;
// 	return ;
// };
