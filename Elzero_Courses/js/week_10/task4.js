let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

// [-1, -10, 10, 20, -5, -3]

let finArr = numsAndStrings.filter((el)=> typeof el ===  "number").map((el)=> -el)

// this also works
// let newArr = numsAndStrings.filter((el) => !isNaN(parseInt(el))).map((el) => -el);


console.log(finArr)