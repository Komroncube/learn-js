const date = new Date()
// console.log(`toDateString ${date.toDateString()}`);
// console.log(`toISOString ${date.toISOString()}`);
// console.log(`toLocaleDateString ${date.toLocaleDateString()}`);
// console.log(`toLocaleString ${date.toLocaleString()}`);
// console.log(`toTimeString ${date.toTimeString()}`);
// console.log(`toJSON ${date.toJSON()}`);
// console.log(`toString ${date.toString()}`);
// console.log(`toUTCString ${date.toUTCString()}`);

console.log();
const dint = new Date(2015)
const dstr = new Date("2015");
console.log(dint.toLocaleString());
console.log(dstr.toLocaleString());

// Z harfini qo'ysa utc vaqt degani
const diso = new Date("2015-03-25T12:00:00Z");
const disoplus = new Date("2015-03-25T12:00:00-05:00")
console.log(diso.toUTCString());
console.log(disoplus.toUTCString());
console.log(diso === disoplus);
let datestr = "JAnUA, 25, 2015";
//local utc bo'yicha ishlayapti
const fullMonth = new Date(datestr);
console.log(fullMonth.toString());
let parsedDate = Date.parse(datestr)
const parseDate = new Date(parsedDate)
console.log(parseDate.toString());
console.log(fullMonth.getFullYear());
console.log(fullMonth.getDay());
console.log(fullMonth.getMonth());


const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const d = new Date("2021-03-25");
// let month = months[d.getMonth()];
// let diff = new Date().getTimezoneOffset();
// console.log(diff);
console.log(d.toString());
d.setUTCFullYear(2023, 6, 90)
console.log(d.toString());

const today = new Date();
const someday = new Date();
someday.setFullYear(2100, 0, 14);

if (someday > today) {
  text = "Today is before January 14, 2100.";
} else {
  text = "Today is after January 14, 2100.";
}
console.log(text);