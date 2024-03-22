String.prototype.lstrip = function (chars=" \r\n\t    "){
    let theStr = this;
    let output = theStr;
    for (const [index, element] of theStr.split('').entries()) {
        if (chars.split("").includes(element)){
            output[index] = " ";
            output = output.split("");
            output[index] = " ";
            output = output.join("");
        } else {
            break;
        }
        theStr = output.trimStart();
    }
    return theStr;
}


console.log("\n   hello   \n".lstrip()+"#");