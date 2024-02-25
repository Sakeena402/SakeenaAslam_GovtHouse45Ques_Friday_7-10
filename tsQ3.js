"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
// Qno3: Name Cases: Store a person’s name in a variable, and then print that 
// person’s name in lowercase,uppercase, and titlecase
var x = readlineSync.question("Enter your name ");
var lowerCase = function (x) {
    var y;
    y = x.toLowerCase();
    console.log("The lower case of the given name is ".concat(y));
};
var upperCase = function (x) {
    var y;
    y = x.toUpperCase();
    console.log("The lower case of the given name is ".concat(y));
};
var titleCase = function (x) {
    var y = x.split(' ')
        .map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); })
        .join(' ');
    console.log("The lower case of the given name is ".concat(y));
};
while (x != '') {
    lowerCase(x);
    upperCase(x);
    titleCase(x);
    x = readlineSync.question("Enter your name, If you want to quit just press enter.");
}
// tsc TypeScriptQno3.ts
// node TypeScriptQno3.js
