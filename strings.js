var first = "First main string" + ' Second main string'
first += ` \nYana qo'shimcha string`
console.log(first)
console.log(first.length)
console.log(first[first.length-1])


function combineWords(words)
{
    var result =""
    for(let x in words)
    {
        result += words[x]+" "
        //console.log(result)
    }
    return result
}
var inter = "interpolyatsiya"
var text = `bu yerda ${inter} bor: ${first}`
console.log(text);
console.log(combineWords(["hello", "world", "i", 'am', "Super", "Tayson"]))
// console.log(combineWords(["hello", "world", "i", 'am', "\rSuper", "Tayson"]))