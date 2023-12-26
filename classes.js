class Car{
    constructor (name, year)
    {
        this.name = name,
        this.year = year
    }
    age()
    {
        const date = new Date()
        return date.getFullYear()-this.year
    }
}
const audi = new Car("Audi", 2021)
const ferrari = new Car("Ferrari", 1988)
// console.log(typeof audi);
// console.log(typeof Car);
console.log(`${audi.name} is ${audi.age()} years old`);