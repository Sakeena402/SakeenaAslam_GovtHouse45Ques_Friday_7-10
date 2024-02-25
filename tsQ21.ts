
// Qno21:They think of something you could store in a TypeScript Object. Write a program 
// that creates Objects containing these items.

let person1={
    name:'Amna',
    age:24,
    address:'Khudadad Colony',
}
console.log(person1);

let p2={
    name:'',
    age:0,
    address:'',
}
p2.name='AHMED'
p2.age=24
p2.address='KHUDDADAD COLONY'
console.log(p2);

class Person{
    name:string;
    age:Number;
    address:string;
    constructor(name:string,age:number,address:string){
        this.name=name;
        this.age=age;
        this.address=address;
    }
}
let objPerson = new Person('Muhammad Asif',35,'Lahore');

console.log(objPerson);
/* 
tsc tsQ21.ts   
node tsQ21.js
*/  