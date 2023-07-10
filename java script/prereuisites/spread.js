const arr = [48,36,14,58,25,59,68,45,78,20]
let obj = {...arr}
console.log(obj)

let obj2 = {
    name : 'Kunal',
    company :'TCS',
    address : 'Banglore'
}

console.log({
    ...obj2,name: 'John',company : 'Capegmini'
})