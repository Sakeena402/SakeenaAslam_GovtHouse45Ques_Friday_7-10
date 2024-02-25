// Qno9:Favorite Number: Store your favorite number in a variable. 
// Then, using that variable, create a message that reveals your favorite number. Print that message.

import * as readlineSync from 'readline-sync';

let fav_no:String=readlineSync.question("Enter Your Favourite Number ");
let msg=`You have chosen the number ${fav_no}s`;  
console.log(msg);
