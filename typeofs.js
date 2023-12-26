const fruits = ["Banana", "Orange", "Apple"];
console.log(fruits.constructor === Array);
console.log(Number("3.14"));
var y = '70'
let x = y
let z = - y
console.log(typeof x);
console.log(typeof z);
var d = new Date(2034, 1,1)
console.log(d);

var str1 = new String(z)
var str2 = z.toString()
//console.log(str1==str2);
//console.log(str1===str2);

var num = Number(d)
var get = d.getTime()
console.log(num ===get);
