
// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

function checkStatus(a, b, c){
    let name,age,availability;
    typeof a == "string"? name = a : typeof a == "number"? age = a : availability = a;
    typeof b == "string"? name = b : typeof b == "number"? age = b : availability = b;
    typeof c == "string"? name = c : typeof c == "number"? age = c : availability = c;

    console.log(`Hello ${name}, Your Age Is ${age}, You Are ${availability == true? "Available":"Not Available"} For Hire`)
}