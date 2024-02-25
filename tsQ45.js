// Qno45:Cars: Write a function that stores information about a car in a Object. 
// The function should always receive a manufacturer and a model name. 
// It should then accept an arbitrary number of keyword arguments. Call 
// the function with the required information and two other name-value pairs, 
// such as a color or an optional feature. Print the Object that’s returned to 
// make sure all the information was stored correctly.
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function carInfo(manufacturer, model) {
    var features = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        features[_i - 2] = arguments[_i];
    }
    var carDetails = __assign({ manufacturerName: manufacturer, modelName: model }, features);
    console.log(carDetails);
}
carInfo("Honda", "Camry");
carInfo("Toyota", "Camry", { color: "red" }, { year: 2022 }, { sunroof: true });
carInfo("Civic", "Camry", { color: "red", tyreColor: "black" }, { year: 2020 }, { sunroof: true });
/*
tsc tsQ45.ts
node tsQ45.js
*/ 
