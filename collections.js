const letters = new Set();

// Add Values to the Set
letters.add("a");
letters.add("b");
letters.add("c");
letters.add("c");
console.log(letters);

for (const x of letters.values()) {
    console.log(x);
}
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200],
  [23, 90]
]);
//let price = fruits.get("apples")
fruits.set("peach", 400)

fruits.delete("oranges")
console.log(fruits);
console.log(fruits.size);
console.log(fruits.has('bananas'));
console.log(fruits.has(23));
fruits.forEach((key, value)=> {
    console.log(`key: ${key}, value:${value}`);
})
for(const x of fruits.entries())
{
    
}