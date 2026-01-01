let div1 = document.querySelector(".one");
let div2 = document.querySelector(".two");

let tempTitle = div1.title
let tempText = div1.textContent

div1.title = div2.title
div2.title = tempTitle

div1.textContent = div2.textContent
div2.textContent = `${tempText} ${div1.attributes.length}`


