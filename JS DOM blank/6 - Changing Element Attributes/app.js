const image = document.getElementById("image");
const input = document.getElementById("input");
const button = document.getElementById("submit");

// const x = document.getElementById("image").src;
// console.log(x);

button.addEventListener("click", () => {
if (input.value != "") {image.scr = input.value;}
});



