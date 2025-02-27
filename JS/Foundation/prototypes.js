// JavaScript follows a prototype-based system, where objects inherit properties and methods from other objects through prototypes. This prototype mechanism plays a key role in how JavaScript handles inheritance and object relationships.

// In JavaScript, the prototype is a container for methods and properties. Prototype in general can be understood as a mould and all its instances can be considered as the car made from it.


let computer = {
    cpu: 12,
}
let lenovo = {
    screen: "HD",
    __proto__: computer
}
let tomHardware = {}

// console.log(`lenovo`, lenovo.__proto__);


let genericCar = {
    tyres: 4,
}
let tesla = {
    driver: "AI",
}
Object.setPrototypeOf(tesla, genericCar)

// console.log(`tesla`, tesla.tyres);
console.log(`tesla`, Object.getPrototypeOf(tesla));

// console.log(tesla.hasOwnProperty('driver'));

