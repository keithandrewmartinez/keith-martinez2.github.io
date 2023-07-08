/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal = {};

animal.species = 'mammal';
animal['name'] = 'Obpikko';
animal.noises = [];
console.log(animal);



//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var noises = [];

noises[0] = 'oootza'; 
noises.push('iopaa');
noises.unshift('yeet');
noises[noises.length] = 'brrrt';

console.log(noises.length);
// Must log index at "- 1" or will return 'undefined'
console.log(noises[noises.length-1]);

console.log([noises]);

console.log(animal);



//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

animal.noises = noises;
animal.noises.push('weeeeeooohh');

// console.log(noises)
// console.log(animal)


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *Can access properties on objects through dot notation (ie. dot.notation 
  = reassigned), Bracket Notation (ie bracket['notation'] = singleQuotes) 
 * 2. What are the different ways of accessing elements on arrays?
 *Elements in arrays can also be accessed via bracket notation by using the arrays index value. 
 Certain methods like ,push, or .unshift are also available to add or change 
 values of an array or object.
 * *******************************************************************
 */


/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animals = [];

animals.push(animal);
console.log(animals);

var duck = {};

duck = {
  species: 'duck', 
  name:'Jerome',
  noises:['quack','honk','sneeze', 'woosh']}

animals.push(duck);

console.log(animals);
console.log(animals.length);

chocobo = { 
  species: 'bird',
  name: 'Choco',
  noises: ['eet', 'yeet', 'tweet', 'uh-hmm']
}

  animals.push(chocobo);

chako = {
  species: 'dog',
  name: 'Chako',
  noises: ['rooo', 'nyar', 'ziii']

}

animals.push(chako);

console.log(animals);

console.log(animals.length);

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// initializing friends variable (declared in "Do Not Remove Code Below")
// Chose array data structure best suited for accessing and manipulating lists

var friends = [];


var animals = [animal, duck, chocobo, chako];

// Create function that has a data type array as single parameter

function getRandom(array){
  var index = array;
  // To create random function, will use a combination 
  // of numbers methods in conjunction with array.length, 
  // to set an upper limit for random animal selection using 
  // "array.length" (.length - 1 is not necessary ) because 
  // Math.random and Math.ceil instead of Math.floor, confirm upper index
  // selection, and Math.random * Math.random provides a non-zero number
  // As such, with .length, index will return number from 1-3, inclusive
  index = (Math.ceil(Math.random() * Math.random() * array.length));
 
  console.log(index)  // number from 1 - 3
  
    return index; 
}

// Can now get and add (using push (array) method a new random 
// friend from animals object into friends array by invoking
// getRandom as index accessed and pushed into friends array

console.log(animals[0]['friends'] = friends);

console.log(animals[0].name) // test array access syntax structure; Obpikko

friends.push(animals[getRandom(animals)].name)

// TO ADD 'friends' property to animals object 
animals[0]['friends'] = friends


console.log(friends)

console.log(animals)
 



/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}