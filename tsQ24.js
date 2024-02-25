// Qno24:More Conditional Tests: You don’t have to limit the number of tests you 
// create to 10. If you want to try more comparisons, write more tests. Have at least 
// one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, 
// greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
// Tests for equality and inequality with strings
console.log("Is 'apple' equal to 'apple'? I predict False. Answer: ".concat('apple' === 'apple'));
console.log("Is 'apple' equal to 'banana'? I predict False. Answer: ".concat('apple' === 'banana'));
console.log("Is 'apple' not equal to 'banana'? I predict True. Answer: ".concat('apple' !== 'banana'));
// Tests using the lower case function
console.log("Is 'HELLO' equal to 'hello' after converting to lowercase? I predict True. Answer: ".concat('HELLO'.toLowerCase() === 'hello'));
console.log("Is 'HELLO' equal to 'hello' If i donot covert it to lowercase? I predict False. Answer: ".concat('HELLO' === 'hello'));
// Numerical tests
console.log("Is 10 equal to 20? I predict False. Answer: ".concat(10 === 20));
console.log("Is 10 not equal to 20? I predict True. Answer: ".concat(10 !== 20));
console.log("Is 20 greater than 10? I predict True. Answer: ".concat(20 > 10));
console.log("Is 10 less than 20? I predict True. Answer: ".concat(10 < 20));
console.log("Is 10 greater than or equal to 10? I predict True. Answer: ".concat(10 >= 10));
console.log("Is 10 less than or equal to 20? I predict True. Answer: ".concat(10 <= 20));
// Tests using "and" and "or" operators
console.log("Is (5 > 3) and (10 < 15) true? I predict True. Answer: ".concat((5 > 3) && (10 < 15)));
console.log("Is (5 === 3) or (10 === 10) true? I predict True. Answer: ".concat((5 === 3) || (10 === 10)));
// Test whether an item is in an array
var myArray = ["apple", "banana", "orange"];
console.log("Is 'banana' in the array? I predict True. Answer: ".concat(myArray.includes("banana")));
// Test whether an item is not in an array
console.log("Is 'grape' not in the array? I predict True. Answer: ".concat(!myArray.includes("grape")));
/*
tsc tsQ24.ts
node tsQ24.js
*/ 
