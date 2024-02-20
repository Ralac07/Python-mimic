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

function type(n){
    return typeof n;
}

function int(n, base=10){
    return parseInt(String(n),base);
}

function float(n){
    return parseFloat(String(n));
}
function str(n){
    return String(n);
}
function len(n){
    return n.length;
}

function range(){
    let start;
    let stop;
    let step;
    if (arguments.length == 1){
        [start,stop,step] = [0,arguments[0],1];
    } else if (arguments.length == 2) {
        [start,stop,step] = [arguments[0],arguments[1],1];
    } else {
        [start,stop,step] = [arguments[0],arguments[1],arguments[2]];
    }
    
    let out = [];
    if (step<0){
        for (let index = start; index > stop; index+=step) {
            out.push(index);
        }
    } else {
        for (let index = start; index < stop; index+=step) {
            out.push(index);
        }
    }
    return out;
}

function round(number,digits){
    return Math.round(number*10**digits)/10**digits;
}

function chr(__i){
    return String.fromCharCode(__i);
}

function ord(__c){
    return __c.charCodeAt(0);
}

