////date/////  MONTH START WITH O ZERO
/*
let myDate=new Date()
console.log(myDate);
console.log(myDate.toString())
console.log(myDate.toLocaleString())
console.log(myDate.getMonth())

console.log(typeof myDate)        //objecct its imp

*/

let toDate=new Date(2024,0,23);    //MONTH START WITH 0
console.log(toDate.toDateString());

//console.log(toDate.floor(toDate.now()+1000));

let newDate=new Date();
console.log(newDate);
console.log(newDate.getMonth()+1);