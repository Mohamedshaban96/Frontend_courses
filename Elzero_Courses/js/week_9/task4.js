function specialMix(...data) {
  let total = 0;
  for (let i = 0; i < data.length; i++) {
    if (isNaN(parseInt(data[i]))) continue;

    total += parseInt(data[i]);
  }
  return `${total || `All Is Strings`}`;
  //return total === 0 ? "All Is Strings" : total;   // better to handle if the sum of the numbers is 0 as the || consider the 0 a falsy vlaue.
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings
