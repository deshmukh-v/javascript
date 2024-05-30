
let gameplay =101;

gameplay++;
console.log(gameplay);

let id=Symbol("123");

console.log(id);

console.log(typeof id);

let idNumber=Symbol("123");

console.log(id==idNumber);    // id & idNumber is not a same

// array

const superman=["shaktiman","Spiderman","juniarji"]

console.log(superman);
console.log(typeof superman);

////////////////

let oneobj = {                     // this is object  

   
    name :"vishal",
    age :24,
    edjuction :"BCA",
    
}
console.log(oneobj)
console.log(typeof oneobj);
console.log(oneobj.age)          // call using constructor type
console.log(oneobj["name"]);     // call using object type

oneobj.age=25
console.log(oneobj.age);


//////////////////FUNCTION ///////////////////////

let Inf=function(){                    // this is function
     // name:"Karan",
    //  result:"pass",
    //  mobileno:"9834181427n",

    console.log("Hello World");
}
console.log(Inf);
console.log(typeof Inf);


let Area=function(height,width){
    return height*width;
    
}
console.log(Area(2,9));

///////##########################################################

const F1=function(){
   // age=22,
   // name="vishal",
    console.log("hejdsd")
}
console.log(F1);
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ LOGICS OF FUNCTIONS 

const f2=function(age){
    return age
}
console.log(f2("age="+22))

//333333333333333333333333333333333333333333333333333333333333

const addition=function(a,b){
    return a + b;
}
console.log(addition(20,55));

////////////////////////////

function square(number){
    return number*number;
}
console.log(square(10));

///////////////////////////logical 

let Supercar=function(object){
    object.Mycar= "Toyota" ;
}
let Car = {
    Mycar:"Honda",
    milage:22,
    comapany:"Japan",
    
}
console.log(Car.Mycar);
console.log(Supercar.Mycar)

Supercar(Car);            //function (objectname)
console.log(Car.Mycar);
console.log(Car.milage)

console.log(typeof Car)
console.log(typeof Supercar)