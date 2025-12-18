//returns new array
let arr = [1,2,3,4,5];
let output = arr.map(ele => {
    return ele*2
})
console.log(output)

Array.prototype.myMap= function(cb){
    let outputArray = [];
    for(let i=0;i<this.length;i++){
        outputArray.push(cb(this[i], i, this))
    }
    return outputArray;
}
let output1 = arr.myMap(ele => {
    return ele*2
})
console.log(output1)