let arr = [1,2,3,4,5,6,7,8]
let outputArr = arr.filter(ele => {
    return ele%2 == 0
})
console.log(outputArr)
Array.prototype.myFilter = function(cb){
    let outputArr = []
    for(let i=0;i<this.length;i++){
        let methodOut = cb(this[i], i, this);
        if(methodOut){
            outputArr.push(this[i])
        }
       
    }
    return outputArr;
}
let outputArr1 = arr.filter(ele => {
    return ele/2 > 2
})
console.log(outputArr1)