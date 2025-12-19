const original = {
  name: "Mahima",
  age: 25,
  address: {
    city: "Delhi",
    pincode: 110001
  },
  skills: ["JS", "React"],
  meta: {
    active: true,
    score: null
  }
};
function deepCopyObject(val){
    
    if(val === null || typeof val !== "object"){
        return val;
    }
    if(Array.isArray(val)){
        return val.map(ele => deepCopyObject(ele))
    }
    let finalObj = {};
    Object.entries(val).forEach(ele =>{
        finalObj[ele[0]] = deepCopyObject(ele[1]);
    })
    
    return finalObj
}
deepCopyObject(original)