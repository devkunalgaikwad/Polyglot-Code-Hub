 let promise = new Promise(function(resolve, reject){
    console.log('Hello 0');
    resolve(50);
 });

console.log("Hello 1");
setTimeout(function(){
    console.log('Hello 2');
}, 2000);
console.log('Hello 3');
console.log(promise);

let p = new Promise((resolve,reject)=>{
    console.log('Promise is pending')
    setTimeout(()=>{
        console.log('Promise is rejected')
        reject(new Error('promise p is rejected'))
    },5000)
})

let p2 = new Promise((resolve,reject) => {
    console.log('Promise is pending');
    setTimeout(()=>{
        console.log('P2 is resolved');
        resolve(true);
    },1000);
});
p2.then((value)=>{
    console.log(value);
});
console.log(p);
console.log(p2);

p.catch((error)=>{
    console.log('Some error is occured in p2')
})

