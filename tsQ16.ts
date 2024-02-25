// Qno16:More Guests: You just found a bigger dinner table, so now more space is available. 
// Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your 
// program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new 
// guest to the end of your list. • Print a new set of invitation messages, one for each
//  person in your list.

import * as readlineSync from 'readline-sync';

let guestList:String[]=[];
function invitingGuest():void{
    let x:String=readlineSync.question("Who would you like to invite? Please Enter the name  ");
    while(x!='' || guestList.length<3){
    if(x!= ''){
        guestList.push(x);
        x=readlineSync.question("Who would you like to invite? Please Enter the name ");
    }
    else if (x=='' && guestList.length<3 ) {
        console.log('You need to invite atleast 3 guests for dinner'); 
        x=readlineSync.question("Who would you like to invite? Please Enter the name ");
    }
    else if(x==''&& guestList.length>=3){
        console.log('Thank You');
        break;
    }
    else{
        console.log('Thank You please continue');
    }
    }
    console.log('Your Guestlist is :'+guestList)
    guestList.forEach((val)=>{
        console.log(`I would like invite you on dinner Mr/Mrs/Ms ${val}`);
    });
}
invitingGuest();

let checkGuest:String=(readlineSync.question("Is there any guest who is not comming?if yes enter 'y'else 'n' ")).toLowerCase();
if(checkGuest=='y'){
    console.log('Sorry to hear that Please invite another person in place of that guest');
    console.log('First Remove the Guest form the list');
    removeGuest();
} else{
console.log('Enjoy Your Dinner');
}
console.log('Enjoy Your Dinner');
function removeGuest():void{
    console.log(`Here is the List of your guests  ${guestList}`);
    let check:String='y';
    while(check=='y'){
    let guestToRemove:String=(readlineSync.question('Please Enter the Name of Your Guest who is not comming ')).toLowerCase();
    let remove:boolean=false;
    for(let guest of guestList){
        if(guest.toLowerCase()===guestToRemove){
           // guestList.splice(guestList.indexOf(guest),1);
           let removedPersonIndex:number=guestList.indexOf(guest);
           addInPlaceOf(guest,removedPersonIndex);
           
            console.log(`The guest has been removed from the list ${guest} Thanks`);
            console.log(`Here is the List of your guests after removing ${guestList} `);
            remove=true;
            break;
        }
    }
    if(remove!=true){
        console.log(`Sorry ${guestToRemove} is not in the List`);  
    }
    check=(readlineSync.question("Do you want to remove any other guest ?if yes enter 'y'else 'n': ")).toLowerCase();
}}
function addInPlaceOf(val:String,index:number):void{
let removedPersonName:String=val;
let removedPersonIndex:number=index;
let personToAdd: String=readlineSync.question(`Please Enter the name of the guest you want to invite in place of ${removedPersonName} `);
guestList.splice(removedPersonIndex,1,personToAdd);

}
console.log('CONGRATULATIONS You just found a bigger dinner table, so now more space is available you can invite more people to dinner.');
function addMoreGuest():void{
let addStart: String=readlineSync.question(`Please Enter the name tO add at the start of the list`);
guestList.unshift(addStart);
console.log("New List "+guestList);
let addMiddle: String=readlineSync.question(`Please Enter the name t0 add in the middle of the list`);

let middleIndex:number=Math.floor(guestList.length/2);
guestList.splice(middleIndex,0,addMiddle);
console.log("Updated List "+guestList);
let addEnd: String=readlineSync.question(`Please Enter the name to Add At The End Of The List:`);
guestList.push(addEnd);
console.log("Final Updated List "+guestList)
console.log('Now we are Finally done');
guestList.forEach((val)=>{
    console.log(`I would like invite you on dinner Mr/Mrs/Ms ${val}`);
});


}
addMoreGuest();
/* 
tsc tsQ16.ts   
node tsQ16.js
*/