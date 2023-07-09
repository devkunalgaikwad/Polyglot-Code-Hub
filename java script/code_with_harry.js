console.log('Hello World');

// pratice set 1

let a = 'Harry';
let b = 1;
console.log(a+b);

console.log(typeof a,typeof b);

const k = {
    number: 1
};

k['friend'] = 'Harry';

console.log(k.friend);

 // it is pratice set 

 // to find age between 10 and 20
 let age = parseInt(prompt('Enter age:'))
 console.log('Age ', ((age>=10 && age<=20)? 'is': ' is not'), 'between 10 and 20')
 
 // to use switch command
 let age= parseInt(prompt('Enter your age'));
 switch(true){
     case (age<18):
         console.log('You are under age');
         break;
     case (age>=18 && age<50):
         console.log('You have perfect age');
         break;
     default :
         console.log('You are not fit');
         break;
 }
 
 // to find wheather number is dividable by 2 and 3 
 
 let num = parseInt(prompt('Enter number divisible by 2 and 3'))
 if (num %2 == 0 && num%3 == 0){
     console.log('Your number is divisible 2 and 3')
 } else{
     console.log('Your number is not divisible 2 and 3')
 }
 
 // to get number is divisible 2 or 3
 
 let num1 = parseInt(prompt('Enter number'))
 if (num1 %2 ==0 || num1%3 ==0){
     console.log('Number is divisible by 2 or 3')
 } else{
     console.log('Number is not divisible by 2 or 3')
 }
 
 // to find condition you can drive or not
 let age = 19;
 let a = age >= 18 ? 'You can drive':"You can't drive"
 console.log(a)
 
 function mean(a,b,c,d,e){
    let sum = a+b+c+d+e
    return sum/5
}
// it is pratice set 3
// using for loop print name of student marks

const result = {
    harry : 98,
    rohan : 45,
    kunal :99
}

for (let a in result){
    console.log("Name of student is", a , 'and marks are', result[a])
}

// to create program for getting user input until number is correct

let correct_number = 5;
let i
while(i != 5){
    i = parseInt(prompt('Guess the number between 1 and 10'))
}
console.log('You have enter correct')

// to create fuction to get numbers mean

ans = mean(4,2,5,6,3)
console.log(ans)

//  Pratice set 4

// to get amount from string
let a = 'Please give me Rs 1000'
console.log(a.slice('Please give me Rs '.length))

// to get a result that shows a word is present or not

const sentence = 'The quick brown fox jumps over the lazy dog'
const word = 'fox'
console.log(`The '${word}' ${sentence.includes(word)? 'is' : 'is not'} in the sentence`)

// array are object in javascipt

let array = [12,25,6]
console.log(typeof array,array)

// to convert it into string

let a = array.toString(array)
console.log(a)

// to join elements of object

let c = array.join('and')
console.log(c)

// pop in javascript is same as it is python
// it returns last element of object it is like list
let pop = array.pop()
console.log(pop)

// push is method for adding new element in last of object
let push = array.push('string')
console.log(array)

// shift remove element in first of object
let shift= array.shift()
console.log(array)

// unshift will add the element in last of list
let unshift = array.unshift(45)
console.log(array)

// if we want to delete the elements according to index number then we use delete method
// delete is a operator like typeof, length
// after deletling the element in object then it will be a empty element
delete array[2]
console.log(array)

// to add a object into another object
let num_more = [14,25,36]

let new_array = array.concat(num_more)

// sort method is used to sort object according to alphabetically 
// note that it sort number in form of sting not how the number is big

new_array.sort()
console.log(new_array)

// as sort create problem so there is a way
// first we have to give it user_defined fuction

let sort_aesc = (a,b)=>{
    return a-b
    // it is for aesc to desc a+b
}
console.log(new_array.sort(sort_aesc))

//splice is method where a it add the element from index where we want
// and it also delete the elements
// splice(1,2,45,25,36,14) where 1 it will perform its task form index 1 and delete 2 elements from index 1 and then it will add 45 25 36 14 

new_array.splice(2,2,45,36,25) // if we it feed it into a variable then it will store variable
console.log(new_array)

// to get a part of object then we will use slice method

let slice_obj= new_array.slice(2)
console.log(slice_obj)

let array = [155,23,6,321,45,2663,225]
for (let i = 0; i<(array.length); i++){
    console.log(array[i])
}

// to use for each loop

array.forEach((Element) => {
    console.log(Element*Element)
})

 // map fuction is same as for each but basically difference is for loop perform a task using that array
 // but in map it creates a new array
 
 let a = array.map((value, index,array) =>{
    console.log(value , index)
    return value + index
 })


 // it filter according to condition

 let a2 = array.filter((a) =>{
    return a<10
 })
 console.log(a2)

 // reduce is used to iterate elements of object
 let a3 = array.reduce((e1,e2)=>{return e1+e2})
 console.log(a3)

 // pratice set 5
// to take user input to create a array

let total_number = parseInt(prompt('Enter count of number to create a array'));
let array = [];
for (let i = 0; i < total_number; i++){
    let user_input = prompt('Enter value to add in array')
    array.push(user_input)
};
console.log(array);


// same like above example do until 0 is entered

let array = [];

while (true){
    user_input = parseInt(prompt("Enter your guess after incorrect guess it will add to a array"))
    if (user_input!= 0){
        array.push(user_input)
    } else {
        break;
    }
};
console.log(array);

// for given array filter the elements divided by 10

let array= [14,2,53,5,10,20,45,85];
let filter_array = array.filter((a)=>{
    return a%10
});
console.log(filter_array);

// to create new array square of each element

let square_array = []
for(let a in array){
    let square = array[a]**2
    square_array.push(square)
}
console.log(square_array)

// to create a new array which as factorial of all elements of an array

let factorial_array = array.reduce((h1,h2)=>{
    return h1*h2
});
console.log(factorial_array)

// execrise 1 is about to get user input of number for limited chances of 10. Game structure is like getting input from user until correct guess is entered

for(let i =0; i < 10 ; i++){
    let random_number = Math.floor((Math.random()*100)+1)
    console.log(random_number)
    let user_input = parseInt(prompt('Enter guess in range of 1 and 100'))
    if (user_input==random_number){
        console.log(`Your guess is correct in ${i+1} attempt`)
        break;
    } else {
        console.log(`Your guess is incorrect, you have only ${10-(i+1)} chance left`)
    }
}


