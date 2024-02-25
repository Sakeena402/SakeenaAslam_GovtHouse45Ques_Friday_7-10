"use strict";
// Qno15:Changing Guest List: You just heard that one of your guests can’t
// make the dinner, so you need to send out a new set of invitations. 
// You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program
//  stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the
//  new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var guestList = [];
function invitingGuest() {
    var x = readlineSync.question("Who would you like to invite? Please Enter the name  ");
    //let y:String='y';
    while (x != '' || guestList.length < 3) {
        //y=(readlineSync.question("if you want to continue adding please write y esle n ")).toLowerCase();
        if (x != '') {
            guestList.push(x);
            x = readlineSync.question("Who would you like to invite? Please Enter the name ");
        }
        else if (x == '' && guestList.length < 3) {
            console.log('You need to invite atleast 3 guests for dinner');
            x = readlineSync.question("Who would you like to invite? Please Enter the name ");
            // y='y';
        }
        else if (x == '' && guestList.length >= 3) {
            console.log('Thank You');
            break;
        }
        else {
            console.log('Thank You please continue');
        }
    }
    console.log('Your Guestlist is :' + guestList);
    guestList.forEach(function (val) {
        console.log("I would like invite you on dinner Mr/Mrs/Ms ".concat(val));
    });
}
invitingGuest();
var checkGuest = (readlineSync.question("Is there any guest who is not comming?if yes enter 'y'else 'n' ")).toLowerCase();
if (checkGuest == 'y') {
    console.log('Sorry to hear that Please invite another person in place of that guest');
    console.log('First Remove the Guest form the list');
    removeGuest();
}
else {
    console.log('Enjoy Your Dinner');
}
function removeGuest() {
    console.log("Here is the List of your guests  ".concat(guestList));
    var check = 'y';
    while (check == 'y') {
        var guestToRemove = (readlineSync.question('Please Enter the Name of Your Guest who is not comming ')).toLowerCase();
        var remove = false;
        for (var _i = 0, guestList_1 = guestList; _i < guestList_1.length; _i++) {
            var guest = guestList_1[_i];
            if (guest.toLowerCase() === guestToRemove) {
                // guestList.splice(guestList.indexOf(guest),1);
                var removedPersonIndex = guestList.indexOf(guest);
                addInPlaceOf(guest, removedPersonIndex);
                console.log("The guest has been removed from the list ".concat(guest, " Thanks"));
                console.log("Here is the List of your guests after removing ".concat(guestList, " "));
                remove = true;
                break;
            }
        }
        if (remove != true) {
            console.log("Sorry ".concat(guestToRemove, " is not in the List"));
        }
        check = (readlineSync.question("Do you want to remove any other guest ?if yes enter 'y'else 'n': ")).toLowerCase();
    }
}
function addInPlaceOf(val, index) {
    var removedPersonName = val;
    var removedPersonIndex = index;
    var personToAdd = readlineSync.question("Please Enter the name of the guest you want to invite in place of ".concat(removedPersonName, " "));
    guestList.splice(removedPersonIndex, 1, personToAdd);
}
//  tsc tsQ15.ts 
// node tsQ15.js 
