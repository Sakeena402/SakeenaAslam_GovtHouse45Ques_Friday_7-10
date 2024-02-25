"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Qno4:Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
// Albert Einstein once said, “A person who never made a mistake never tried anything new.”
var readlineSync = require("readline-sync");
var personName = readlineSync.question("Enter a name of famous person you admire");
var quote = readlineSync.question("Enter a quote of the mentioned person");
while (personName != '' || quote != '') {
    console.log("\"".concat(personName, "\" once said, \"").concat(quote, "\" "));
    personName = readlineSync.question("Enter a name of famous person you admire, If you want to quit just press enter.");
    quote = readlineSync.question("Enter a quote of the mentioned person, If you want to quit just press enter.");
}
//  tsc tsQ4.ts 
// node tsQ4.js
