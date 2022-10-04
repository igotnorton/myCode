console.log("\x1b[32m"); console.log("OBJECT ORIENTED PROGRAMING \x1b[33m")
let pet = {
name: "Bella",
age: "2",
type: "Dog",
breed: "German Shepherd",
color: "Black and Tan",
lastFed: "08:00",
feedPet (time) {
this.lastFed = time;
return `1. Last feed updated to: ${this.lastFed} for ${this.name}`;
}
}
console.log(pet.feedPet("15:00"))

class pet2 {
constructor(name,age,type,breed,color,time) {
this.name = name;
this.age = age;
this.type = type;
this.breed = breed;
this.color = color;
this.lastFed = time;
}
get petInfo () {
return `6. ${this.name} is a ${this.type}, ${this.age} year(s) old`;
}
feedPet (time) {
this.LastFeed = time;
return `2. Last feed updated to: ${this.lastFed} for ${this.name}`;
}
}
class PetMeds extends pet2 {
constructor(name,age,type,breed,color,time) {
super(name,age,type,breed,color,time);
this.lastMeds = time;
}
giveMeds (time) {
this.lastMeds = time;
return `3. Last meds updated to: ${this.lastMeds} for ${this.name}`;
}
}

console.log('')
const Bella = new pet2("Bella", 2, "Dog", "GS", "B&T", "8:00");
console.log(Bella.feedPet("15:00"));

console.log('')
const Barney = new pet2("Barney", 4, "Cat", "Dom-Short", "B&T", "10:00");
console.log(Barney.feedPet("15:00"));

console.log('')
const Betty = new pet2("Betty", 4, "Dog", "SH", "White", "10:00");
console.log(Betty.feedPet("15:00"));

console.log('')
const Barney2 = new PetMeds("Barney", 4, "Cat", "Dom-Short", "B&T", "10:00");
console.log(Barney2.giveMeds("10:00"));

console.log("\x1b[0m")
let example = {}
example.name = "test";
example.abcdef = "test"; 
console.log(example)

console.log("\x1b[33m")
let obj = {
example: [
[{example2: ["hello"]}],
]
}
console.log(`4. ${obj.example[0][0].example2[0]}`)

console.log("\x1b[33m")
let array = [ ["coke", 2], ["pepsi", 2], ["water", 20] ];
console.log("5. "+array[0][0])

console.log('')
console.log(Bella.petInfo);

console.log('')
class pet3 {
constructor(firstname, surname, age, type, breed, colour, time) {
this.firstname = firstname;
this.surname = surname;
this.age = age;
this.type = type;
this.breed = breed;
this.colour = colour;
this.lastFed = time;
}
name () {return this.name}
get petInfo () {
return `${this.firstname} is a ${this.type}, ${this.age} year(s) old`;
}
set fullName (name) {
const array = name.split(' ');
this.firstname = array[0];
this.surname = array[1];
}
get fullName() {
return `${this.firstname} ${this.surname}`
}
feedPet (time) {
this.lastFed = time;
return `Last feed updated to: ${this.lastFed} for ${this.firstname}`;
}}

console.log('')
const bella3 = new pet3("Bella", "", 2, "Dog", "GS", "B&T", "08:00");
console.log(bella3);
bella3.fullName = "Bella Crompton"
console.log(bella3);
console.log(bella3.fullName)

console.log("\x1b[32m"); console.log("OBJECT ORIENTED PROGRAMING - ACTIVITY 1, 2 & 3 \x1b[33m")

const storeMovieList = [];


class Rental {
constructor (storeName,storeAddress,storeTelephone) {
this.storeName = storeName;
this.storeAddress = storeAddress;
this.storeTelephone = storeTelephone;
}
get storeInfo() {
return `Welcome to ${this.storeName}. Our address is: ${this.storeAddress}. If you have any questions, feel free to call us at ${this.storeTelephone}.`
}}

class Movies extends Rental {
constructor(storeMovie, storeMoviePrice,storeName,storeAddress,storeTelephone) {
super (storeName,storeAddress,storeTelephone);
this.storeMovie = storeMovie;
this.storeMoviePrice = storeMoviePrice;
this.listMovies = () =>
{ console.log(`${storeMovie}, price = ${storeMoviePrice}`) }
storeMovieList.push(this);
}
static GetRentals()
{ storeMovieList.forEach( m => { m.listMovies() } ) }
}

new Movies('Avatar', '£2')
new Movies('Avengers: Age of Ultron', '£3')
new Movies('Avengers: Endgame', '£4')
new Movies('Avengers: Infinity War', '£2')
new Movies('Beauty and the Beast', '£3')
new Movies('Black Panther', '£4')
new Movies('Frozen', '£2')
new Movies('Frozen II', '£3')
new Movies('Furious 7', '£4')
new Movies('Harry Potter and the Deathly Hallows - Part 2', '£2')
new Movies('Incredibles 2', '£3')
new Movies('Jurassic World', '£4')
new Movies('Jurassic World: Fallen Kingdom', '£2')
new Movies('Spider-Man: No Way Home', '£3')
new Movies('Star Wars: The Force Awakens', '£4')
new Movies('Star Wars: The Last Jedi', '£2')
new Movies('The Avengers', '£3')
new Movies('The Lion King', '£4')
new Movies('Titanic', '£2')
new Movies('Top Gun: Maverick', '£3')

console.log('')
const test1 = new Rental("Blockbuster", "136 Anderson St, Dorchester, DT2 7AZ", "07712345678");
console.log(test1.storeInfo)
console.log('')

console.log("List of movies for rent and their prices:")
Movies.GetRentals();
console.log('\x1b[0m')
