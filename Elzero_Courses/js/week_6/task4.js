let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];



console.log(words[website.length][0].slice(website.length).toUpperCase()); // ZERO

// also valid
// console.log(words.pop().shift().toUpperCase().slice(website.length)); // ZERO 