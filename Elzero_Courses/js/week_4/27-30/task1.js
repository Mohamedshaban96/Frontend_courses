let userName = "Elzero";

console.log(userName[0].toLocaleLowerCase()); // e
console.log(userName.charAt(0).toLocaleLowerCase()); // e
console.log(userName.substr(0,1).toLocaleLowerCase()); // e
console.log(userName.slice(0,1).toLocaleLowerCase()); // e
console.log(userName.substring(3,4)); // 
console.log(userName.split("")[3].repeat(3)); // eee

// console.log(userName.slice(-3,-2)); // e
// usuing slice with a negative value to get the result is also valid i guess