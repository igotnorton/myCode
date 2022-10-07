const placeholder = document.getElementById("placeholder");
const input = document.getElementById("input");
const button = document.getElementById("submit");
const list = document.getElementById("list");

button.addEventListener("click", () => {
    placeholder.style.color = "goldenrod";
    list.innerHTML = `<li>${input.value}</li>`;
});