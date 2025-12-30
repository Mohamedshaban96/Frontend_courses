let nums = [2, 12, 11, 5, 10, 1, 99];

// 500

let number = nums.reduce(function (acc,curr){
    return curr % 2 === 0 ? acc * curr : curr + acc
},1)

console.log(number)