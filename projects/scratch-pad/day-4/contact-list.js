// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
// function has three parameters (id,nameFirst, nameLast)
function makeContact(id, nameFirst, nameLast) {

    // this factory function should return a contact object
let contact = {};
    contact.id = id,
    contact.nameFirst = nameFirst,
    contact.nameLast = nameLast
    console.log(contact)
//console.log? what information does it provide? should be key value pairs of contact object
}

///should console.log be inside or outside of the function? what is the difference?
console.log(contact);

//once contact is confirmed correctly logged within function, can return the contact as output of function

return contact;

//Sample contact input then of makeContact(1, 'Max', 'Gaudin'); 
        // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}

// makeContactList is a contact aggregator, so need to have something that adds contacts to it, 
//evaluates the inventory of contacts (total number of contacts), and can edit the contacts within it 

function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    //contacts is a variable that will hold the contacts, but what data type is it of? if it holds contacts
    //and is a list, would more likely be an array if the numbered order matters, or maybe another object if 
    // if it does not (what specific considerations would be helpful to decide?) With the first key of id,
    // the number might correspond to order of entry or oder of list, so can start with an array

    var contacts=[ ]
    
    return {
        // we implemented the length api for you //
        length: function() {               //this is a template for other methods
            return contacts.length; //this tells me how many contacts there are in the list
        }, //<---don't forget comma here that separates each object!
        //returning this function should provide an object that includes several methods (or functions connected
       // to the property of makeContactList) that includes: length, addContact, findContact,
        //and removeContact (all methods embedded within makeContactList)
        //addContact should take an object of contact and add it to list (var contacts), adding with push method
        addContact(contact){
            contacts.push(contact);
        },
        //next method is findContact: can use a conditional statement that compares an inputed string with
        //those contained, using a loop
        findContact(fullName){
            if('nameFirst' === contact.nameFirst && 'nameLast' === contact.nameFLast){ 
                return result}
            
                
                //**need to figure out segmentation of fullName and looping structure for test 
                //this would require a loop to check through each
            //each contact and evaluate whether it matches each string whether by first or last name, or both
        }, 
        removeContact(contact){
            //using .splice method on array, can remove inputed contact, but need to know the indice location,
            and repeat for end value for splice method
            contacts.splice(contact, contact)
        }


        }
    }
}




// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
