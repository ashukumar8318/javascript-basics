const tinder = new Object();

tinder.id =1;
tinder.name = "Ashu";
tinder.age = 25;
tinder.isloggedIn = false;


console.log(tinder);



obj1 = {1 : "Ashu", 2: "Kumar"}
obj2 = {3 : "Anirudh ", 4: "kumar"}

obj3 = {...obj1,...obj2}

console.log(obj3);



const keys = Object.keys(obj3)
const values = Object.values(obj3)
console.log(keys);
console.log(values);



const course = {
    name :"Javascript",
    price : 299,
    ispaid : true

}


const {name: laungage } = course 
//you can call like this also  
//console.log(name);

// if u assigned diffrent name then u can call  like this also
console.log(laungage);
