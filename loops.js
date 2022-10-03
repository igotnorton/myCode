console.log("\x1b[32m"); console.log("LOOPS \x1b[33m")
console.log('')
const red = "\x1b[31m"; const blu = "\x1b[34m"; const def = "\x1b[33m"

let favHolidayDestinations = ["Venice, Italy", "Paris, France", "Barcelona, Spain"]
for (let dest = 0; dest < favHolidayDestinations.length; dest++)
{ console.log(`1. ${favHolidayDestinations[dest]}`) }


console.log("\x1b[32m"); console.log("ACTIVITY 1 \x1b[33m")
let favHolidayDestinations2 = [
"Venice, Italy", "Paris, France", "Barcelona, Spain", "Chester, UK", "Berlin, Germany" ]
for (let destination = 1; destination < favHolidayDestinations2.length; destination++)
{ console.log(`2. ${favHolidayDestinations2[destination]}`); destination+=2 }


console.log('')
for (let i = 0; i <= 10; i++)
{console.log(`3. ${i += 2}`)}

console.log('')
for (let a = 0; a <= 10; a+=2)
{console.log(`4. ${a}`)}

console.log('')
let evenNumbers = []
for (let n = 0; n <= 20; n++) {
if (n % 2 == 0)
{ (evenNumbers.push(n)) }
}
console.log(`5. The even numbers between 0 and 20 are ${evenNumbers.join(', ')}.`)

console.log("\x1b[32m"); console.log("ACTIVITY 2 \x1b[33m")
let rev = evenNumbers+""
rev = rev.split(',')
rev = rev.reverse()
rev = rev.join(', ')
console.log(`6. The even numbers between 20 and 0 are ${rev}.`)

console.log("\x1b[32m"); console.log("ACTIVITY 3 \x1b[33m")
let oddNumbers2 = []
for (let n = 1; n < 30; n++) {
if (n & 1) 
{ (oddNumbers2.push(n)) }
}
console.log(`7. The odd numbers between 0 and 30 are ${oddNumbers2.join(', ')}.`)

console.log('')
let lives = 3; while (lives > 0)
{ console.log(`8. Well done! You're still in the game.`); lives-- }
console.log(`8. Game over!!!`)

console.log('')
let currentDiceRoll = 3; while(currentDiceRoll !=1) {
console.log(`9. ${currentDiceRoll}`)
currentDiceRoll = Math.floor(Math.random()*6)+1
}

console.log("\x1b[32m"); console.log("ACTIVITY 4 \x1b[33m")

const age = [18]; let i = 0; let message = ""
while (age[i] < 18)
{ message = `10. You're a child!`; i++}
while (age[i] > 17) {message = `10. You're an adult!`; i++;}
console.log(message)

console.log("\x1b[32m"); console.log("ACTIVITY 5 \x1b[33m")

var randomNumbers = [];
for (var n=4, t=10; n<t; n++)
{randomNumbers.push(Math.round(Math.random() * 100))}
console.log(`11. Here are random numbers: ${randomNumbers.join(', ')}.`)


console.log("\x1b[32m"); console.log("ACTIVITY 6 \x1b[33m")
let movies = [ "Matrix 2", "Brazil", "Ghostbusters", "Evil Dead" ]
for (let mov = 3; mov < movies.length; mov++) {
if (movies[2] ==  "Ghostbusters")
{console.log(`12. Yay! it's Ghostbusters.`)}
else {console.log(`12. Boo! We want Ghostbusters!`)}
}

console.log("\x1b[32m"); console.log("ACTIVITY 7 \x1b[33m")
let x = Math.floor(Math.random() * 30)
if (x % 7 == 0)
{console.log(`13. ${blu}The number ${def+x+blu} is divisible by 7${def}.`)}
else {console.log(`${red}12. The number ${def+x+red} is NOT divisible by 7${def}.`)}

console.log("\x1b[32m"); console.log("ACTIVITY 8 \x1b[33m")
const bobsFollowers = ["Alex", "Lily", "Tim", "Robert"]
const hannahsFollowers = ["Greg", "Alex", "Lily", "Eva"]

const convert = []
for (let z = 0; z < bobsFollowers.length; z++) {
for (let y = 0; y < bobsFollowers.length; y++) {
if ( bobsFollowers[z] === hannahsFollowers[y]) {
convert.push(hannahsFollowers[y])
}}}
if (convert.length === 0) {console.log(`14. (${blu}Nested loop method${def}) No matching value(s).`)}
else {console.log(`14. (${blu}Nested loop method${def}) Matching value(s): ${convert.join(', ')}.`)}

const matchingValues = bobsFollowers.filter(element => hannahsFollowers.includes(element));
if (matchingValues == "") {console.log(`14. (${red}Filter method${def}) No matching value(s).`)}
else {console.log(`14. (${red}Filter method${def}) Matching value(s): ${matchingValues.join(', ')}.`)}


console.log('\x1b[0m')