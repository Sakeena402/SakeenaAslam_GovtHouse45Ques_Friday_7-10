// Qno20:Think of something you could store in a array. For example,
// you could make a list of mountains, rivers, countries, cities, languages, 
// or anything else you’d like. Write a program that creates a list containing these items.

import * as read from 'readline-sync';

let countries:String[]=[];
function addElem():void{
console.log('Add Elements in the list');
let x:String=read.question(`please write the country of any name `)
while(x!=''){
    countries.push(x);
        x=read.question("please write the country of any name ");
    
}}
function showList():void {
    countries.forEach(element => {
        console.log(element);
        
    });
}
addElem();
showList();
/* 
tsc tsQ20.ts   
node tsQ20.js
*/