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
multiarr.push([11,111,1111], [45, [32,23]])
console.log(multiarr);
//1ta darajaga tushiradi
var flatted = numArr.flat();
console.log(flatted);

// delete flatted[5];
 console.log(flatted);
flatted = flatted.flat();
flatted.sort()
//flatted.forEach()
console.log(flatted);
flatted.sort(function(a,b){return a-b})
console.log(flatted);
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
console.log(sqrtNumber);
sqrtNumber.forEach((value,index, array) => 
{
    array[index] = Math.sqrt(value)
})
sqrtNumber.forEach(showFunction)
function showFunction(value, index)
{
    console.log(`${index+1}: ${value}`);
}