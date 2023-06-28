// #!/usr/bin/env node

'use strict';

/** 
 * IN CLASS EXERCISE: Greeter App
 *
 * Using if, else-if and else, AND depending on the hour of the day, 
 * write a greeting program that prints a greeting to the screen like so: 
 *
 * // hour is 0-11
 * Good Morning!
 *
 * // hour is 12-16
 * Good Afternoon! 
 *
 * // hour is 17-21
 * Good Evening!
 *
 * // hour is 22-24 
 * Good Night!
 *
 * TIPS: 
 * 
 *   a. At what threshold does morning become afternoon? What comparison 
 *      can be used to test that the hour is within the morning threshold. 
 *      It's best to be consistant and use the SAME type of comparison for 
 *      each threshold. 
 *   
 *   b. Does the last threshold even need an else-if?
 * 
 *   c. The tests are CASE sensitive, so you MUST console.log('Good Night!') with
 *      the exact case.
 */

function greeter(hour) {
 // YOUR CODE BELOW HERE //


// Using an if-else if-else conditional chain, identify and return from the function the appropriate greeting corresponding to the time of day
// I: Time (Approximating to hour, for simplicity)
// O: Greeting (that corresponds to range of hours should be returned
// C: For simplicity, onlu the integer of the hour (without minutes, decimals, fractions, will be taken into account for now)
// (Ignoring the minutes, in this case provides a foundational approach for testing the validity of the logic)
// E: Time Zone issues?
    
// Using conditional chain, evaluate if the hour corresponds to morning? (0-11), if so, return Good Morning!

let result;

    if (hour < 12) {
        result = "Good Morning!";

// If it does not, continue to check if it would fall within the range of afternoon hours
}   else if (hour < 17) {
        result = "Good Afternoon!";

//If not afternoon either, check evening hours
}   else if (hour < 22) {
        result = "Good Evening!";

// Ultimately, if no other condition returns, then we can assume it is night time (or between 22-24)
}  else {
        result = "Good Night!";
}
console.log(result);
return result;


    // YOUR CODE ABOVE HERE //
}

/*
 * To test our greeter when developing, we need to fake some input data, ie, 
 * the hour, so just change the input value to check your work.
 * 
 * In a more realistic setting, you might do something like this to get the 
 * actual system hour:
 *
 * var today = new Date();
 * var hour = today.getHours();
 */

greeter(11);



// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.greeter = greeter;
}