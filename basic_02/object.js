const mysymbol = Symbol("key1")


const myobj = {
    name  : "Ashu",
    fullname :"ashu kumar",
    [mysymbol]:"key1",
   
    age : 24,
    location : "varanasi",
    isloogedin : false,
    lastloggedin :["Monday","saturday"]
}

// console.log(myobj.lastloggedin);
// console.log(myobj["full name"]);
// //console.log(typeof myobj.mysymbol);
// console.log( myobj[mysymbol]);
// console.log(myobj);

// myobj.age = 28

// // Object.freeze(myobj)

// // myobj.age = 30

// console.log(myobj);

myobj.greeting = function(){
    console.log(`hello my name is ${this.fullname} and my age is ${this.age}`);
    
}

console.log(myobj.greeting());






