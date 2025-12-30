let myString = "EElllzzzzzzzeroo";

// Elzero

let filteredArr = myString.split("").filter((el, ind, arr) => {
      
  return el !== arr[ind + 1];
}).join("");

console.log(filteredArr)
