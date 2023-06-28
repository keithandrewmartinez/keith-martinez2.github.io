// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //

//******************************************
// 1. Loops

  // loop through array, output values of array to console

  for (let i = 0; i < array.length; i++) {

    console.log(array[i]);

  }

  //******************************************




  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  


//******************************************
// 2. Loops



  for (let i = array.length - 1; i > -1; i--) {

    console.log(array[i]);
  }


//******************************************


  // YOUR CODE ABOVE HERE //
  }

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //



//******************************************
// 3. Loops


  for (let key in object) {

    return (Object.keys(object));

  }
  

//******************************************




  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  
  
//******************************************
// 4. Loops

  for (let keys in object) {

    Object.keys(object);
   
   console.log(keys);

  }
//******************************************



  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  


//******************************************
// 5. Loops

  return Object.values(object);
  
//******************************************



  
  // YOUR CODE ABOVE HERE //
}




/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {

  // YOUR CODE BELOW HERE //
 

//******************************************
// 6. Loops


  for(let values in object){
   
    console.log(object[values]);

  }
  
//******************************************



  // YOUR CODE ABOVE HERE //
}





/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //

//******************************************
// 7. Loops
  
//convert object into array and then use length method to identify total number of value pairs
  
var obj2arr = Object.keys(object)

console.log(obj2arr.length);
  
return obj2arr.length;


//******************************************

  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  


//******************************************
// 8. Loops
    //use Array.reverse method to reverse order of keys from object
// For sample 'object = {1:'a', 2:'b', 3:'c', 4:'d', 5:'e', 6:'f'};'
  let objKeys = Object.keys(object); //['1','2','3','4','5','6']
  
    let reversedKeys = objKeys.reverse();  //['6','5','4','3','2','1']
    // Create loop to iterate through each index of the array
    for(let i = 0; i < objKeys.length; i++){
  
      //set variable to store output of each individual key
      let key = objKeys[i];  
      // individually iterates and prints keys of 6, 5, 4, 3, 2, 1 
      // (where the comma represents a new line) 
      let value = object[key]; // individually iterates 
      // and prints values of each keys: f,e,d,c,b,a (where each 
      // comma represents a new line)

      console.log(value);
      
     } 
//******************************************

  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
