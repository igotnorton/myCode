// let num = 10;

// function example (num1 = 10, num2 = 5, num3) {
//   return num1 + num2;
// }

// let array = [1,2,3,4,5,6,7,8];

// // function example (username, password) {
// //   value +=1;
// // }

// for (let i = 0; i < array.length; i++) {
//   array[i];
//   // array[0];
//   // array[1];
//   // array[2];
//   // array[3];
// }


// //hardcoded
//   // array[0];
//   // array[1];
//   // array[2];
//   // array[3];
//   // array[4];
//   // array[5];
//   // array[6];
//   // array[7];

// example("jordan", "password1")

// onclick="example({username}, {password})"

// function example (num1, num2) {
//   num1 +=1;
//   num2 +=7;
//   example2(num1, num2);
// }

// function example2 (num1, num2) {

// }

// example(10, 5);

let packofCards = ["club_ace", "club_2", "club_3",
"club_4", "club_5", "club_6", "club_7", "club_8",
"club_9", "club_10", "club_jack", "club_queen", "club_king",
"spade_ace", "spade_2", "spade_3",
"spade_4", "spade_5", "spade_6", "spade_7", "spade_8",
"spade_9", "spade_10", "spade_jack", "spade_queen", "spade_king"]

// for (let i = 0; i < 1000; i++)

let drawnCards = []


// for (let i = 0; i < 52; i++) {

while (drawnCards.length < 26) {
let selectedCard =  Math.floor(Math.random() * packofCards.length);
let card = packofCards[selectedCard];

if (selectedCard != 26 && !drawnCards.includes(card)) {

// drawnCards.push(packofCards[selectedCard])

drawnCards.push(card)

// console.log(packofCards[selectedCard]);

// console.log(drawnCards)

console.log(card)
console.log(drawnCards)

}

// else {
//   console.log("ok")
// }

}

