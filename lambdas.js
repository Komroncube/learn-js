var magic = () => new Date()
console.log(magic());
var myConcat = (arr1, arr2) => arr1.concat(arr2)
//console.log(myConcat([1], [2,4]));

const increment = (number, value =1)=> number+value
console.log(increment(4,5));

const sum =function(){
    return function sum(...args){
        return args.reduce((a,b) => a+b, 0)
    };
}();
console.log(sum(1,2,3,4,5));

const arr1 = [1,2,3,4,5]
let arr2
//nusxa olmayapti
//arr2 = arr1


//ichidagilarni olib beradi
//spread operator
arr2 = [...arr1]
arr1[0] = 'potato'
console.log(arr2);