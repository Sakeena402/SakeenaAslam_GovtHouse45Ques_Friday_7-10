// Qno45:Cars: Write a function that stores information about a car in a Object. 
// The function should always receive a manufacturer and a model name. 
// It should then accept an arbitrary number of keyword arguments. Call 
// the function with the required information and two other name-value pairs, 
// such as a color or an optional feature. Print the Object that’s returned to 
// make sure all the information was stored correctly.

function carInfo(manufacturer: string, model: string, ...features: Record<string,any>[]): void {
    let carDetails: Record<string, any> = {
        manufacturerName: manufacturer,
        modelName: model,
        ...features 
    };

    console.log(carDetails);
}

carInfo("Honda", "Camry");


carInfo("Toyota", "Camry", { color: "red" }, { year: 2022 }, { sunroof: true });
carInfo("Civic", "Camry", { color: "red" , tyreColor:"black"}, { year: 2020 }, { sunroof: true });


/* 
tsc tsQ45.ts   
node tsQ45.js
*/ 