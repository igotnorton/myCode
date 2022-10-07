const image = document.getElementById("cat");
const button = document.getElementById("submit");


console.log(image.style);


button.addEventListener("click", () => {
// if (image.style.visibility = "visible") {
//   image.style.visibility = "hidden"
// }
if (image.style.display == "none") {
  image.style.display = "block";
button.textContent = "hide"
} else {
  image.style.display = "none";
  button.textContent = "show"
}


// image.style.display = "none";
})




// for (let vis = visible; vis < image.style.visibility; vis++) {
//   if (movies[2] ==  "Ghostbusters")
//   {console.log(`12. Yay! it's Ghostbusters.`)}
//   else {console.log(`12. Boo! We want Ghostbusters!`)}
//   }








// button.addEventListener("click", () => {
//   if (image.style.visibility = "hidden" ){image.style.visibility = "visible"}

// })