// Qno18:Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order 
// has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. 
// Print the list to show that its order has changed.

import * as readlineSync from 'readline-sync';

let placeToVisit:String[]=[];
let sortedList:any;
let reversedList:any;
function addPlacesToVisit():void{
    let x:String=readlineSync.question("Write a place name in the world you'd like to visit  ");
    while(x!='' || placeToVisit.length<5){
    if(x!= ''){
        placeToVisit.push(x);
        x=readlineSync.question("Write a place name places in the world you'd like to visit ");
    }
 
    else if (x=='' && placeToVisit.length<5 ) {
        console.log('You need to invite atleast 5 guests for dinner'); 
        x=readlineSync.question("Who would you like to invite? Please Enter the name ");
    }
    else if(x==''&& placeToVisit.length>=5){
        console.log('Thank You');
        break;
    }
    else{
        console.log('Thank You please continue');
    }
}
// • Print your array in its original order.
    console.log(`Here is the List of your places you want to visit   ${JSON.stringify(placeToVisit)}`);
    console.log('now we will arange it in a alphabetical order');

    sortedList=[...placeToVisit].sort();
 // • Print your array in alphabetical order without modifying the actual list.
    console.log(`Here is the alphabetical ordered list ${JSON.stringify(sortedList)}`);
// • Show that your array is still in its original order by printing it.
    console.log(`Here is the original list without being modified ${JSON.stringify(placeToVisit)}`);

// • Print your array in reverse alphabetical order without changing the order of the original list.
reversedList=[...placeToVisit].reverse();
console.log(`Here is the reversed ordered list ${JSON.stringify(reversedList)}`);
// • Show that your array is still in its original order by printing it again.
console.log(`Here is the original list without being modified ${JSON.stringify(placeToVisit)}`);

// • Reverse the order of your list. Print the array to show that its order has changed.
placeToVisit.reverse();
console.log(`here is the reversed orignal list ${JSON.stringify(placeToVisit)}`);

// • Reverse the order of your list again. Print the list to show it’s back to its original order.
placeToVisit.reverse();
console.log(`now we re-reversed last  reversed orignal list ${JSON.stringify(placeToVisit)}`);
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order 
placeToVisit.sort();
console.log(`here is the sort ed orignal list ${JSON.stringify(placeToVisit)}`);

// • Sort to change your array so it’s stored in reverse alphabetical order. 
placeToVisit.sort().reverse();
// Print the list to show that its order has changed.
console.log(`here is the reversed sorted orignal list ${JSON.stringify(placeToVisit)}`);

}
addPlacesToVisit(); 
/* 
tsc tsQ18.ts   
node tsQ18.js
*/