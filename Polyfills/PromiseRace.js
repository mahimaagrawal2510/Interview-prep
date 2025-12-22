const dummyApi = (time, status) => {
    return new Promise((res, rej) =>{
        setTimeout(()=>{
            status ? res(time) : rej("Failed")
        }, time)
    })
}

const taskArray = [dummyApi(1000, true), dummyApi(1000, false), dummyApi(1000, true), dummyApi(1000, false)];

const promiseRace = (taskArray) => {
    return new Promise((res, rej)=>{
        taskArray.forEach((task, i) => {
            task.then((resp)=>{
                res(resp)
            }).catch((err) => {
                rej(err)
            })
        })
    })
}
promiseRace(taskArray).then(res=>{console.log(res)}).catch(err=>console.log(err))