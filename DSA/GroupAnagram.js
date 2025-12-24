
var strs = ["eat","tea","tan","ate","nat","bat"]

// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

function GroupAnagram(str){
    let anagramObj = {}
    str.forEach(ele => {
        let sortedStr = ele.split("").sort().join("");
        if(anagramObj[sortedStr]){
            anagramObj[sortedStr].push(ele)
        }else{
            anagramObj[sortedStr] = [ele]
        }
        
        
    })
    return Object.values(anagramObj)
  
}
GroupAnagram(strs)