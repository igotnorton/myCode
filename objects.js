console.log("\x1b[32m"); console.log("OBJECTS \x1b[33m")
let day = "Saturday"

const person = {
firstName: "Sally", lastName: "Evans",
age: 40, occupation: "Sales assistant",
married: false, homeOwner: false,
hobbies: ["tennis", "gardening", "bungee humping"],
marketingOp() {
if (this.homeOwner == false && this.age > 25)
{return "Send mortage offer email."}

else if (this.homeOwner == false && this.age < 25)
{return "Send summer holiday fun credit card offer."}

else if (this.homeOwner == true && this.age > 25)
{return "Pension investment offer."}

else
{return "Send sensible savings offer."}
}}

console.log(`1. Her name is ${person.firstName}.`)
console.log(`2. She has a job as a ${person.occupation}.`)
console.log(`3. ${person.firstName} is ${person["age"]} years old.`)
person.homeOwner = "true"
console.log(`4. ${person.homeOwner}`)

console.log("\x1b[32m"); console.log("OBJECTS - ACTIVITY 1, 2, 3 & 4\x1b[33m")

const pet = { 
name: "Biscuit", type: "dog", breed: "pug", age: "5", colour: "silver", size: "small", favToy: "plush squeaky ball",  favGame: "hide and seek", features: ["affectionate", "intelligent", "good with children"], eatingNow: true, drinkingNow: true,
eatAndDrink() {
if (this.eatingNow == true && this.drinkingNow === true)
{return `${pet.name} is eating and drinking now.`}
else if (this.eatingNow == true && this.drinkingNow === false)
{return `${pet.name} is eating now.`}
else if (this.eatingNow == false && this.drinkingNow === true)
{return `${pet.name} is drinking now.`}
else {return `${pet.name} is not eating or drinking now.`}
}
}

console.log(`5. My pet is a ${pet.size} ${pet.breed} ${pet.type}. \n5. His name is ${pet.name}. \n5. He is ${pet.age} years old and has ${pet.colour} fur. \n5. His favourite toy is a ${pet.favToy} and he likes to play ${pet.favGame}. \n5. The ${pet.breed}s are ${pet.features[0]}.`)

console.log('')
pet.colour = "black"
console.log(`6. My dog has ${pet.colour} fur.`)

console.log('')
if (day == "Saturday" || day === "Sunday")
{console.log(`7. Great! it's ${day}, let's play ${person.hobbies[0]}!`)}
else
{console.log(`7. Oh no! It's ${day} I hate being a ${person.occupation}.`)}

console.log('')
console.log(`8. ${person.marketingOp()}`)

console.log('')
console.log(`9. ${pet.eatAndDrink()}`)

console.log("\x1b[32m"); console.log("OBJECTS - ACTIVITY 5\x1b[33m")
let coffeShop = {
drink: [
{name: "water", price: 1, qty: 5},
{name: "coke", price: 1.5, qty: 0},
{name: "latte", price: 2, qty: 0},
{name: "milk shake", price: 2.5, qty: 4},
],
food: [
{name: "hot dog", price: 1.5, qty: 0},
{name: "side salad", price: 2, qty: 5},
{name: "hamburger", price: 2.5, qty: 4},
{name: "pizza", price: 3, qty: 5},
],
drinksOrdered(){
let drinkTotal = []
let drinkList = []
for (let i = 0; i < this.drink.length; i++) {
if (this.drink[i].qty > 0) {
let drinkQty = this.drink[i].qty
let drinkName = this.drink[i].name
let drinkEachPrice = this.drink[i].price
let drinkEachTotalPrice = (this.drink[i].qty*this.drink[i].price)
drinkList.push(`${drinkQty}x ${drinkName} for £${drinkEachTotalPrice} (£${drinkEachPrice} each)`);
}}
let waterTotalCost = (this.drink[0].price*this.drink[0].qty)
let cokeTotalCost = (this.drink[1].price*this.drink[1].qty)
let latteTotalCost = (this.drink[2].price*this.drink[2].qty)
let milkTotalCost = (this.drink[3].price*this.drink[3].qty)
let allDrink = (waterTotalCost+cokeTotalCost+latteTotalCost+milkTotalCost)
drinkTotal.push(`The total cost of the drink(s) is £${allDrink}.`)
{return `Your drinks order: ${drinkList.join(', ')}. \n${drinkTotal.join(', ')} \n`; }
},
foodOrdered(){
let foodTotal = []
let foodList = []
for (let z = 0; z < this.food.length; z++) {
if (this.food[z].qty > 0) {
let foodQty = this.food[z].qty
let foodName = this.food[z].name
let foodEachPrice = this.food[z].price
let foodEachTotalPrice = (this.food[z].qty*this.food[z].price)
foodList.push(`${foodQty}x ${foodName} for £${foodEachTotalPrice} (£${foodEachPrice} each)`);
}}
let hotdogTotalCost = (this.food[0].price*this.food[0].qty)
let sidesaladTotalCost = (this.food[1].price*this.food[1].qty)
let hamburgerTotalCost = (this.food[2].price*this.food[2].qty)
let pizzaTotalCost = (this.food[3].price*this.food[3].qty)
let allFood = (hotdogTotalCost+sidesaladTotalCost+hamburgerTotalCost+pizzaTotalCost)
foodTotal.push(`The total cost of the food is £${allFood}.`)

{return `Your food order: ${foodList.join(', ')}. \n${foodTotal.join(', ')} \n`}
}
}

console.log(coffeShop.drinksOrdered())
console.log(coffeShop.foodOrdered())

// console.log(`The total cost of the drink(s) and the food is £${allDrink+allFood}.`)
// const cart2 = coffeShop.drink.reduce((acc = {}, item = {}) => {
// const itemTotal = parseFloat((item.price * item.qty));
// acc.drinkIS = parseFloat((acc.drinkIS + itemTotal));
// return acc;
// },
// {drinkIS: 0}
// );
// console.log(cart2);

// const cart3 = coffeShop.food.reduce((acc = {}, item = {}) => {
// const itemTotal = parseFloat((item.price * item.qty));
// acc.foodIS = parseFloat((acc.foodIS + itemTotal));
// return acc;
// },
// {foodIS: 0}
// );
// console.log(cart3);

console.log('\x1b[0m')
