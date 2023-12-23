function wasGreaterThanNumber(a, b)
{
    if(a>=b)
    {
        console.log(a + " was bigger than " + b)
    }
    else if(a<=b)
    {
        console.log(a + " was less than " + b)
    }
    else{
        console.log("they are equal")
    }
}

function isPositiveAndDividableTo5(a)
{
    if(a>0 && a%5==0)
        return "yes"
    return "no"
}
//wasGreaterThanNumber(3,'3')
console.log(isPositiveAndDividableTo5(10))
console.log(isPositiveAndDividableTo5(-10))
console.log(isPositiveAndDividableTo5(11))
console.log(isPositiveAndDividableTo5(1))
