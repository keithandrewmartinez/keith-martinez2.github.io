//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
   // Use method Object.values() to convert object values into an array
        return Object.values(object);
}

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
// Use method Object.keys() and join with space to concat with space
        return Object.keys(object).join(" ")
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var objectOne = {a: "one", b: "two", ponies: "crayons", something: {}, dingle: "dangle"};
var objectTwo = {c: "three", boolean: false, d: "four", crayons: "ponies", dangle: "dingle"};


function valuesToString(object) {
// Must create array to store output of values from object
var values = []
// Iterate through each key of object to output string values with for loop
for (let key in object){
  //Need to test each object value for typeof === "string"
  if (typeof object[key] === "string") {
      // If value is of type string, push that key's value to values (array)
      values.push(object[key]);
  }
} 

// console.log(values);   // [ 'one', 'two', 'crayons', 'dangle' ]
// having correctly accessed the values of the values array, push them to value using join (with single space) method to create single string with all values
return values.join(' ');
}

console.log(valuesToString(objectOne))  //one two crayons dangle
console.log(valuesToString(objectTwo))  //three four ponies dingle

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
  if (Array.isArray(collection)){
        return 'array';
    } else if (typeof collection === 'object')
    {
    return 'object'
}
}
//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {

  // take string of one word and return with only first letter capitalized 
  // using toUpperCase method, but because that method will return all letters capitalized, 
  // need to specify that it only access the character at index 0 of string (does not need brackets to access), but then
  // must concatenate remaining characters from letter at index 1 using slice method 
  return string.charAt(0).toUpperCase() + string.slice(1);
}


//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
// Take string of words, return all words with first letter capitalized
// Create array to store all words making them available for individual manipulation
let allWords = [ ];
// Use string method split() to separate words where indicated by " " to output to array
allWords = string.split(" ");
// console.log(allWords) // [ 'please', 'excuse', 'my', 'dear', 'aunt', 'sally' ]
// Next, iterate through each word/index in the array to capitalize each word individually using a for-loop
for (let i = 0; i < allWords.length; i++){
// On array, allWords, use toUpperCase string method and charAt method at 0 to mutate first character of each word to uppercase
allWords[i] = allWords[i].charAt(0).toUpperCase() + allWords[i].substring(1); 
// Or can utilize previously constructed function within this one to simplify the with abstraction
// allWords[i] = capitalizeWord(allWords[i]);
}
return allWords.join(" ");
}



//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
// Take an object with a name property and return 'Welcome <Name>!"
// Apply string methods using dot notation and .toUpperCase and .charAt for first letter of name property 
// appending remaining characters of string with slice at index 1
let welcomeName = object.name.charAt(0).toUpperCase() + object.name.slice(1)
// return complete welcome statement with concatenation to capitalized name
return "Welcome " + welcomeName + "!";
// Alternatively, can utilize previously created function abstracting the repeated methods
// return capitalizeAllWords("Welcome " + object.name + "!")

}


//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    // capitalizeAllWords function capitalizes first character of name and species, each properties of object
    // concatenation of strings with string addition operator provides finished statement
return capitalizeAllWords(object.name) + " is a " + capitalizeAllWords(object.species)
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
// Given object,
// If object has noises array, return them as a string separated by a space, 
// Using conditional chain, evaluate if object.noises array exists using dot notation 
// AND if length of noises array is greater than 0
 if ( object.noises && object.noises.length > 0 ) {
// If so, return concatenated noises from array using join method with single space as separator
    return object.noises.join(" ");
// If there are no noises, return 'there are no noises'
 } else 
 // Since the two conditions which return the same statement, 
 // are already confirmed by the inverse of the initial if statement 
 // else statement, can return alternative statement
   
    return "there are no noises"
    
}


//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//take string of words and a word as arguments of function hasWord;
// function returns true if <word> is in <string of words>, otherwise returns false
var data = "This is a super awesome string of words";
function hasWord(string, word) {
// check if given word present in string provided using includes array method
// if word is present in string, will return true, else will return false
   return string.includes(word);
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Function should take a name and an object and then
// add the name to the object's friends array, then return the object

function addFriend (name, object) {
// Can use dot notation and push method to add name to friend's array of object
            object.friends.push(name);
            return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
// Should take a name and an object and 
// return true if <name> is a friend of <object> and return false otherwise
// need to first evaluate that friends object exists, if not, return false
// conditional test evaluates if present or not, if undefined with exactly equals evaluation operator
            if(object.friends === undefined){
                return false;
// if present, includes array method identifies if name passed is present in name object
             } else {
                return  object.friends.includes(name)
                }
 }


//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

    var data = [
      {name: "Jimmy", friends:["Sara", "Liza"]},
      {name: "Bob", friends:[]},
      {name: "Liza", friends: ["Jimmy"]},
      {name: "Sara", friends: ["Jimmy"]}
    ];

// Function nonFriends takes a name (string) and a list of people (array), 
// and return a list of all the names that <name> is not friends with

function nonFriends(name, array) {
// Will push identified non-friends into new array, so declared below
  let newArray = [];
// Then can iterate over passed array of function to check for inidivudals that are not friends
    for (var i = 0; i < array.length; i++) {
// Use conditional chain to check if person at current index is NOT equal to name 
// and doesn't include name, using dot notation
// Using bang operator to return "true", if person checked is identified as NOT friend
        if (array[i].name !== name && !array[i].friends.includes(name)) {
// If so (not a friend), then push the name of person at index of i into newArray
            newArray.push(array[i].name);
        }
    }
// After completing all iterations and loops, can now return completed, updated list of non-friends
    return newArray;
}



//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// function with 3 parameters; an object, a key and a value. 
// Updates the property <key> on <object> with new <value>. 
// If <key> does not exist on <object>, create it.

function updateObject(object, key, value) {
// Must access the value at the key value pair of object, 
// and will update property key or create it
        object[key] = value;
    // function should return updated object
        return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

// function removeProperties has two parameters; takes an object and an array of strings. 
// Removes any properties on <object> that are listed in <array>
   
function removeProperties(object, array) {
   // Create for-loop to iterate through array to identify 
   // and remove properties of object listed in array
        for (var i = 0; i < array.length; i++) {
    // Use delete command along with bracket notation to access and identify if index of array exists on object
    // Structuring bracket notation with delete, allows confirms existence and location of matching property for deletion
          delete object[array[i]];
        }
        // return statement indicates remaining properties of object (after function's execution of deletion)
        return object;
      }


//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Function dedup takes an array and returns an array with all duplicates removed

function dedup(array) {
// Combining the spread method (iterates throughout each element of array) and Set object (establishes "set" as a collection of items that are unique, cannot be repeated)
let postSpreadSet = [...new Set(array)];
return postSpreadSet; // Output would create new array, distilling singular elements in an array without any duplicates
}



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}