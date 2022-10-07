// querySelector & querySelectAll

// const list = document.getElementsByTagName("li");

const list = document.querySelectorAll("li");


const colors = ['red', 'yellow', 'goldenrod', 'lightgreen', 'blue', 'purple'];


let x = 0;


for (let i = 0; i < list.length; i++) {
  list[i].style.color = colors [x];
  x++;
  if (x == colors.length) {
    x = 0;
  }
}



// list[6].style.color = colors[6]
// list[6].style.color = null




//   for (let z = 0; z < list.length; z++) {
//     if (list[z].className != colors.length) {
//       list[z].style.color = "#9f9";
//     }

// }



// document.querySelectorAll("li");
// document.querySelector("li");
// document.querySelector("#heading");
// document.querySelector(".list-parent");
// document.querySelectorAll(".green");




// if (listItems[z].className == "not-orange") {
// }