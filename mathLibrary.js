console.log(Math.SQRT1_2)
console.log(Math.SQRT2);

//butun qismini olib beradi
console.log(Math.trunc(Math.SQRT2));
console.log(Math.sign(-4));
console.log(Math.pow(3,2.5));
console.log(Math.sin(30*Math.PI/180));
console.log(Math.cos(0 * Math.PI / 180));
console.log(Math.LOG2E);
console.log(Math.log2(Math.E));
function getRandom(min, max)
{
    //return number between a and b inclusive
    return Math.floor(Math.random() * (max-min+1)) + min;
}
for (let i = 0; i<100; i++)
{
    let x = getRandom(10,20)
    if(x>20 || x<10)
    {
        console.log(`bug: ${x}`);
    }
}