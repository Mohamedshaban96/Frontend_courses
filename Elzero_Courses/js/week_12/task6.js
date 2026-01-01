const elNumber = document.querySelector("[type = number]");
const elText = document.querySelector("[type = text]");
const creatbutton = document.querySelector("[type = submit]");
const displayArea = document.querySelector(".results");
const elType = document.querySelector("select");

creatbutton.addEventListener("click", (e) => {
  e.preventDefault();
  displayArea.textContent = "";

  for (let i = 0; i < elNumber.value; i++) {
    let el = document.createElement(elType.value.toLowerCase());
    el.id = `id-${i + 1}`;
    el.setAttribute("title", "element");
    el.classList.add("box");
    el.textContent = elText.value
    el.style = "border: solid 2px black; background: red; padding: 10px; border-radius: 10px; display: flex "
    displayArea.append(el);
  }
});


// it is better to validate the form not the button form.addEventListner("submit") this will also work with the enter key 

// using element.style.property = ""  is better than element.style and element.cssText but using classList is the best to achieve the seperate of concerns method