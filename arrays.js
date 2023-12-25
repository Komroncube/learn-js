var firstArray = ["item1", "item2"]
//console.log(typeof firstArray)
//console.log(firstArray[1])
firstArray[0]=23
//console.log(firstArray)

var numArr=[[1,2,3], [4,5,6], [7,8,9]]
// var data = numArr[1][2]
// console.log(data)
//numArr.push(4,4,4,[3,3,3])
//console.log(numArr)
//console.log(typeof numArr)


//pop oxiridan
//var item = firstArray.pop()
//shift boshidan
var item = firstArray.shift()
// console.log(item)
// console.log(firstArray)

// boshiga qo'shadi
firstArray.unshift("Yangi")
//console.log(firstArray)

const cars = new Array("Saab", "Volvo", "BMW");
//console.log(cars[0])

cars[1] = "Lambo"
//console.log(cars)
//console.log(cars.toString())


// var raqam = [10]
// console.log(raqam)
var numbers = new Array(40)
// console.log(raqam.length)
// console.log(numbers[10])
// console.log(numbers.length)
// var checkArr = Array.isArray(numbers);
// console.log(checkArr)
var res = firstArray.concat(cars)
res.sort()
//console.log(res);
var arr2 = res.concat(firstArray, cars)
//console.log(arr2);
//console.log(arr2.length);
//console.log(JSON.stringify(arr2));
var multiarr = numArr;
multiarr.push([11,111,1111], [45, [32,23, [43, 78, [90,99, 89]]]])
console.log(multiarr);
console.log();
console.log(numArr);
//1ta darajaga tushiradi
var flatted = numArr.flat(5);
console.log(flatted);

// delete flatted[5];
// console.log(flatted);
flatted = flatted.flat();
flatted.sort()
//flatted.forEach()
console.log(flatted);
//flatted.sort(function(a,b){return a-b})
//console.log(flatted);
//kesib beradi
// var sp = flatted.splice(1,3, "Qo", "Yana")
// console.log(sp);
// console.log(flatted);

// var sl = flatted.slice(2,4)
// console.log(sl);
// console.log(flatted);

const sqrtNumber = [49, 4, 9, 16, 25];
//sqrtNumber.forEach(sqrtFunction);
//yangi massiv yaratmaydi
//ichiga kiradiga parametrlar 3ta hammasini ishlatish shart emas
function sqrtFunction(value, index, array) {
  array[index] = Math.sqrt(value)
}
//console.log(sqrtNumber);

//har bir element uchun chaqiriladi
// sqrtNumber.forEach((value,index, array) => 
// {
//     array[index] = Math.sqrt(value)
// })
//sqrtNumber.forEach(showFunction)
function showFunction(value, index)
{
    console.log(`${index+1}: ${value}`);
}

function sortingAlgorithm(arr, start=0, end=arr.length, asc=true)
{
  const slarr = arr.slice(start, end)
  let resarr = []
  if(asc)
  {
    if(!isNaN(parseFloat(arr[0])))
    {
      slarr.sort((a,b)=> a-b)
    }
    else{
      slarr.sort()
    }
  }
  else
  {
    if(!isNaN(parseFloat(arr[0])))
    {
      slarr.sort((a,b)=> b-a)
    }
    else{
      slarr.sort()
      slarr.reverse()
    }
  }
  if (start !== 0) {
    resarr = arr.slice(0, start).concat(slarr);
  } else {
    resarr = slarr;
  }
  if (end !== arr.length) {
    resarr = resarr.concat(arr.slice(end));
  }
  return resarr
  
}
// sorted = sortingAlgorithm(flatted, 3, 9)
// console.log(sorted);



const numbers1 = [45, 4, 9, 16, 25];
//map qilganda yangi massiv yaratadi
// The map() method creates a new array by performing a function on each array element.

// The map() method does not execute the function for array elements without values.

// The map() method does not change the original array.
const numbers2 = numbers1.map(myFunction);
const numbers3 = numbers1.map((x)=> x*3-1);

function myFunction(value,index, array) {
  return value * 2-1;
}
// console.log(numbers2);
// numbers2.showElements()
// Array.prototype.showElements = function() {
//   return Array.prototype.forEach(console.log)
// }

const friends = [
  {name: 'Dave', kids: ['Max', 'Jack']},
  {name: 'Max', kids: ['Sam', 'Alex', 'Megan']},
  {name: 'Jordan', kids: ['Mason', 'Cameron', 'Kaylin']}
];
// const names = friends.map(k=>k.name)
// const kids = friends.flatMap(k=>k.kids)
// console.log(names);
// console.log(kids.join(' | '))
// let allnames = names.concat(kids, [2,4,5,6])
// console.log(allnames);
// let Maxnames = allnames.filter(n=> n==='Max')
// console.log(Maxnames);

let nums = [1,2,3,4,5,6,7,8,9];
let prevval = -10
let sum = nums.reduce((total, value)=> total+value, -100)
console.log(sum);

// let min = nums.reduce((a,b) => Math.min(a,b), Infinity)
// console.log(min);
//console.log(nums.some(x=>x>4));

//console.log(nums.every(x=>x>1));

let findJordan = friends.find(x=> x.name==="Jordan")
let jordanIndex = friends.findIndex(x=> x.name==="Jordan")
//console.log(findJordan);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const f = fruits.entries();

for (let x of f) {
  console.log(x)
}
console.log(fruits.includes("Banana"));

const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

const year = [...q1, ...q2, ...q3, ...q4];
console.log(year.length);