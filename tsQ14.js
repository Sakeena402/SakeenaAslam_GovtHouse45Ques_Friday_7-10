"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Qno14:Guest List: If you could invite anyone, living or deceased, to dinner,
//  who would you invite? Make a list that includes at least three people 
//  you’d like to invite to dinner. Then use your list to print a message to 
//  each person, inviting them to dinner.
var readlineSync = require("readline-sync");
var guestList = [];
function invitingGuest() {
    var x = readlineSync.question("Who would you like to enjoy? Please Enter the name  ");
    var y = 'y';
    while (y == 'y') {
        guestList.push(x);
        y = (readlineSync.question("if you want to continue adding please write y esle n ")).toLowerCase();
        if (y == "n" && guestList.length < 3) {
            console.log('You need to invite atleast 3 guests for dinner');
            y = 'y';
        }
        else if (y == 'n' && guestList.length >= 3) {
            console.log('Thank You');
            break;
        }
        else {
            console.log('Thank You please continue');
        }
        x = readlineSync.question("Who would you like to enjoy? Please Enter the name ");
    }
    console.log('Your Guestlist is :' + guestList);
    guestList.forEach(function (val) {
        console.log("I would like invite you on dinner Mr/Mrs. ".concat(val));
    });
}
invitingGuest();
//  tsc tsQ14.ts 
// node tsQ14.js 
