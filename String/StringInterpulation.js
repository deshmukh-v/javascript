//These concept is called as String Interpulation sysnatax is ${ } using in backtic ` `
//////////   MANY() IN STRING ///////////////////////////// 
const name="vishal";
const collegeName="mgm college Nanded";

console.log(`Hello my Name is ${name} and i am studying from ${collegeName}`);  //String Interpulation new tecnics

console.log("Hello "+ name + "  "+ "and I am studing from "+collegeName);  //old techmics

const ToName=new String("vishal");        //create a object
console.log(ToName)

console.log(typeof ToName);

console.log(ToName[1]);                //index start with 0
console.log(ToName. __proto__);        //prototype
console.log(ToName.charAt(3));          //Index start with 0
console.log(ToName.length);
console.log(ToName.toUpperCase());
console.log(ToName.substring(0 ,4));

const Name=ToName.substring(0,3);
console.log(Name);

const Name1=ToName.slice(-2,5);        //slicing negative value also be included
console.log(Name1);
 /////////////////////////TRIM ARE USED TO REMOVING A SPACE ////////////////////////////////////////
const Name2="     deshmukh   "; 
console.log(Name2);                 //space occupied
console.log(Name2.trim());           //using trim()

///////////////////replace()//////////////////////

const FullName=" vishal pranita ravindra deshmukh  ";
console.log(FullName);

console.log(FullName.replace('pranita','shubham'));       // replace a name