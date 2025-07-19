const mysymbol = Symbol("key1")


const myobj = {
    name  : "Ashu",
    "full name":"ashu kumar",
    [mysymbol]:"key1",
   
    age : 24,
    location : "varanasi",
    isloogedin : false,
    lastloggedin :["Monday","saturday"]
}

console.log(myobj.lastloggedin);
console.log(myobj["full name"]);
//console.log(typeof myobj.mysymbol);
console.log( myobj[mysymbol]);



