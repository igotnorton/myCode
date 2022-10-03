console.log("\x1b[32m"); console.log("FUNCTIONS \x1b[33m")

const HolidayDestination = () =>
{console.log(`1. Yay! I'm going on holiday!`)}
HolidayDestination()

console.log("\x1b[32m"); console.log("FUNCTIONS - ACTIVITY 1\x1b[33m")
const sayHello = () =>
{console.log(`2. Hi there, how are you!`)}
sayHello()

console.log('')
const HolidayDestination2 = (country, month) =>
{console.log(`3. Yay! I'm going on holiday to ${country} in ${month}. I can't wait.`)}
HolidayDestination2("Spain", "June")

console.log('')
const inventory = (ProductCode, departmentName, quantity) =>
{
console.log(`4. ${quantity} of ${ProductCode} sold from ${departmentName} department, need to update stock by ${quantity}`)
}
inventory(412345, "backed goods", 100)

console.log("\x1b[32m"); console.log("FUNCTIONS - ACTIVITY 2\x1b[33m")
const offer = (myName, drink) =>
{console.log(`5. Hi, my name is ${myName}. Would you like to drink a ${drink}?`)}
offer("Kamil", "Vodka")

console.log('')
const multiply = (num1, num2) =>
{return num1 * num2}
console.log(`6. ${multiply(2,5)}`)


console.log('')
const replenishStock = (productCode2) =>
{console.log(`7. Order product number ${productCode2} stock is low!`)}

const reducePrice = (productCode2, originalPrice) => {
let salePrice = originalPrice /= 2
console.log (`7. Product number ${productCode2} is now £ ${salePrice}`)
}

const checkStock = (productCode2, quantity2, originalPrice) => {
if (quantity2 <= 10)
{replenishStock(productCode2)}
else if (quantity2 > 100)
{reducePrice(productCode2, originalPrice)}
else
{console.log("7. Don't order stock")}
}
checkStock(345678, 100, 100)

console.log('')
const addMe = (num3, num4) =>
{return num3 + num4}
console.log(`8. ${addMe(4,5)}`)

console.log('')
function addMe2(num5, num6)
{return num5 + num6}
console.log(`9. ${addMe2(4,5)}`)

console.log('')
const addMe3 = function(num7, num8)
{return num7 + num8}
console.log(`10. ${addMe3(4,5)}`)



console.log('\x1b[0m')