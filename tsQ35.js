//Qno35:Animals: Think of at least three different animals that have a
// common characteristic. Store the names of these animals in a list,
// and then use a for loop to print out the name of each animal. •
//Modify your program to print a statement about each animal, such as A dog would 
//make a great pet. • Add a line at the end of your program stating what these animals 
//have in common. You could print a sentence such as Any of these animals would make a great pet
var animals = ['dog', 'cat', 'rabbit'];
console.log("Animals:");
for (var _i = 0, animals_1 = animals; _i < animals_1.length; _i++) {
    var animal = animals_1[_i];
    console.log(animal);
}
console.log("\nCharacteristics:");
for (var _a = 0, animals_2 = animals; _a < animals_2.length; _a++) {
    var animal = animals_2[_a];
    switch (animal) {
        case 'dog':
            console.log("A ".concat(animal, " would make a great pet."));
            break;
        case 'cat':
            console.log("".concat(animal, " is very fluffy.I have a ").concat(animal, " and she is my best friend."));
            break;
        case 'rabbit':
            console.log("A ".concat(animal, " is cute and they are blind."));
            break;
        default:
            console.log("No information available for ".concat(animal, "."));
    }
}
console.log("\nAny of these animals would make a great pet.\nwhat would choose for your self?\nI have a cat her name is Luna.");
/*
tsc tsQ35.ts
node tsQ35.js
*/
