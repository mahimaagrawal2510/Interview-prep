const person1 = {name: "Raj"}
const person2 = {name: "Aryan"}
function greet(age, emotion){
    console.log(`${this.name} is ${age} years old and is ${emotion}`)
}
const user = greet.bind(person2, 23);
user( "happy");
Function.prototype.myBind= function(obj={}, ...args1){
    if(typeof this !== "function") throw new Error("not a function")
    obj.fn = this;
    return function(...args2){
        obj.fn(...args1, ...args2)
    }
}
const user1 = greet.myBind(person1, 23);
user1( "happy");