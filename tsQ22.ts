// Qno22:Intentional Error: If you haven’t received an array index error in one of your 
// programs yet, try to make one happen. Change an index in one of your programs to produce an 
// index error. Make sure you correct the error before closing the program.
/* 
tsc tsQ22.ts   
node tsQ22.js
*/
import * as readlineSync from 'readline-sync';

let arr:number[]=[1,2,3,2,7];
function accessElem(){
    let x:number=Number(readlineSync.question("Enter the index no to access the value "));
    while(x!=-1){
        try{
            console.log(arr[x])
        }catch(e){
            console.error(`Error: ${e}`);    }
      
      
        x=Number(readlineSync.question("Enter the index no to access the value "));
    }}
    accessElem();