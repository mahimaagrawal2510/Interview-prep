let input = [1,2,[89, 78], [6], [5,8,2,[90,56,[89]]]]
function flattenArray(arr){
    if(Array.isArray(arr)){
        arr.forEach(ele =>{
            flattenArray(ele)
        })
    }else{
        finalObj.push(arr)
    }
}
let finalObj = []
flattenArray(input)
console.log(finalObj)