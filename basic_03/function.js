// function addTwoNumber(a,b){
//     if(typeof a== "number" && typeof b== "number"){
//         return a + b
//     }
//     else{
//         console.log("please provide two number");
        

        
//     }
// }

// console.log(addTwoNumber("2",3));


function SayMyName(){
    console.log("A");
    console.log("S");
    console.log("H");
    console.log("U");
}

// SayMyName()
// SayMyName()


// function addTwonumbers(number1,number2){
// console.log(number1+number2);

// }
//addTwonumbers(23,34)


function addTwoNumber(number1,number2){
    let result = number1+number2
    return result
    
}
let result = addTwoNumber(2,3)
console.log("result:",result);


function userLoggedIn(username){
    if(!username){
        return console.log("Please provide username");
    }
    return `${username} just logged in`

}

console.log(userLoggedIn());
