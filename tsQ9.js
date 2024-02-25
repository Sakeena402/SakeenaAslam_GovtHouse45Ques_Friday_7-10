"use strict";
// Qno9:Favorite Number: Store your favorite number in a variable. 
// Then, using that variable, create a message that reveals your favorite number. Print that message.
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var fav_no = readlineSync.question("Enter Your Favourite Number ");
var msg = "You have chosen the number ".concat(fav_no);
console.log(msg);
