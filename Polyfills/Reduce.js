let arr = [1,2,3,4,5];
let outputVal = arr.reduce((acc,ele) => {
    return acc+ele
}, 0)
console.log(outputVal)
Array.prototype.myReduce = function(cb, acc){
    let outputAcc=acc || 0;
    for(let i=0;i<this.length;i++){
        outputAcc = cb(outputAcc, this[i], i, this)
    }
    return outputAcc;

}
let outputVal1 = arr.myReduce((acc,ele) => {
    return acc+ele
}, 0)
console.log(outputVal1)