/*
const Myarr=[1,2,3,4,5]
console.log(Myarr)


const Myarr2=["vishal","sham","Ram"]
console.log(Myarr2)


const Myarr3=new Array(1,2,3,3)
console.log(Myarr3)

*/

//  Array methods

/*
const Myarr=[1,2,3,4,5]



Myarr.push(9)                      //1> push()   add the element using array
Myarr.push("addvalue")

Myarr.pop()                        //2> pop()    remove last index of an array

Myarr.unshift("unshift")          //3> unshift()  add one indext at the starting of an array

Myarr.shift()                     //4> shift()   delete starting index of an array

console.log(Myarr.indexOf(3))     //4> indexOf   indext position

console.log(Myarr.includes(19))    // include()  present nomber of an  array (true/false) 

console.log(Myarr)

*/

let Myarr=[0,1,2,3,4,5]

console.log("A" ,Myarr)

let NewArr= Myarr.slice(1,4)        //slice of element last index of slice is remove
console.log("B",Myarr)

console.log(NewArr);

let Newone=Myarr.splice(1,3)        //splice of element ======>IMP >>>>>  change the array (all the element print dueto outoff splice range)
console.log("C ",Myarr)