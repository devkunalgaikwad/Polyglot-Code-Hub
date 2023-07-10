// array method 
let num = [2,5,6,9,8,5,6,3];
let b= num.toString()
console.log(b)

let join = num.join(',')

let pop = num.pop()

let push = num.push(5)
console.log(push)

let shift = num.shift()
console.log(shift)

let unshift = num.unshift(5);

delete num[1];
console.log(num[1])
num[1] = null;
console.log(num);

console.log()

let compare = (a,b) => {
    return a-b;
};
console.log(num.sort(compare))
console.log()

let slice =num.slice(2,2,963,369,545)
console.log(num)

let string = ['ABC','aBC','Abc','abc','abC']
console.log(string.sort())