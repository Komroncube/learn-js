var dog ={
    name: "Bob",
    speed: 39.5,
    color: "red",
    friends:["joey", 'michael'],
    //agar probel bo'lsa qo'shtirnoq ishlatgan yaxshi
    "tail long":'yes'
}
dog.name = "Anthony"
//property qo'shish
dog.bark = 'Woof'

// console.log(dog)
// delete dog.friends
//console.log(dog)
// console.log(dog.color)
// console.log(dog["tail long"])
// console.log(dog["friends"])

var testObj = {
    11: "Eleven",
    12:"Twelve",
    13: "Thirteen"
}
var eleven = 11;
// console.log(testObj[eleven])
// console.log(testObj[12])

function checkObjProperty(checkProp)
{
    if(dog.hasOwnProperty(checkProp))
    {
        return dog[checkProp]
    }
    return "Not found"
}

// console.log(checkObjProperty("color"))
// console.log(dog["friends"])

const ourStorage = {
  "desk": {
    "drawer": "stapler"
  },
  "cabinet": {
    "top drawer": { 
      "folder1": "a file",
      "folder2": "secrets"
    },
    "bottom drawer": "soda"
  }
};
var newStorage = ourStorage;
newStorage.desk.drawer = "pen"
var amazaonStorage = [
    ourStorage, newStorage
]
var folder = ourStorage.cabinet["top drawer"]
//console.log(folder);
console.log(amazaonStorage[0].cabinet);
