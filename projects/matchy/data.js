
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

// ADD 'ootza' to index 0 of array 'noises'
noises[0] = 'oootza'; 

// ADD 'iopaa' noise to end of noises array using .push() method
noises.push('iopaa');

// ADD 'yeet'noise to front of noises array with .unshift() method
noises.unshift('yeet');

// ADD 'brrrt' noise to noises array through dot.notation using length property of array, assigning 'brrrt' noise to length value of index, which as an index position, did not previously exist, until assigned
noises[noises.length] = 'brrrt';

console.log(noises.length);   // 4
// Must log index at "- 1" or will return 'undefined'

console.log(noises[noises.length-1]); // 'brrrt'

console.log(noises); // logs all current 4 noises in array

console.log(animal); // logs animal profile



//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

animal['noises'] = noises

// ADD fifth noise value via array .push method
animal.noises.push('weeeeeooohh'); 

console.log(noises)  // log noises array to confirm addition of fifth noise

// console.log(animal)  // updated noises array indicated on animal profile as well


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

// console.log(animals);

var duck = {
  
  species: 'duck', 
  name:'Jerome',
  noises:['quack','honk','sneeze', 'woosh']
  
};

animals.push(duck);

// console.log(animals);

console.log(animals.length);

chocobo = { 
  species: 'bird',
  name: 'Choco',
  noises: ['eet', 'yeet', 'tweet', 'uh-hmm']
};



chako = {
  species: 'dog',
  name: 'Chako',
  noises: ['rooo', 'nyar', 'ziii']

};


animals.push(chocobo, chako);

// console.log(animals);

console.log(animals.length);  // 4

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// initializing friends variable (declared in "Do Not Remove Code Below")
// Chose array data structure best suited for accessing and manipulating lists

var friends = []; // Array used as data type to hold friend objects

var animals = [duck, duck, chocobo, chako];

// Create function that has a data type array as single parameter

function getRandom(array){

  // To create random function, will use a combination 
  // of numbers methods in conjunction with array.length, 
  // to set a range for random animal selection using 
  // "array.length"  
 return Math.floor(Math.random() * array.length);
 
  // console.log(animals)  
    
}

// Can now get and add (using push (array) method a new random 
// friend from animals object into friends array by invoking
// getRandom as index accessed and pushed into friends array

// console.log(animals[0]['friends'] = friends);

console.log(animals[0].name) // test of bracket index dont notation for array access (syntax structure example); 'Jerome'  (w/o array brackets)

friends.push(animals[getRandom(animals)].name);

// TO ADD 'friends' property to animals object 

animals[0]['friends'] = friends;


console.log(friends);     // ['Jerome']   Logs full friend array
console.log(friends.length)   // 1

console.log(animals);   // currently 4 animals (w/ one duplicate so Obpikko isn't stuck as his only friend)





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