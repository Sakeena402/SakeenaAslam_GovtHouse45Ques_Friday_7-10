"use strict";
// Qno19:Dinner Guests: Working with one of the programs from Exercises 
// 14 through 18, print a message indicating the number of people you are inviting to dinner.
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var guestList = [];
function invitingGuest() {
    var x = readlineSync.question("Who would you like to invite? Please Enter the name  ");
    while (x != '' || guestList.length < 3) {
        if (x != '') {
            guestList.push(x);
            x = readlineSync.question("Who would you like to invite? Please Enter the name ");
        }
        else if (x == '' && guestList.length < 3) {
            console.log('You need to invite atleast 3 guests for dinner');
            x = readlineSync.question("Who would you like to invite? Please Enter the name ");
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
console.log('Enjoy Your Dinner');
function removeGuest() {
    console.log("Here is the List of your guests   ".concat(JSON.stringify(guestList)));
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
                console.log("Here is the List of your guests after removing  ".concat(JSON.stringify(guestList), " "));
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
console.log('CONGRATULATIONS You just found a bigger dinner table, so now more space is available you can invite more people to dinner.');
function addMoreGuest() {
    var addStart = readlineSync.question("Please Enter the name tO add at the start of the list");
    guestList.unshift(addStart);
    console.log("New List " + guestList);
    var addMiddle = readlineSync.question("Please Enter the name t0 add in the middle of the list");
    var middleIndex = Math.floor(guestList.length / 2);
    guestList.splice(middleIndex, 0, addMiddle);
    console.log("Updated List " + guestList);
    var addEnd = readlineSync.question("Please Enter the name to Add At The End Of The List:");
    guestList.push(addEnd);
    console.log("Final Updated List " + guestList);
    console.log('Now we are Finally done');
    guestList.forEach(function (val) {
        console.log("I would like invite you on dinner Mr/Mrs/Ms ".concat(val));
    });
}
addMoreGuest();
//print a message indicating the number of people you are inviting to dinner.
console.log("I invited total ".concat(guestList.length, " people in the dinner and here are they ").concat(JSON.stringify(guestList)));
/*
tsc tsQ19.ts
node tsQ19.js
*/ 
