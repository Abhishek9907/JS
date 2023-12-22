const marvel_superhero=['ironman','spiderman','captainamerica']
const dc_superhere=['superman','acqaman']
// marvel_superhero.push(dc_superhere)
// console.log(marvel_superhero);
const allHero=marvel_superhero.concat(dc_superhere)
//console.log(allHero);

const all_new_hero=[...allHero,...dc_superhere]
// console.log(all_new_hero);

console.log(Array.isArray("Abhishek"));
console.log(Array.from("Abhishek"));
console.log(Array.from({name:"Abhishek"})); //Intersting

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));

