// Qno21:They think of something you could store in a TypeScript Object. Write a program 
// that creates Objects containing these items.
var person1 = {
    name: 'Amna',
    age: 24,
    address: 'Khudadad Colony',
};
console.log(person1);
var p2 = {
    name: '',
    age: 0,
    address: '',
};
p2.name = 'AHMED';
p2.age = 24;
p2.address = 'KHUDDADAD COLONY';
console.log(p2);
var Person = /** @class */ (function () {
    function Person(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    return Person;
}());
var objPerson = new Person('Muhammad Asif', 35, 'Lahore');
var objPerson1 = new Person('Muhammad Arif', 30, 'karachi');
console.log(objPerson);
/*
tsc tsQ21.ts
node tsQ21.js
*/ 
