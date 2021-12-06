//Question 1:
function sum(arr){
    let filtered = arr.filter(n => n > 20);
    let result = filtered.reduce((accum, num) => accum + num);
    return result;
}

//Question2:
const getNewArray = function(arr){
   return arr.filter(s=> s.length >= 5 && s.includes('a'))
}



let a = [11,23,32,4,5,21];
let result1 = sum(a);

let str = ['apples', 'animal', 'welcome', 'rainbow', 'universe'];
let result2 = getNewArray(str);

alert('1.Sum= ' + result1 +'\n2.NewArray= ['+ result2 +']');

