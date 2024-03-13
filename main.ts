class random {
    static random():number {
        return (Math.random());
    }
    static randint(a:number, b:number):number {
        return (Math.ceil(Math.random() * ((b - a) + 1)) + a - 1);
    }
    static choice(arr:Array<any>):any {
        return (arr[Math.ceil(Math.random() * arr.length) - 1]);
    }
    static shuffle(arr:Array<any>|string):Array<any>|String {
        let wasString:Boolean = false;
        let len:number = arr.length;
        if (typeof (arr) == 'string') {
            arr = arr.split('');
            wasString = true;
        }
        let newArr:Array<any> = [];
        for (let i = 0; i < len; i++) {
            newArr.push(arr.splice(Math.ceil(Math.random() * arr.length) - 1, 1)[0]);
        }
        return (wasString ? newArr.join('') : newArr);
    }
}

function type(n:any){
    return typeof n;
}

function int(n:string|number, base:number=10){
    return parseInt(String(n),base);
}

function float(n:string|number){
    return parseFloat(String(n));
}

function str(n:any){
    return String(n);
}

function len(n:any){
    return n.length;
}
function range(...inputs:any){
    let start;
    let stop;
    let step;
    if (inputs.length == 1){
        [start,stop,step] = [0,inputs[0],1];
    } else if (inputs.length == 2) {
        [start,stop,step] = [inputs[0],inputs[1],1];
    } else {
        [start,stop,step] = [inputs[0],inputs[1],inputs[2]];
    }
    let out:Array<number> = [];
    if (step>0){
        for (let index = start; index < stop; index+=step) {
            out.push(index);
        }
    } else {
        for (let index = stop; index > start; index-=step) {
            out.push(index);
        }
    }
    return out;
}

function round(number:number,digits:number):number{
    return Math.round(number*10**digits)/10**digits;
}

function chr(__i:number):string{
    return String.fromCharCode(__i);
}

function ord(__c:string):number{
    return __c.charCodeAt(0);
}
interface String {
	join(arr:Array<any>): string;
}
String.prototype.join = function(arr) {
    return arr.join(this); 
};
function print(...inputs){
    console.log(inputs);
}