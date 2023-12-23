function checkScope()
{
    let i = "function scope";
    if(true)
    {
        let i = "block scope"
        console.log("Block scope i is: ", i);
    }
    console.log("Function scope i is: ", i);
}
//checkScope()

function printMessage(str)
{
    const SENTENCE = "freeCodeCamp "
    //SENTENCE+=str
    console.log(SENTENCE);
}
//printMessage("is amazing")

function editInPlace()
{
    const s = [2,4,5]
    s.push('hello')
    console.log(s);
}
//editInPlace()

function freezeObj()
{
    "use strict"
    var Math_variables = {
        PI:3.14
    }
    Object.freeze(Math_variables)
    try{
        Math_variables.PI = 32
    }catch(ex)
    {
        console.log(ex);
    }
    console.log(Math_variables.PI);

}
freezeObj()