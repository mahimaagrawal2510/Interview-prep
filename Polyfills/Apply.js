const person1 = {name: "Akash"};
const person2 = {name: "Raj"};
function greetPerson(age, emotion){
    console.log(`${this.name} is ${age} years old and ${emotion}`)
}
greetPerson.apply(person1, [45, "happy"]);
Function.prototype.myApply = function(obj={}, args){
    if(typeof this !== "function"){
        throw new Error("not a function")
    }
    obj.fn = this;
    obj.fn(...args)
}
greetPerson.myApply(person2, [44, "happy"]);