import * as readlineSync from 'readline-sync';

// Qno3: Name Cases: Store a person’s name in a variable, and then print that 
// person’s name in lowercase,uppercase, and titlecase
let x:String=readlineSync.question("Enter your name ");

const lowerCase=(x:String):void =>{
   let y:String;
    y= x.toLowerCase();
   console.log(`The lower case of the given name is ${y}`);
    };
const upperCase=(x:String):void =>{  
    let y:String;
    y= x.toUpperCase();
   console.log(`The lower case of the given name is ${y}`);};

const titleCase = (word: String): void => {
    let y:String = word.split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
   console.log(`The lower case of the given name is ${y}`); 
};

while(x!=''){
    lowerCase(x);
    upperCase(x);
    titleCase(x);
    x=readlineSync.question("Enter your name, If you want to quit just press enter.");
    }


// tsc TypeScriptQno3.ts
// node TypeScriptQno3.js