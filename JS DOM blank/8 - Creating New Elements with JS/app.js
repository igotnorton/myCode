const input = document.getElementById("input");
const button = document.getElementById("submit");
const list = document.getElementsByTagName("ul")[0];
const showhide = document.getElementById("showhide-btn");


let array = [];

button.addEventListener("click", () => {
// create new html element, store in memory
let item = document.createElement("li")
// when created element has properties, set
// textContent before we render to screen
item.textContent = input.value
list.appendChild(item);
input.value = "";
});


showhide.addEventListener("click", () => {
  // list.innerHTML = '';
  if (list.style.display == "none") {
    list.style.display = "block";
    showhide.textContent = "hide"
  } else {
    list.style.display = "none";
    showhide.textContent = "show"
  }
  

});



