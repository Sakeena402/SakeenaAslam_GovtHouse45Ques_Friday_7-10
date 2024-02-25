"use strict";
// Qno2 :Personal Message: Store a person’s name in a variable,
//  and print a message to that person. Your message should be simple,
//  such as, “Hello Eric, would you like to learn some Python today?”
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var printMyName = function (x) { console.log("Hello ".concat(x, " would you like to learn some Python today?")); };
var x = readlineSync.question("Enter your name ");
while (x != '') {
    printMyName(x);
    x = readlineSync.question("Enter your name, If you want to quit just press enter.");
}
// tsc TypeScriptQno2.ts
// node TypeScriptQno2.js  
