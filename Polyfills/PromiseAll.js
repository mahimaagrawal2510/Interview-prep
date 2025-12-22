function dummyApi(time, status=true){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            status ? res(time) : rej("Failed")
        }, time)
    })
}

const taskArray = [dummyApi(1000), dummyApi(4000), dummyApi(2000), dummyApi(3000)]

function promiseAll(taskArray){
    return new Promise((res, rej) =>{
        const resolvedTasks = [];
        let tasksCompletionCount = 0;
        taskArray.forEach((task, ind) => {
            task.then((resp)=>{
                resolvedTasks[ind] = resp;
                tasksCompletionCount++;
                if(tasksCompletionCount == taskArray.length){
                    res(resolvedTasks)
                }
            }).catch((err)=>rej(err)
            )
        })
    })
}

