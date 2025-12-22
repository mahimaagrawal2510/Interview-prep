const dummyApi = (time, status) => {
    return new Promise((res,rej) => {
        setTimeout(()=>{
            status ? res(time) : rej("Failed")
        }, time)
    })
}

const taskArray = [dummyApi(1000, true), dummyApi(4000, false), dummyApi(2000, false), dummyApi(3000,true)];

function promiseAny(taskArray){
    return new Promise((res, rej) => {
        let rejectedTasksCount = 0;
        const tasksList = []
        taskArray.forEach((task, ind) => {
            task.then((resp) => {
                res(resp)
            }).catch((err) => {
                tasksList[ind] = err;
                rejectedTasksCount++;
                if(rejectedTasksCount == taskArray.length){
                    rej(tasksList)
                }
            })
        })
    })
}
promiseAny(taskArray).then(res => {
    console.log(res)
}).catch(err=> {
    console.log(err)
})