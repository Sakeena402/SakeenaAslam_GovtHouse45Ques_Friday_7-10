// Qno27:Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
var alien_color = 'green';
if (alien_color === 'green') {
    console.log("The player just earned 5 points for shooting the alien.");
}
else if (alien_color === 'yellow') {
    console.log("The player just earned 10 points.");
}
else if (alien_color === 'red') {
    console.log("The player just earned 15 points.");
}
console.log('Now Check conditon for the 2nd part');
alien_color = 'yellow';
if (alien_color === 'green') {
    console.log("The player just earned 5 points for shooting the alien.");
}
else if (alien_color === 'yellow') {
    console.log("The player just earned 10 points.");
}
else if (alien_color === 'red') {
    console.log("The player just earned 15 points.");
}
console.log('Now Check conditon for the 3rd part');
alien_color = 'red';
if (alien_color === 'green') {
    console.log("The player just earned 5 points for shooting the alien.");
}
else if (alien_color === 'yellow') {
    console.log("The player just earned 10 points.");
}
else if (alien_color === 'red') {
    console.log("The player just earned 15 points.");
}
/*
tsc tsQ27.ts
node tsQ27.js
*/
