const person = {
    firstName:"John",
    lastName: "Doe",
    age: 22,
    fullName: function() {
        return this.firstName + " " + this.lastName +" " + this.age;
    }
}

const member = {
    firstName:"Hege",
    lastName: "Nilsen",
}
  
let fullBind = person.fullName.bind(member);
let fullCall = person.fullName.call(member)
console.log(fullBind());
console.log(fullCall);

function sayHello()
{
    console.log(`Hello! I'm ${this.firstName} ${this.lastName}`);
}
sayHello.apply(person)