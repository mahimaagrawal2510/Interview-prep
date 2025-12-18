function throttle(cb, delay){
    let lastCalled = 0;
    return function(...args){
        let now = Date.now();
        if(now-lastCalled > delay){
            lastCalled = now
            cb(...args)
        }

    }
}