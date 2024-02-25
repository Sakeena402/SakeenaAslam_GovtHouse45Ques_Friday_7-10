//Qno35:Animals: Think of at least three different animals that have a
// common characteristic. Store the names of these animals in a list,
// and then use a for loop to print out the name of each animal. •
//Modify your program to print a statement about each animal, such as A dog would 
//make a great pet. • Add a line at the end of your program stating what these animals 
//have in common. You could print a sentence such as Any of these animals would make a great pet

const animals: String[] = ['dog', 'cat', 'rabbit'];

console.log("Animals:");
for (let animal of animals) {
    console.log(animal);
}

console.log("\nCharacteristics:");
for (let animal of animals) {
    switch (animal) {
        case 'dog':
            console.log(`A ${animal} would make a great pet.`);
            break;
        case 'cat':
            console.log(`${animal} is very fluffy.I have a ${animal} and she is my best friend.`);
            break;
        case 'rabbit':
            console.log(`A ${animal} is cute and they are blind.`);
            break;
        default:
            console.log(`No information available for ${animal}.`);
    }
}

console.log("\nAny of these animals would make a great pet.\nwhat would choose for your self?\nI have a cat her name is Luna.");

/* 
tsc tsQ35.ts   
node tsQ35.js
*/ 
