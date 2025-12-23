function sayHello(theName, theGender) {
 document.write(`<p>Hello ${theGender == "Male"? "Mr":theGender == "Female"?"Miss":""} ${theName}</p>`)
}





// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"