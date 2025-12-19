const original = {
  name: "Mahima",
  age: 25,
  address: {
    city: "Delhi",
    pincode: 110001
  },

  meta: {
    active: true,
    score: {
        city1: "Delhi",
        pincode1: 110001,
        country : {
            resident: "India",
            visitor: "USA"
        }
    }
  }
};
let finalObj = {}
function flattenObject(obj, prefix){
        for(let key in obj){
            let newKey = prefix ? prefix + "." + key : key;
            if(obj[key] && typeof obj[key] === "object"){
                flattenObject(obj[key], newKey)
            }else{
                finalObj[newKey] = obj[key]
            }
        }
}
flattenObject(original, "")