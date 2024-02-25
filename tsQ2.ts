// Qno2 :Personal Message: Store a person’s name in a variable,
//  and print a message to that person. Your message should be simple,
//  such as, “Hello Eric, would you like to learn some Python today?”


import * as readlineSync from 'readline-sync';
const printMyName=(x:String):void =>{console.log(`Hello ${x} would you like to learn some Python today?`)};

let x:String=readlineSync.question("Enter your name ");
while(x!=''){
printMyName(x);
x=readlineSync.question("Enter your name, If you want to quit just press enter.");
}
// tsc TypeScriptQno2.ts
// node TypeScriptQno2.js  