// Qno37:Large Shirts: Modify the make_shirt() function so that shirts are large 
//by default with a message that reads I love TypeScript. Make a large shirt and 
//a medium shirt with the default message, and a shirt of any size with a different message.

function make_shirt(size: String = 'large', message: String = 'I love TypeScript'): void {
    console.log(`You have ordered a ${size} size shirt with the message: "${message}".`);
}

make_shirt();
make_shirt('medium');
make_shirt('small', 'Hello, World!');
//make_shirt(message='Hello, ISTANBUL!');
make_shirt(undefined, 'Hello, ISTANBUL!');


/* 
tsc tsQ37.ts   
node tsQ37.js
*/ 
            