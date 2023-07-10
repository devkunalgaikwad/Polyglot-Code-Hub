let p1 = new Promise ((resolve,reject)=>{
    setTimeout(()=>{
        console.log('Resolved after 2 second');
        resolve(65);
    },2000)
})

p1.then((value)=>{
    console.log(value);
    return p2 =new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('Promise is resolved after 5 second');
            console.log('Promise 2 is resolved after 5')
        },5000);
    });
}).then((value)=>{
    console.log('We are done');
    return 2;
});
console.log(p2);
