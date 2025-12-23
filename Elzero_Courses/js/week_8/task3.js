function ageInTime(theAge) {
  if (theAge < 10 || theAge > 100) {
    console.log("Age Out Of Range");
    return;
  }
  console.log(`You are ${theAge} years old`)
  console.log(`You are ${theAge * 12} months old`)
  console.log(`You are ${theAge * 52 } weeks old old`)
  console.log(`You are ${theAge * 365} days old`)
  console.log(`You are ${theAge * 365 * 12} hours old`)
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months
