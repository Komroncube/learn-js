var arr=[]
var i=0
// while(i<5)
// {
//     arr.push(i)
//     i++;
// }
for(var i=8; i<22; i++)
{
    arr.push(i)
}

//bir xil ishlaydi
for(var i=8; i>0; --i)
{
    arr.push(i)
}

do {
    arr.push(i)
}while(i>0)

//console.log(arr);

//massiv summasi rekursiv
function sum(arr, n) {
    // Only change code below this line
    if(n<=0)
    {
      return 0;
    }
    return sum(arr.slice(0, n-1), n-1) + arr[n-1]
    // Only change code above this line
  }

  // Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Only change code below this line
  for (var x =0; x<contacts.length; x++)
  {
    if(contacts[x].firstName === name)
    {
      return contacts[x][prop] || "No such property"
    }
  }
  return "No such contact"
  // Only change code above this line
}

lookUpProfile("Akira", "likes");

// i=1;
// for(;i<contacts.length;i++)
// {
//   console.log(contacts[i]);
// }
let person = contacts[0]
for(let x in person)
{
  console.log(`${x} : ${person[x]}`);
}

//indeks lar bo'yich y
// for(let x in contacts)
// {
//   console.log(x);
// }
for(let x of contacts)
{
  console.log(x);
}
let txt = 'hello'
for (let x of txt)
{
  console.log(x);
}