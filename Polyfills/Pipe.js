function pipe(...fns){
    return function(initialValue){
        return fns.reduce((acc, fn)=>{fn(acc)}, initialValue)
    }
}