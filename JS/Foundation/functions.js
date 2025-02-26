// function makeTea(typeOfTea) {
//     return `Making ${typeOfTea}`
// }
// let teaOrder = makeTea("green tea")
// console.log(teaOrder);


// function orderTea(teaType) {
//     function confirmOrder() {
//         return `Order confirmed for ${teaType}`
//     }
//     return confirmOrder()
// }
// let teaOrder = orderTea("lemon tea")
// console.log(teaOrder);


// const calculateTotal = (price, quantity) => price*quantity
// let totalCost = calculateTotal(400,5)
// console.log(totalCost);


// function makeTea(typeOfTea) {
//     return `makeTea: ${typeOfTea}`
// }
// function processTeaOrder(teaFunction) {
//     return teaFunction("earl grey")
// }
// let order = processTeaOrder(makeTea)
// console.log(order);


function createTeaMaker() {
    return function teaMaker(teaType) {
        return `Making ${teaType}`
    }
}
let tea=createTeaMaker()
console.log(tea("green tea"));