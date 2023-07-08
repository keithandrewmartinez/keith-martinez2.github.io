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
    // Loop iterates until length of animalArray is fully checked, so that method can be applied with a less than operator (-1 after length is not needed, because it is the same as i < .length)
      
      for (let i = 0; i < animals.length; i++){
        
    // checking each name of the array will require a conditional chain to evaluate animal name matches, otherwise returning null
        if (animals[i].name === animal.name) {
          
            return animals[i]}
      
          else {
    // If matching name not found, function returns null     
            return null;
          
        }  
        
      }
    
    // Console log sample name to verify functionality
    console.log(search(animals, 'Choco'))
    }
    
    console.log(search(animals))
    
    

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////



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
