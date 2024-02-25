"use strict";
// QNO5:Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name
//  in a variable called famous_person. Then compose your message and store it 
//  in a new variable called message. Print your message.
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var famous_person = readlineSync.question("Enter a name of famous person you admire");
var message = readlineSync.question("Enter a message of the mentioned person");
while (famous_person != '' || message != '') {
    console.log("\"".concat(famous_person, "\" once said, \"").concat(message, "\" "));
    famous_person = readlineSync.question("Enter a name of famous person you admire, If you want to quit just press enter.");
    message = readlineSync.question("Enter a message of the mentioned person, If you want to quit just press enter.");
}
//  tsc tsQ5.ts 
// node tsQ5.js
