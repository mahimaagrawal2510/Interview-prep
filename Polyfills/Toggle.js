function toggle(){
    let state = false
    return function(){
        state = !state
        return state
    }
}