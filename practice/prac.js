const promise = new Promise((resolve,reject)=>{
    console.log('hello1');
    resolve(2);
    console.log('hello2');

});
//console.log(promise);
let a = promise.then(data=> data * 2)
  // console.log(data);
    
.then(data=>{
    console.log(data)
});
// console.log(a);

// async function foo(){
//     console.log(1);
//     return 1;
// }
// console.log(foo());