let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";


// console.log(word.includes(letterZ)); // True, but the task wants to find capital Z not z
console.log(word.toUpperCase().includes(letterZ.toUpperCase())); // True
console.log(word.startsWith(letterE.toUpperCase())); // True
console.log(word.endsWith(letterO.toLowerCase())); // True