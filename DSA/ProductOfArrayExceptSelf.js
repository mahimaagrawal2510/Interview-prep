/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let prod = 1;
    let zeroCount = 0
    nums.forEach(ele => {
        if(ele === 0) zeroCount++
        else prod*=ele
    })
    return nums.map(ele => {
        if(zeroCount == 1){
            return ele == 0 ? prod : 0
        }
        if(zeroCount > 1){
            return 0
        }
        return prod/ele;
    })
};