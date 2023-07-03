// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
    



// Write a function named fizzBuzz that prints numbers from 1 to 100 with several exceptions
// 1. for multiples of 3, print Fizz instead
// 2. for multiples of 5, print "Buzz"
// 3. for multiples of BOTH 3 and 5, print "FizzBuzz" (should test for this first)

    function fizzBuzz() {


// Create a (conditionally incrementing) For-loop that increments, while testing conditional chain for divisibility by 3 or 5

        for (let i = 1; i <= 100; i++) {

// First evaluate if i is perfectly divisible by BOTH 3 and 5, and prints "FizzBuzz" if it is, 
// print "FizzBuzz" 

          if (i % 15 === 0) {
            console.log("FizzBuzz");

// Then, check if i is perfectly divisible by 3, and print "Buzz" if so

          } else if (i % 3 === 0) {
            console.log("Fizz");

// Then, check if i is perfectly divisible by 5, and print "Buzz" if so

          } else if (i % 5 === 0) {
            console.log("Buzz");


          } else {
            console.log(i);
          }
        }
      }
      
      // Call the function
      fizzBuzz();




            // YOUR CODE GOES ABOVE HERE //
        }


        // DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
        if ((typeof process !== 'undefined') &&
            (typeof process.versions.node !== 'undefined')) {
            // here, export any references you need for tests //
            module.exports.fizzBuzz = fizzBuzz
        }