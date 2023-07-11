let p_all_1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log('This set timer of p1');
        resolve('value1');
    },1000);
});

let p_all_2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log('This set timer of p2');
        resolve('value2');
    },2000);
});

let p_all_3 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log('This set timer of p3');
        resolve('value3');
    },3000);
});

p_all_1.then((value)=>{
    console.log(value);
});

p_all_2.then((value)=>{
    console.log(value);
});

p_all_3.then((value)=>{
    console.log(value);
});

// let promise_all = Promise.all([p_all_1,p_all_2,p_all_3]);
// promise_all.then((value)=>{
//     console.log(value);
// }).catch(()=>{
//     console.warn("Error is occured")
// });

// let promise_settle = Promise.allSettled([p_all_1,p_all_2,p_all_3]).then((value)=>{
//     console.log(value);
// });

let promise_raise = Promise.race([p_all_1,p_all_2,p_all_3]).then((value)=>{
    console.log(value);
})

let promise_any = Promise.resolve([p_all_1,p_all_2,p_all_3])