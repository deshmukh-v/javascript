//Object

const Mysymbol=Symbol("deshmukh")

Mydata={
    name:"vishal Deshmukh",
    college:"MGM college",
    city:"Nanded",
    age:20,
    mobileno:9834181510n,

    // Mysymbol:"yghgh"
    [Mysymbol]:"yghgh"             // IMP NOTES===> ALWAYS SYMBOL WRITEN IN SQUAREBRACKET[] I.E KEY

}
console.log(typeof Mydata); 

console.log(Mydata.name);
// console.log(Mydata["age","name","city"]);       //only one can be print

// console.log(Mydata[Mysymbol]);           //Symbol are printed     always sybol print in SQUARE BRACKET []

console.log(Mydata.Mysymbol);
console.log(typeof Mysymbol);