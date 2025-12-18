//returns nothing
let arr = [1,2,3,4,5]
arr.forEach(ele => {
    //some action
    console.log(ele)
})

Array.prototype.myForEach = function(cb){
    if(typeof cb !== "function"){
        throw new Error("cb is not a function")
    }
    for(let i=0;i<this.length;i++){
        cb(this[i], i, this)
    }
}
arr.myForEach(ele => {
    //some action
    console.log(ele)
})