// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);

const bigNumber = 83473726477374565465476n

// Reference Type(Non Primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "Anurag",
    age: 20,
}

const myFunction = function(){
    console.log("Hello World");   
}

console.log(typeof anotherId);


// **************************************************************************************

// Stack(Primitive), Heap (Non-Primitive)

let myYoutubename = "anuragtyagidotcom"

let anothername = myYoutubename
anothername = "chaiorcode"

console.log(anothername);
console.log(myYoutubename);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}


let userTwo = userOne;

userTwo.email = "anurag@google.com"

console.log(userOne.email);
console.log(userTwo.email);
