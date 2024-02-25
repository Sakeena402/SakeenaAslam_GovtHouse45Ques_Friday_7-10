"use strict";
// Qno20:Think of something you could store in a array. For example,
// you could make a list of mountains, rivers, countries, cities, languages, 
// or anything else you’d like. Write a program that creates a list containing these items.
Object.defineProperty(exports, "__esModule", { value: true });
var read = require("readline-sync");
var countries = [];
function addElem() {
    console.log('Add Elements in the list');
    var x = read.question("please write the country of any name ");
    while (x != '') {
        countries.push(x);
        x = read.question("please write the country of any name ");
    }
}
function showList() {
    countries.forEach(function (element) {
        console.log(element);
    });
}
addElem();
showList();
/*
tsc tsQ20.ts
node tsQ20.js
*/ 
