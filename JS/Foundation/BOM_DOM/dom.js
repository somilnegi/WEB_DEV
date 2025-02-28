// Example 1

document.getElementById('changeTextButton').addEventListener('click', function () {
    let pg = document.getElementById('myParagraph')    
    pg.textContent="The paragraph is changed."
})


// Example 2

document.getElementById('highlightFirstCity').addEventListener('click', function () {
    let citiesList = document.getElementById("citiesList")
    citiesList.firstElementChild.classList.add('highlight')
})


// Example 3

document.getElementById('changeOrder').addEventListener('click', function () {
    let coffeeType = document.getElementById('coffeeType')
    coffeeType.textContent = "Espresso"
    coffeeType.style.backgroundColor = "brown"
    coffeeType.style.padding = "5px"
})


// Example 4

document.getElementById('addNewItem').addEventListener('click', function () {
    let list = document.getElementById('shoppingList')
    let newItem = document.createElement('li')
    newItem.textContent = "Eggs"
    list.appendChild(newItem)
})


// Example 5

document.getElementById('removeLastTask').addEventListener('click', function () {
    let taskList = document.getElementById("taskList")
    taskList.lastElementChild.remove()
})