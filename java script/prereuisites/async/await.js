async function harry(){
    console.log("Welcome to Weather forcasting");
    let pune_weather = new Promise ((resolve,reject)=>{
        console.log('Weather is fetching of Pune');
        setTimeout(()=>{
            resolve('27 deg');
        },2000);
    }).then('Exuted_1');
    let mumbai_weather = new Promise((resolve,reject)=>{
        console.log('Weather is fetching of Mumbai');
        setTimeout(()=>{
            resolve('35 deg');
        },5000);
    }).then('Exuted_2');
    let promise_all = Promise.all([pune_weather,mumbai_weather]).then((value)=>{
        console.log(value);
    }).catch(console.warn("ERR is occured in promise_all"));
    return pune_weather,mumbai_weather
    
}
const cherry =async ()=>{
    console.log('Cherry is excuted');
    return "Ok done"
}

const main_1 = async ()=>{
    harry();
    cherry();
}
main_1();