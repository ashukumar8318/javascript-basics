const marvel_heroes = ["Thor","Iron","Captain America"]

const dc_heroes = ["Batman","superman","wonder"]


// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);

// const All_heroes = marvel_heroes.concat(dc_heroes)
// console.log(All_heroes);

const all_new_heroes = [...marvel_heroes,...dc_heroes]

console.log(all_new_heroes);

const another_array =[1,2,3,[3,7,9],8,9,[3,7,5,4],[8,6,8,[2,5,7]]]
console.log(another_array);

console.log(another_array.flat(Infinity));


console.log( Array.isArray("ashu"));
console.log(Array.from("Ashu"));

let score1 =100.
let score2= 200
let score3=300

console.log(Array.of(score1,score2,score3));





