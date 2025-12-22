// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]

function MergeIntervals(intervalsArr){
    let output = []
    intervalsArr.sort((a,b) => a[0] - b[0])
    for(let i=0;i<intervalsArr.length;i++){
        if(output.length == 0 || output[output.length-1][1] < intervalsArr[i][0] ){
            output.push(intervalsArr[i])
        }else{
            output[output.length - 1] = [output[output.length-1][0], Math.max( output[output.length-1][1],  intervalsArr[i][1])];
        }
    }
    return output
}
let intervals = [[1,3],[2,6],[8,10],[15,18]]
MergeIntervals(intervals)