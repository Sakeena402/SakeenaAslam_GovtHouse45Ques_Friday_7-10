// Qno23:Conditional Tests: Write a series of conditional tests. Print a statement describing 
// each test and your prediction for the results of each test. Your code should look something like this:

// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')

// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.

let arr=[1,2,3];
let obj={
    myName:"Sakeena",
    fName:'Aslam',
    age:22,
}
let {myName,fName,age}=obj;
console.log(`Is myName == 'Amna' ? I predict False.Answer : ${myName == 'Amna'}`);
console.log(`Is myName == 'Sakeena' ? I predict True.Answer : ${myName == 'Sakeena'}`);
console.log(`Is fName == 'Aslam' ? I predict True.Answer : ${fName == 'Aslam'}`);
console.log(`Is age == 20 ? I predict False.Answer : ${age == 20}`);
console.log(`Is age == 22 ? I predict True.Answer : ${age == 22}`);
console.log(`Is 20+30 == 60 ? I predict False.Answer : ${20+30}`);
console.log(`Is 1+2 == 5 ? I predict False.Answer : ${1+2}`);
console.log(`Is 2*3 and 3*2 gives same answer? I predict True. 2*3 = ${2*3} and 3*2 = ${3*2} Answer: ${2*3 == 3*2}`);
console.log(`Does arr contain 5? I predict False. Answer : ${arr.includes(5)}`);
console.log(`Does arr contain 1? I predict True. Answer : ${arr.includes(1)}`);


/* 
tsc tsQ23.ts   
node tsQ23.js
*/ 