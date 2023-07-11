let p2 = new Promise ((resolve,reject)=>{
    console.log('Promise p2');
    setTimeout(()=>{
        console.log('P2 is resolved after 3 second');
        resolve(1);
    },3000);
}).then(()=>{
    setTimeout(()=>{
        console.log('Then clause after 2 second');
    },2000);
    console.log('then clause');
});
