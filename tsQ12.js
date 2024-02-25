// Qno12:Greetings: Start with the array you used in Exercise 11,
// but instead of just printing each person’s name, print a message to them.
// The text of each message should be the same, but each message should be personalized 
// with the person’s name.
var names = ["Sakeena", "Amna", "Ummul Qura"];
names.forEach(function (val) { console.log("Hello ".concat(val, " How are you?")); });
//tsc tsQ12.ts
//node tsQ12.js
