// let globalVar = "globalVar";

// console.log(`Global Scope ${globalVar}`);
// //output: global scope: globalvar

// const callVar = () => {
// console.log (`Inside function: ${globalVar}`);
// //output: Inside function: globalVar
// }

// callVar()

console.log('')
console.log('')

let globalVar2 = "globalVar";
console.log(`Global Scope: ${globalVar2}`);

const callVar2 = () => {
let localVar2 = "localVar2";
// return localVar2;
console.log(`Inside function: ${globalVar2}`);
console.log(`Inside function: ${localVar2}`);
}

callVar2();
// console.log(`Global Scope with local variable ${localVar2}`);
//ReferenceError: localVar2 is not yelined

console.log('')
console.log('')

let globalVar3 = "globalVar3";

console.log(`Global Scope: ${globalVar3}`);

const outerFun3 = () => {
let outerVar3 = "outervar3";

console.log(`Outer function: ${globalVar3}`);
console.log(`Outer function: ${outerVar3}`);
// console.log(`Outer function: ${innerVar3}`);

const innerFun3 = () => {
let innerVar3 = "innerVar3"

console.log(`Inner function: ${globalVar3}`);
console.log(`Inner function: ${outerVar3}`);
console.log(`Inner function: ${innerVar3}`);

}
innerFun3();
}
outerFun3();
// innerFun3();
// ReferenceError: innerFun3 is not yelined ( as it's inside outerFun3() )

console.log('')
console.log('')
let stringLet = "let string";
var stringVar = "var string";

const newString = () => {
let stringLet = "let string";
var stringVar = "var string";

console.log(`Inside function: ${stringLet}`);
console.log(`Inside function: ${stringVar}`);

}

newString();

console.log(`Outer function: ${stringLet}`);
console.log(`Outer function: ${stringVar}`);

console.log('')
console.log('')

function startLet() {
for (var i = 0; i < 5; i++) { // let changerd to var
console.log(i); //output 0,1,2,3,4
}
console.log(i); //ReferenceError: i is not yelined
}

function startVar() {
for (var i = 0; i < 5; i++) {
console.log(i); //output 0,1,2,3,4
}
console.log(i); //ReferenceError: i is not yelined
}

console.log("Running with let:")
startLet();

console.log("Running with var:")
startLet();




console.log('')
console.log('')
function startLet2() {
for (let i = 0; i < 5; i++) { // let changerd to var
if (true) {
let color = "red";
}
}
// console.log(i, color);
}

function startVar2() {
for (var i = 0; i < 5; i++) { // let changerd to var
if (true) {
var color = "blue";
console.log(i, color);
}
}
console.log(i, color);
}


console.log("Running with let:")
startLet2();

console.log("Running with var:")
startVar2();

console.log('')
console.log('')
const whichGreeting = (timeOfDay) => {
console.log(`Good ${timeOfDay}`);
}

const greet = (time,fn) => {
if(time < 1200) {
fn("Morning") 
} else if (time >= 1200 && time < 1800) {
fn("Afternoon");
} else { fn("Evening");
}
}

greet(1400, whichGreeting);



console.log('')
const add = () => { return 2 + 3; }
add(); //logs 5
add; // logs the whole function

console.log('')
console.log(add)
console.log('')
console.log(add())

console.log('')
const add2 = (num1) => {
return (num2) => { return num1 + num2; }}
console.log(add2(2)); //returns the function in the main function

console.log('')
const add4 = (num1) => {
return (num2) => { return num1 + num2; }}
console.log(add4(2)(5)); //returns the function in the main function

console.log('')
const add3 = (num1) => { return (num2) => { return num1 + num2; }}
console.log(add3(2)(1)); //output: 3

console.log('')
console.log("\x1b[32m"); console.log("VARIABLES - ACTIVITY 1 \x1b[33m")
// const message = "Hello Code Nation"
// var times = 5
// for (var t = 0; t < times; t++) {
// console.log(message)
// }

const message = "Hello Code Nation"
var times = 0;
var loop = function()
{ while(times <5)
{ times++; console.log(message) }
}
loop()

console.log('')
const sayHello = () => {
console.log("Hello Code Nation")
}
const pressStart = (fn) => {
for (let y = 0; y < 5; y++) {
fn();
}}
pressStart(sayHello);

console.log('')
const sayHello2 = (num) => {
for (let x = 0; x < num; x++)
console.log("Hello Code Nation")
}
const pressStart2 = (fn, num) => {
fn(num);
}
pressStart2(sayHello2, 3);

console.log('')
const sayHello3 = (num) => {
for (let x = 0; x < num; x++)
console.log("Hello Code Nation")
}
const pressStart3 = (fn, num) => {
fn(num);
}
pressStart3(sayHello3, 3);

const yel = "\x1b[33m"; const gre = "\x1b[32m"; const red = "\x1b[31m";
const blu = "\x1b[34m"; const cya = "\x1b[36m"; const whi = "\x1b[0m";
console.log(gre); console.log("VARIABLES - ACTIVITY 2"+yel)
const part1 = "The following numbers:"; const part2 = "multiplied by";
const part3 = "give the following numbers:"

const sampleArray = [1, 2, 3, 4, 5]; const multiplier = 5
const sampleArray2 = sampleArray.map(sampleNumbers => {
return sampleNumbers * multiplier
})
console.log(`${part1} ${blu+sampleArray.join(yel+', '+blu)+yel} ${part2} ${red+multiplier+yel} ${part3} ${cya+sampleArray2.join(yel+', '+cya)+yel}.`)





console.log(whi)

