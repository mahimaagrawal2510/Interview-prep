function debounce(cb, delay){
    let timerId;
    return function(...args){
        if(timerId) clearTimeout(timerId);
        timerId = setTimeout(()=>{
            cb(...args)
        }, delay)
    }
}
function test(){
    console.log("hey")
}
const res = debounce(test, 800);
res()