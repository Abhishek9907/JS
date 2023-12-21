const marvel_superhero=['ironman','spiderman','captainamerica']
const dc_superhere=['superman','acqaman']
// marvel_superhero.push(dc_superhere)
// console.log(marvel_superhero);
const allHero=marvel_superhero.concat(dc_superhere)
//console.log(allHero);

const all_new_hero=[...allHero,...dc_superhere]
console.log(all_new_hero);