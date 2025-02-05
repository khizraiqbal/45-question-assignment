/*Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer 
and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required 
information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make
sure all the information was stored correctly.*/


interface Car {
    manufacturer: string;
    model: string;
    [key: string]: string; // Allow arbitrary additional properties
}

function createCar(manufacturer: string, model: string, ...extras: [string, string][]): Car {
    const car: Car = { manufacturer, model };
    extras.forEach(([key, value]) => {
        car[key] = value;
    });
    return car;
}

// Call the function with required and additional information
const myCar = createCar("Toyota", "Crown", ["color", "white"], ["year", "2023"]);
console.log(myCar);

