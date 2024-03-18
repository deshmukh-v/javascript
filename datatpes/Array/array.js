//  const myarr=[1,2,3,4,5,6]
//  console.log(myarr);
//  console.log(myarr[2])     //array index start with two

// // ANOTHER TYPE TO DECLARE AN ARRAY
//  const myarr2=new Array(1,2,3,4,"raam","sham");
//  console.log(myarr2[5]);

//  //ARRAY METHODS

//  myarr2.push(5);     //new element are added using push()
//  console.log(myarr2);

//  myarr2.pop();
//  console.log(myarr2);     //remove last value


//  myarr2.shift();        //remove the first element of an array
//  console.log(myarr2);

/////////////////**********SLICE & SPLICE */
 const newarr=[1,2,3,4,5]
console.log("A",newarr);
 const array2=newarr.slice(1,3); //slicing
 console.log("slicing",array2);

 //splicing

 const array3=newarr.splice(1,3);
 console.log("splicing",array3);


