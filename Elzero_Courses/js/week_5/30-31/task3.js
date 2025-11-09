let a = 20;
let b = 30;
let c = 10;

console.log(a < b && a > c || a == b); // true
console.log(a < b && a > c); // true

console.log(!(a > b) && !(a > b) && !(a < c) && !(a < c)); // true



/*
🧠 LOGICAL OPERATORS QUICK GUIDE

|| (OR)
- Returns the FIRST truthy value
- If all are falsy → returns the LAST value
Examples:
  false || "Hello"   → "Hello"
  "Hi" || false      → "Hi"
  0 || ""            → ""

&& (AND)
- Returns the FIRST falsy value
- If all are truthy → returns the LAST value
Examples:
  true && "Hi"       → "Hi"
  false && "Hi"      → false
  "Hi" && 0          → 0

NOTES:
- Logical operators return one of the ORIGINAL values, not just true/false.
- A non-empty string is truthy.
- 0, "", null, undefined, NaN, and false are falsy.
*/


/*
⚠️ CHAINED COMPARISON TRAP IN JS

JavaScript does NOT support math-style chained comparisons.
Each comparison is evaluated separately from left to right.

Example:
  let a = 5, b = 10, c = 2;
  console.log(a < b > a > c); // false

Step-by-step:
  1️⃣ a < b → 5 < 10 → true
  2️⃣ true > a → 1 > 5 → false   (true becomes 1)
  3️⃣ false > c → 0 > 2 → false  (false becomes 0)

✅ Use logical operators instead:
  console.log(a < b && a > c); // true

NOTES:
- Booleans convert to numbers in comparisons:
    true  → 1
    false → 0
- Comparisons are evaluated left-to-right, not chained like math.
*/
