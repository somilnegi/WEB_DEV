document.addEventListener("DOMContentLoaded", () => {

    const expenseForm = document.getElementById('expense-form')
    const expenseNameInput = document.getElementById('expense-name')
    const expenseAmountInput = document.getElementById('expense-amount')
    const expenseList = document.getElementById('expense-list')
    const totalAmountDisplay = document.getElementById('total-amount')

    let expenses = JSON.parse(localStorage.getItem('expenses')) || []
    let totalAmount = calculateTotal()
    renderExpenses()
     
    expenseForm.addEventListener('submit', (e) => {
        e.preventDefault()
        const name = expenseNameInput.value.trim()
        const amount = parseFloat(expenseAmountInput.value.trim())

        if (name !== "" && !isNaN(amount) && amount > 0) {
            const newExpense = {
                id: Date.now(),
                name,
                amount,
            }
            expenses.push(newExpense)
            expenseAmountInput.value = ""
            expenseNameInput.value = ""
            saveExpensesToLocal()
            updateTotal()
            renderExpenses()
        }
    })

    function calculateTotal() {
        return expenses.reduce((sum, expense) => sum+Number(expense.amount), 0)
    }

    function saveExpensesToLocal() {
        localStorage.setItem('expenses', JSON.stringify(expenses))
    }

    function updateTotal() {
        totalAmount = calculateTotal()
        // console.log(totalAmount);
        
        totalAmountDisplay.textContent = totalAmount.toFixed(2)
    }

    function renderExpenses() {
        expenseList.innerHTML = ""
        expenses.forEach(expense => {
            const li = document.createElement('li')
            li.innerHTML = `${expense.name} - $${expense.amount} <button data-id= "${expense.id}">Delete</button>`
            // console.log("HEllo");
            
            expenseList.appendChild(li)
        })
    }

    expenseList.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            const expenseId = parseInt(e.target.getAttribute('data-id'))
            // console.log(expenseId);
            
            expenses = expenses.filter(expense => expense.id!==expenseId)

            saveExpensesToLocal()
            renderExpenses()
            updateTotal()
        }
    })

})