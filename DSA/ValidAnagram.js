let s = "anagram", t = "nagaram";
function validAnagram(s, t){
    if(s.length !== t.length) return false
    let hash = {}
    for(let i=0;i<s.length;i++){
        hash[s[i]] = hash.hasOwnProperty(s[i]) ? hash[s[i]] + 1 : 1
    }
    for(let i=0;i<t.length;i++){
        if(!hash.hasOwnProperty(t[i])){
            return false
        }
        hash[t[i]]-=1
        if(hash[t[i]] <= 0){
            return false
        }
    }
    return true
}
validAnagram(s, t)