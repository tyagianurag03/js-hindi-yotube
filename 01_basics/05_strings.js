const name = "Anurag"
const repoCount = 50

// Console.log(name + repoCount + "Value");

console.log('Hello my name is ${name} and my repo count is $ {repoCount}');

const gameName = new String('anurag-at')

// console.log(gameName[0]);
// console.log(gameName._proto_);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = " anurag "
console.log(newStringOne);
console.log(newString.trim);

const url = "https://anurag.com/anurag%20tyagi"

console.log(url.replace('%20'));

console.log(url.includes('anurag'));

console.log(gameName.split('-'));







