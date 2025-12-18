function Once(cb){
    let called = false
    return function(...args){
        if(!called){
            called = true
            return cb(...args)
        }
        return null;
    }
}