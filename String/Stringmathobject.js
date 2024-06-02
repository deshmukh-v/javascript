
// Math.round() round a number to the nearest integer
let age=10.77
console.log(Math.round(age));

console.log(Math.floor(age));     // Math.floor() floor a number down to the nearest Interger value


// converting String to Number value

let number="20"
let No=Number(number)
console.log(No)
console.log(typeof No)


///

let emark=100
console.log(emark);


let emark1=new String(100)
console.log(emark1.toString)
// console.log(emark1.toFixed(1))//

// math.random()  these method  return value in 0 to 10
// show only 10 to 20 number
const min=10
const max=20

console.log(Math.floor(Math.random()* (max-min+1))+min);      //math.random()