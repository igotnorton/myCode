const myHeading = document.getElementById("heading");
const myInput = document.getElementById("input");
const myButton = document.getElementById("button");

myButton.addEventListener("click", () => {
  myHeading.style.color = myInput.value;

});
