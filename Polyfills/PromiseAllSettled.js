const dummyApi = (time, status=true) => {
    return new Promise((res,rej) => {
        setTimeout(()=>{
            status ? res(time) : rej("Failed")
        }, time)
        
    })
}

const taskArray = [dummyApi(1000,true), dummyApi(4000, false), dummyApi(2000, false), dummyApi(3000, true)];

const promiseAllSettled = (taskArray) => {
    return new Promise((res, rej)=>{
        let completedTasksList = [];
        let taskCount = 0
        taskArray.forEach((task,ind) => {
            task.then(resp=>{
                completedTasksList[ind] = {status : "fulfilled" , value: resp};
                taskCount++
                if(taskCount == taskArray.length) res(completedTasksList);
                
            }).catch(err => {
                completedTasksList[ind] = {status : "rejected" , reason: err};
                taskCount++
                if(taskCount == taskArray.length) res(completedTasksList)
                
            })
        });
      
    })
}

promiseAllSettled(taskArray).then((res => {
    console.log(res)
})).catch(err => console.log(err))