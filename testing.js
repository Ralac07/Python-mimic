const ogjoin = Array.prototype.join;
String.prototype.join = function(del) {
    return del.join(this); 
};
//* JS: Array.join(String)
//* PY: String.join(Array)

console.log("@".join(['a','b','c']))