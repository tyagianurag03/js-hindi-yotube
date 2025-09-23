// singleton

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name:"Anurag",
    "full name": "Anurag Tyagi",
    mySym: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "anurag@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "Anurag@yahoo.com"
Object.freeze(JsUser)
JsUser.email = "Anurag@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user")
}

JsUser.greetingTwo = function(){
    console.log('Hello JS user,${this.name}')
}

console.log(JsUser.greeting)
console.log(JsUser.greetingTwo())
