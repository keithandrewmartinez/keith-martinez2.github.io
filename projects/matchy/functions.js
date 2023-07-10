


/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Declare function 'search' that takes 'animals' Array and name (of previously created animal objects) as parameters

function search(animals, name){

  // Create for loop to iterate through elements of animalArray to check if name matching animal exists; return animal's object if it does, null if not
  // Loop iterates through animals array until each index is checked, so that method can be applied after evaluation
    
    for (let i = 0; i < animals.length; i++){
      
  // checking each name of the array will require a conditional chain to evaluate animal name matches, otherwise returning null
      if (animals[i].name === name) 
      {
        
          return animals[i];
      }
    
        // else <-- note: clause not necessary here
          
          
// If matching name not found, function explicitly returns null     
          return null;
    }
  
// Console log sample name to verify functionality
  console.log(search(animals, 'Choco'))
  }
  
  console.log(search(animals, 'Jerome'))
  
  
    
    

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////


// Declare function named replace that has a signature of 
// 'replace(animals, name, replacement)' that takes three parameters

function replace(animals, name, replacement) 
{

// Create a for loop that iterates through each animal 
// object of the array that checks for animal of specified name, and replaces with third argument if found; else does nothing
  
    for (let i = 0; i < animals.length; i++) 
    {
  
// Create conditional chain to evaluate if animal matching name exists; and if so, replace with third argument, 'replacement' of function 'replace'
      if (animals[i].name === name) // check if animal exists with same name
        {
        animals[i] = replacement; // replace with replacement object
  
              return;
        }      
    }
}
  
  // Create additional animal object to test functionality of replace function
  
//   var teacupTurtle = {
//     species: 'reptile',
//     name: 'Turpentul',
//     noises: ['oof', 'derps', 'tsk-tsk', 'ughh']
//   }
  
// console.log(replace(animals, animals['Choco'], teacupTurtle ))
  
console.log(animals) // replacement at proper index confirmed



// //////////////////////////////////////////////////////////////////////
// // Step 3 - Remove ///////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////


// Declare a function 'remove' that takes two parameters; 
// array of animals and name of animal on which to perform search

function remove(animals, name)
{
  
  // Create for loop to check for presence of matching name of animal (within array)
  
  for (let i = 0; i < animals.length; i++) 
  {
// Use conditional chain to verify if name of animal exists in array

    if (animals[i].name === name) {
// If found, remove that object, using splice method
// remove 1 object at interval i (animals.splice(i,1))
     animals.splice(i, 1);
    }
  }
  return;
}

// remove(animals, animals['Jerome']);

console.log(animals)
console.log(remove(animals, animals['Jerome']));
console.log(animals)

// //////////////////////////////////////////////////////////////////////
// // Step 4 - Add ///////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////


// teacupTurtle = {
//   species: 'reptile',
//   name: 'Turpentul',
//   noises: ['oof', 'derps', 'tsk-tsk', 'ughh']
// }

// Create function 'add' that takes two parameters; array of animals and Object of new animal (to be added)

function add(animals, animal){
// Create for loop to check for presence of matching conditions within animal array
   for (let i = 0; i < animals.length; i++) 
   {
// Check if animal with same name exists, and return null if so
    if (animal.name === animals[i].name) 
    {
          return;  // effectively returns null
    }
    }
  // Otherwise, if not empty string or species length, push animal to animals array
    if (animal.name.length > 0 && animal.species.length > 0) 
{
      animals.push(animal);
}

}

// console.log(add(animals, teacupTurtle));

// console.log(add(animals, animal));

// console.log(animals)



/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
