let Name = "Kamil"
let Age = 33
let FavouriteColour = "Orange"

console.log('')
console.log('\x1b[32m%s\x1b[33m', 'ACTIVITY 2')

console.log(`Hi, my name is \x1b[31m${Name}\x1b[33m. I am \x1b[31m${Age}\x1b[33m years old and my favourite colour is \x1b[31m${FavouriteColour}\x1b[33m.`)

let Breakfast = "Baked Beans & Pork Sausages"
let Lunch = "Instant Noodles"
let Dinner = "Fish Cakes & Fried Eggs"

console.log('')
console.log('\x1b[32m%s\x1b[33m', 'ACTIVITY 3')
console.log(`Hi, my name is \x1b[31m${Name}\x1b[33m. I am \x1b[31m${Age}\x1b[33m years old and my favourite colour is \x1b[31m${FavouriteColour}\x1b[33m. Today I will eat \x1b[31m${Breakfast}\x1b[33m for breakfast, \x1b[31m${Lunch}\x1b[33m for lunch, and \x1b[31m${Dinner}\x1b[33m for dinner.`)

console.log('')
console.log('\x1b[32mASSIGNMENT OPERATORS\x1b[33m')

let a = 5
a = a + 3
console.log(`a = \x1b[31m${a}\x1b[33m`)
let b = 5
b += 3
console.log(`b = \x1b[31m${b}\x1b[33m`)
console.log('')

console.log('\x1b[32mRESEARCH ACTIVITY\x1b[33m')
let myNumber = '100';
myNumber = Number(myNumber) + 5;
console.log(`My Number is \x1b[31m${myNumber}\x1b[33m`)

const lotsOfDecimal = 3.14159265359;
lotsOfDecimal;
const twoDecimalPlaces = lotsOfDecimal.toFixed(2);
twoDecimalPlaces;
console.log(`Pi = \x1b[31m${twoDecimalPlaces}\x1b[33m`)

console.log('')
console.log('\x1b[32m%s\x1b[33m', 'ACTIVITY 4')

var CurrentDate = new Date().toLocaleDateString()
let date_1 = new Date('10/23/2022');
let date_2 = new Date();

const days = (date_1, date_2) =>{
let difference = date_1.getTime() - date_2.getTime();
let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
return TotalDays;
}

console.log(`My next birthday is on \x1b[31m23/10/2022\x1b[33m. Today's date is \x1b[31m${CurrentDate}\x1b[33m and in \x1b[31m${days(date_1, date_2)}\x1b[33m days it will be my birthday.`);
console.log('')

var CurrentDate2 = new Date().toLocaleDateString()
let date_3 = new Date();
let date_4 = new Date('10/23/1988');

const days2 = (date_3, date_4) =>{
let difference = date_3.getTime() - date_4.getTime();
let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
return TotalDays;
}

console.log(`\x1b[31m${days(date_3, date_4)}\x1b[33m days have passed since my birth.`)


console.log('\x1b[0m')