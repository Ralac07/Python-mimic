const ogjoin = Array.prototype.join;
String.prototype.join = function(del) {
    return join.call(del); 
};