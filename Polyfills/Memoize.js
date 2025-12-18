function memoise(cb){
    let resObj = {}
    return function(...args){
        let key = JSON.stringify(args)
        if(!resObj.hasOwnProperty(key)){
            resObj[key] = cb(...args);
        }
        return resObj[key]
    }
    

}