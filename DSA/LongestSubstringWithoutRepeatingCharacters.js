/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let left = 0;
    let hash = {}
    let maxLen = 0
    for(let right=0;right<s.length;right++){
        if(hash.hasOwnProperty(s[right])){
            left = Math.max(left, hash[s[right]]+1)
        }
        hash[s[right]] = right;
        maxLen = Math.max(maxLen, right-left+1);
    }
    return maxLen;
}