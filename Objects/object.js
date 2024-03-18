const Symbol1=Symbol("keyone");     //Call for Symbol

const obj1={
    name:"vishal",
    number:986889832323232n,
    email:"vishal@gmail.com",

    [Symbol1]: "keyone"        //call for Symbol
}

console.log(obj1);  //call object

console.log(obj1["name"]);     //call using array type
console.log(obj1.number);      //call using Constructor typed

console.log(obj1[Symbol1]);    //call symbol


//value can be changed

obj1.email="sham@233";    
obj1.name="Vishal Deshmukh";   
console.log(obj1);

///////////////////////////////


obj1.greeting=function(){
    console.log(`hello ${this.name}`);
}
console.log(obj1.greeting());

console.log("ddakd");