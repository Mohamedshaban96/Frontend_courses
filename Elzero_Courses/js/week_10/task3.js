let myArray = ["E", "l", "z", ["e", "r"], "o"];

// Elzero

let newArr = myArray.join().split(",").reduce((acc, curr) =>`${acc}${curr}`)



// this method is also works unless the array start with an array cause it depends on checking on the curr not the acc so if the acc was an array it will fail. but it can be fixed by giving the acc an initial value = "" 

// let myNeArr = myArray.reduce(function (acc, curr) {
//   return Array.isArray(curr) ? `${acc}${curr.join("")}` : `${acc}${curr}`;
// }, ===>put the initial value here<=== );

console.log(newArr)
