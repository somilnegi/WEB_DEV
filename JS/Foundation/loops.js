// let sum=0;
// let i = 1;
// while (i <= 5) {
//     sum += i;
//     i++;
// }
// console.log(sum);


// let i = 5;
// let countdown=[]
// while (i > 0) {
//     countdown.push(i);
//     i--;
// }
// console.log(countdown);


// let teaCollection = []
// let tea;
// do {
//     tea=prompt("Enter you favourite tea , type stop to finish")
//     if (tea!=="stop") {
//         teaCollection.push(tea);
//     }
// } while (str !== "stop");
// console.log(teaCollection);


// let total = 0;
// let k = 1;
// do {
//     total += k;
//     k++;
// } while (k <= 3);
// console.log(total);


// let array=[2,4,6]
// let multipliedNumber=[]
// for (let i = 0; i < array.length; i++) {
//     multipliedNumber.push(array[i]*2)
// }
// console.log(multipliedNumber);


// let array = ["Paris", "New York", "Tokya", "London"]
// let cityList = []
// for (let i = 0; i < array.length; i++) {
//     cityList.push(array[i])
// }
// console.log(cityList);


// let array = ["green tea", "black tea", "chai", "oolong tea"]
// let selectedTeas=[]
// for (let i = 0; i < array.length; i++) {
//     if (array[i] === "chai") {
//         break;
//     }
//     selectedTeas.push(array[i]);
// }
// console.log(selectedTeas);


// let cities=["london", "new york", "paris", "berlin"]
// let visistedCities=[]
// for (let i = 0; i < cities.length; i++) {
//     if (cities[i] == "paris") {
//         continue
//     }
//     visistedCities.push(cities[i])
// }
// console.log(visistedCities);


// let numbers=[1,2,3,4,5]
// let smallNumbers=[]
// for (const i of numbers) {
//     if (i == 4) {
//         break;
//     }
//     smallNumbers.push(i);
// }
// console.log(smallNumbers);


// let teas = ["chai", "green tea", "herbal tea", "black tea"]
// let preferredTeas=[]
// for (const tea of teas) {
//     if (tea == "herbal tea") {
//         continue
//     }
//     preferredTeas.push(tea)
// }
// console.log(preferredTeas);


// let cityPopulation = {
//     london: 8900000,
//     "new york": 8400000,
//     paris: 2200000,
//     berlin: 3500000,
// }
// let cityPopulations = {}
// for (const city in cityPopulation) {
//     if (city == "berlin") {
//         break
//     }
//     cityPopulations[city]=cityPopulation[city]
// }
// console.log(cityPopulations);


let myWorldCities = ["Berlin", "Tokya", "Sydney", "Paris"]
let travelledCities=[]
myWorldCities.forEach(function (city) {
    if (city === "Sydney") {
        return;
    }
    travelledCities.push(city);
})
console.log(travelledCities);
