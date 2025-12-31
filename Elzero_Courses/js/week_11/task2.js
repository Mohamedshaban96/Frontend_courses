let objMethodOne = {
  property: "Method One",
};

console.log(objMethodOne.property); // "Method One"

let objMethodTwo = new Object({ property: "Method Two" });

console.log(objMethodTwo.property); // "Method Two"

let objMethodThree = Object.create(objMethodOne);
objMethodThree.property = "Method Three";

console.log(objMethodThree.property); // "Method Three"

let objMethodFour = Object.assign({}, { property: "Method Four" });

console.log(objMethodFour.property); // "Method Four"




// immportant note :
// This Way is Used To Write An Object Within Object.create , but objects created this way can't be changed 

let objMethodFive = Object.create({},{property:{value:"Method five"}});

console.log(objMethodFive.property)
