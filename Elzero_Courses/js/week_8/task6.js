multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000

function multiply(...numb) {
  let total = 1;
  for (let i = 0; i < numb.length; i++) {
    if (typeof numb[i] !== "number" ) continue;
    total *= parseInt(numb[i])
  }
  console.log(total)
}

