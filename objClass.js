const contact = {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    socialStatus : {likes:23, dislikes:38}
}
//"use strict"
//destructor
const {firstName: ism} = contact
console.log(ism);

const {lastName: familiya, socialStatus : {likes: like }, socialStatus: {dislikes: dislike}} = contact
//console.log(like,dislike, familiya);

let a = 3, b = 49;
[a,b] = [b,a] 
console.log(a,b);
const source = [1,2,3,4,5,6,7,8,9]
function removeElements(list)
{
    const [, b, ...arr] = list
    console.log(b);
    console.log(arr);
}
//removeElements(source)

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

const half = (function() {
    return function half({min, max}){
        return (min+max)/2.0;
    };
})();
// console.log(stats)
//console.log(half(stats));
const createStupidPerson =(name, age, gender)=>{
    return {
        name: name,
        age: age,
        gender: gender
    }
}
const createPerson = (name, age, gender)=>({name, age, gender})
const stupid = createStupidPerson("BOB", 53, "male")
console.log(stupid);
const user = createPerson("Natasha", 23, 'female')
console.log(user);

const person = { 
    name: 'Natasha', 
    age: 23, 
    gender: 'female',
    //aqlliroq usuli
    saySomething(smth) {
        "use strict"
        return `Hello ${smth}`
    },
    sayHello: function(){
        return `Hello I'm ${this.name}`
    }
}
console.log(person.sayHello());

class Vegetable{
    constructor(name) {
        this.name = name
        this._color = ''
    }
    get color(){
        return this._color
    }
    set color(newcolor){
        this._color = newcolor
    }
    

}
const carrot = new Vegetable('carrot')
carrot.color = "orange"
console.log(carrot);