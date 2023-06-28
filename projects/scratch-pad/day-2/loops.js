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

  // loop through array, output values of array to console

  for (let i = 0; i < array.length; i++) {

    console.log(array[i]);

  }
  

  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  
  
  for (let i = array.length - 1; i > -1; i--) {

    console.log(array[i]);
  }
 

  // YOUR CODE ABOVE HERE //
  }

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //


  for (let key in object) {

    return (Object.keys(object));

  }
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  
  
  for (let keys in object) {

    var keys = Object.keys(object);
   
   console.log(keys);

  }
 


  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  
  return Object.values(object);
  
  
  
  // YOUR CODE ABOVE HERE //
}







/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {

  // YOUR CODE BELOW HERE //
 
  for(let values in object){
   
    console.log(object[values]);

  }
  
  // YOUR CODE ABOVE HERE //
}





/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  // convert object into array and then use length method to identify total number of value pairs
  var obj2arr = Object.keys(object)

  console.log(obj2arr.length);
  
  return obj2arr.length;

  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  

    // for(let values in object){
    
    //   object[values].reverse();

    //     reverV.forEach(key => {
    //       console.log(key, info[key]);
    //     });

    }


  
  // YOUR CODE ABOVE HERE //
// }





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
