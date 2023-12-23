function addition(a, b)
{
    console.log(a+b)
}
// addition(1,4)
// addition("1",4)


var myGlobal = 21;
function globalGenerator()
{
    var isLocal = "probably"
}
function typeChecker()
{
    if(myGlobal != 'undefined')
    {
        console.log("global: " + myGlobal)
    }
    if(isLocal != 'undefined')
    {
        console.log("global: " + isLocal)
    }
}
// globalGenerator();
// typeChecker();

const outerVariable = "T-shirt"
function changeOutfit()
{
    var outerVariable = 33;
    //console.log(outerVariable)
    return outerVariable
}
// console.log(changeOutfit())
// console.log(outerVariable)

function nextInLine(arr, item){
    arr.push(item)
    return arr.shift()
}
var arr = [1,2,3,4,5,6]
//Json stringify arr ko'rinishida chiqarib beradi
console.log("Before: " + JSON.stringify(arr))
console.log(nextInLine(arr, 7))
console.log("After: " + arr)
