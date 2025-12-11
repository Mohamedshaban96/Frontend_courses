let start = 0;
let swappedName = "elZerO";
let swapped = "";
// Output
("ELzERo");

for (let i = start; i < swappedName.length; i++) {
  if (swappedName[i] === swappedName[i].toUpperCase()) {
    swapped += swappedName[i].toLowerCase();
  } else {
    swapped += swappedName[i].toUpperCase();
  }
}

console.log(swapped);
