// Dates

// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2025, 0, 18)
// console.log(myCreatedDate.toDateString());

// let myCreatedDate = new Date(2025, 0, 18, 5, 3);
// let myCreatedDate = new Date("2025-01-14");
let myCreatedDate = new Date("9-19-2025");
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getDate());
// console.log(newDate.getDay());
// console.log(newDate.getMonth());

// '{newDate.getDate()} and the time '

newDate.toLocaleString('default', {
    weekday: "long",      
}) // error was shown to this


