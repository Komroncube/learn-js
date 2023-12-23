// "use strict";
function randomIntegerLessThanx(x)
{
    return Math.floor(Math.random()* x)
}
for(var i = 0; i<100; i++)
{
    var son = randomIntegerLessThanx(20)
    //console.log(son);

}
function randomRange(min, max)
{
    return Math.floor(Math.random() * (max-min+1)) + min
}
var range = randomRange(5, 10)
console.log(range);

var parsedNum = parseInt("39",10)
var binar = parseInt('1010100101001', 2)
console.log(parsedNum);
console.log(binar);

var strnum = '1010101110'
var oct = strnum.toString(2)
console.log(oct);

function checkNumber(n)
{
    return n>0 ? "positive" : n<0 ? "negative" : 'zero'
}
console.log(checkNumber(10));
//agar e'lon qilinmasa use strict xatolik beradi
hello = "baby"
console.log(hello);