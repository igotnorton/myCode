
const red = "\x1b[31m"
const def = "\x1b[33m"

console.log("\x1b[32m"); console.log("IF ELSE & SWITCH \x1b[33m")
let hunger = "full"
if (hunger == "hungry") { console.log("1. Yes please, I'm starving!") }
else if (hunger == "full") { console.log("1. No thanks, I'm stuffed!") }
else { console.log("1. Oh go on then, why not!") }

console.log("\x1b[32m"); console.log("IF ELSE & SWITCH - ACTIVITY 1 \x1b[33m")

var music = "disco"
if (music == "classical") { console.log("2. Oh, how relaxing.") }
else if (music == "disco") { console.log("2. Where are my dancing shoes!") }
else { console.log("2. Where's the party?") }

console.log("\x1b[32m"); console.log("COMPARSION OPERATORS \x1b[33m")
let num = 4
if (num === 4) { console.log("3. I am the same.") }
else { console.log(`3. My type is different.`)}

console.log('')
let num2 = 4
if (num2 != "4") { console.log("4. We are diffrent.") }
else { console.log("4. We are equal.") }

console.log("\x1b[32m"); console.log("LOGICAL OPERATORS - ACTIVITY 2 \x1b[33m")
let age = 18
if (age  >= 18) { console.log("5. Yes I can serve you.") }
else { console.log("5. You aren't old enought.") }

console.log('')
let num3 = 3;
if (num3 & 1) { console.log(`6. I am ${red+"odd"+def} number.`) }
else { console.log(`6. I am ${red+"even"+def} number.`) }

console.log("\x1b[32m"); console.log("TRUE AND FALSE \x1b[33m")
let food = "ice cream"; let hunger2 = "hungry"
if (hunger2 == "full" && food == "ice cream")
{ console.log("7. Of course, who wouldn't?") }

else if (hunger2 == "hungry" && food == "ice cream")
{ console.log("7. Yes please I'm starving, could I also have a pizza?") }

else if (hunger2 == "hungry" && food == "sprouts")
{ console.log("7. Actually, I can wait.") }

else { console.log("7. No thanks, I'm stuffed") }

console.log("\x1b[32m"); console.log("LOGICAL OPERATORS - ACTIVITY 3 \x1b[33m")
let country = "UK"; let age3 = 18
if (country != "USA" && age3 >= "18") { console.log("8. Yes, you are old enough.") }
else if (country == "USA" && age3 >= "21") { console.log("8. Yes, you are old enough.") }
else { console.log("8. Sorry, you aren't old enough.") }

console.log('')
let food2 = "sprouts"
if (food2 == "ice cream" || food2 == "pizza") { console.log("9. Yay, lets's eat!!!") }
else if (food2 == "sprouts" || food2 == "broccoli") { console.log("9. Ugh, no thanks.") }
else { console.log("9. Okay, go on then why not.") }

console.log("\x1b[32m"); console.log("LOGICAL OPERATORS - ACTIVITY 4 \x1b[33m")
let day = "Sunday"
if (day == "Sunday" || day == "Saturday")
{ console.log("10. Yay it’s the weekend!!!") }
else { console.log("10. Oh no, work again :<") }

console.log("\x1b[32m"); console.log("SWITCH STATEMENTS - ACTIVITY 5 \x1b[33m")
var topping = "Salami"
if (topping == "Salami") { topping = "Salami slices" }
if (topping == "Cheese") { topping = "Cheese slices" }

switch(topping) {
case "Tomatoes": case "Cheese slices": case "Salami slices":
console.log(`11. ${red+topping+def} are an important ingredient for my pizza.`)
break;
case "Mushrooms": case "Olives":
console.log(`11. I didn't mind having ${red+topping+def} on my pizza.`)
break;
default:
console.log(`11. ${red+topping+def} should not be on a pizza.`)
}

console.log("\x1b[32m"); console.log("LEARNING OBJECTIVES - ACTIVITY 6 \x1b[33m")
let password = "12345678"
if (password.length < 8) { console.log("12. Password is too short!") }
else { console.log(`12. ${password}`) }

console.log("\x1b[32m"); console.log("LEARNING OBJECTIVES - ACTIVITY 7 \x1b[33m")
var isPalindrome = function (string) {
if (string == string.split('').reverse().join(''))
{ console.log('13.', string + ' is palindrome.')}
else {console.log('13.', string + ' is not palindrome.')}
}
isPalindrome("20202")

console.log("\x1b[32m"); console.log("LEARNING OBJECTIVES - ACTIVITY 8 \x1b[33m")
let num5 = 15
if (num5 % 5 == 0 && num5 % 3 == 0) { console.log("14. fizz buzz") }
else if (num5 % 3 == 0) { console.log("14. fizz") }
else if (num5 % 5 == 0) { console.log("14. buzz") }
else { console.log(`14. ${num5}`) }


console.log("\x1b[32m"); console.log("LEARNING OBJECTIVES - ACTIVITY 9 \x1b[33m")
const time = 12; const ShiftStarts = 9; const ShiftEnds = 17;
var PlaceOfWork = "Tesco"; var TownOFHome = "Chester"

if (time >= ShiftStarts && time <= ShiftEnds && PlaceOfWork == "Tesco" && TownOFHome == "Chester")
{ console.log("15. I am at work right now.") }
else if (time == "8" && PlaceOfWork == "Tesco" && TownOFHome == "Chester")
{ console.log("15. I am commuting to work.") }
else if (time == "18" && PlaceOfWork == "Tesco" && TownOFHome == "Chester")
{ console.log("15. I am going back home.") }
else
{ console.log("15. I am at home right now.") }

console.log("\x1b[32m"); console.log("LEARNING OBJECTIVES - ACTIVITY 10 \x1b[33m")
function findLastVowel(str) {
let pattern = /[aeiouAEIOU]/gim;
let result = [...str.match(pattern)]
return result[result.length - 1]
}
console.log(`The last vowel is: ${findLastVowel("jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi")}.`)

console.log("\x1b[32m"); console.log("LEARNING OBJECTIVES - ACTIVITY 11 \x1b[33m")
let short = "abcdcba"
if (Array.from(short)[0] == short.slice(-1)) { console.log("17. Same letters :D") }
else { console.log("17. Different letters :<") }

console.log("\x1b[32m"); console.log("LEARNING OBJECTIVES - ACTIVITY 12 \x1b[33m")
let var1 = 10; let var2 = 5
let var3 = var1 + var2; let var4 = var1 * var2
if (var1 + var2 & 1)
{ console.log(`18. The sum of two variables named var1 and var2 is ${red+var3+def}, which is an ${red+"odd"+def} number.`)
console.log(`    Variables var1 and var2 multiplied together give ${red+var4+def}.`) }
else
{ console.log(`18.The sum of two variables named var1 and var2 is ${red+var3+def}, which is an ${red+"even"+def} number.`) }

console.log('\x1b[0m')
