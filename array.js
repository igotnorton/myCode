const grey = "\x1b[30m"; const red = "\x1b[31m"; const def = "\x1b[33m"
console.log("\x1b[32m"); console.log("ARRAYS \x1b[33m")
let favHolidayDestinations =
[ "Venice - Italy", "Paris - France", "Barcelona - Spain" ]

favHolidayDestinations[1] = "Florida - USA"
const addSpaceFavHolidayDestinations = favHolidayDestinations.join(', ')

console.log(`1. ${favHolidayDestinations[2]}.`)
console.log(`2. ${addSpaceFavHolidayDestinations}.`)

console.log("\x1b[32m"); console.log("ARRAYS - ACTIVITY 1\x1b[33m")
let favGames = 
[ "Borderlands", "Risk of Rain", "Earth 2150", "Far cry" ]

const addSpaceFavGames = favGames.join(', ')
console.log(`3. ${addSpaceFavGames}.`)

console.log("\x1b[32m"); console.log("ARRAYS - ACTIVITY 2 & 3\x1b[33m")
favGames[1] = "Delta Force"
console.log(`4. ${favGames[1]}.`)

console.log('')
console.log(`5. ${favHolidayDestinations.length}`)
console.log(`6. ${favHolidayDestinations.pop()}`)

console.log("\x1b[32m"); console.log("ARRAYS - ACTIVITY 4\x1b[33m")
const array1 = [1, 4, 9, 16]
const addSpaceArray1 = array1.join(', ')
console.log(`7. ${addSpaceArray1}`)
console.log(`${grey}multiply by two${def}`)
const map1 = array1.map(x => x * 2)
const addSpaceMap1 = array1.join(', ')
console.log(`7. ${addSpaceMap1}`)

console.log('')
const fruits = ["Banana", "Orange", "Apple", "Mango"]
console.log(`8. ${fruits.join(', ')}`)
console.log(`${grey}add Lemon and Pineapple${def}`)
fruits.unshift("Lemon","Pineapple")
console.log(`8. ${fruits.join(', ')}`)

console.log('')
const array2 = [1, 2, 3]
const addSpaceArray2 = array2.join(', ')
console.log(`9. ${addSpaceArray2}`)
array2.shift()
console.log(`${grey}remove the first element${def}`)
console.log(`9. ${array2.join(', ')}`)

console.log('')
const months = ['Jan', 'March', 'April', 'June'];
console.log(`10. ${months}`);
console.log(`${grey}insert Feb at index 1${def}`)
months.splice(1, 0, 'Feb');
console.log(`10. ${months}`);

console.log('')
let long = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopigtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshz"
console.log(`11. ${long}`)
console.log(`${grey}check what is the last letter${def}`)
console.log(`11. The last letter of a variable called long is "${red+long.slice(-1)+def}".`)

console.log("\x1b[32m"); console.log("ARRAYS - ACTIVITY 5\x1b[33m")
const songs = ["song1", "song2", "song3"]
console.log(`12. ${songs.join(', ')}`)
console.log(`${grey}add extra two songs${def}`)
songs.unshift("song4", "song5")
console.log(`12. ${songs.join(', ')}`)
console.log(`${grey}remove one song${def}`)
songs.splice(-1)
console.log(`12. ${songs.join(', ')}`)

console.log('')
let array4 = [1,2,3];
console.log(`${array4}`);
array4[7] = 8;
console.log(array4);

console.log('\x1b[0m')