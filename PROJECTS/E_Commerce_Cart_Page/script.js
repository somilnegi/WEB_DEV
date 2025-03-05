document.addEventListener('DOMContentLoaded', () => {
    // Product array
    const products = [
        { id: 1, name: "Product 1", price: 29.99 },
        { id: 2, name: "Product 2", price: 19.99 },
        { id: 3, name: "Product 3", price: 49.99 },
    ]

    // Selecting HTML elements
    const productList = document.getElementById('product-list')
    const cartItems = document.getElementById('cart-items')
    const emptyCartMessage = document.getElementById('empty-cart')
    const cartTotal = document.getElementById('cart-total')
    const totalPriceDisplay = document.getElementById('total-price')
    const checkoutBtn = document.getElementById('checkout-btn')

    // Cart array
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    renderCart()


    // Displaying the products on the product list
    products.forEach(product => {
        const productDiv = document.createElement('div')
        productDiv.classList.add('product')
        productDiv.innerHTML = `
                                <span>${product.name} - $${product.price.toFixed(2)}</span>
                                <button data-id= "${product.id}">Add to cart</button>   `
        productList.appendChild(productDiv)
    });
    
    // Adding event listener to product buttons
    productList.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            // console.log("cicked");
            // console.log(type of e.target.getAttribute('data-id'));
            // Even though the type of the product-id is a number but it shows it string here 
            const productId = parseInt(e.target.getAttribute('data-id'))  // Parse the string into the int
            const product = products.find(p => p.id === productId) // Find the product-id in the products array
            addToCart(product)
            addCartToLocal()
        }
    })

    function addToCart(product) {
        cart.push(product);
        renderCart()
    }

    function renderCart() {
        cartItems.innerText = ""
        let totalPrice = 0
        if (cart.length) {
            emptyCartMessage.classList.add('hidden')
            cartTotal.classList.remove('hidden')
            cart.forEach((item) => {
                totalPrice += item.price
                const cartItem = document.createElement('div')
                cartItem.classList.add("items")
                cartItem.innerHTML = `${item.name} - $${item.price.toFixed(2)}
                                     <button class="item-del-btn">-</button>
                                     `
                cartItems.appendChild(cartItem)
                totalPriceDisplay.textContent = `$${totalPrice.toFixed(2)}`
            })
        }
        else {
            emptyCartMessage.classList.remove('hidden')
            totalPriceDisplay.textContent = `$0.00`
        }
    }

    checkoutBtn.addEventListener('click', () => {
        cart.length = 0
        alert("Checkout successfull")
        renderCart();
    })

    // Logic to remove item
    cartItems.addEventListener('click', (e) => {
        if (e.target.classList.contains('item-del-btn')) {
            // console.log('Hi');
            
            const itemName = e.target.parentElement.textContent.split(" - $")[0]; // Extract item name

            // console.log(itemName)
            
            const index = cart.findIndex(item => item.name === itemName); // Find item index in cart
            if (index !== -1) {
                cart.splice(index, 1); // Remove item from cart
                renderCart(); // Update UI
                addCartToLocal()
            }
        }
    })

    // Adding the cart to local storage
    function addCartToLocal() {
        localStorage.setItem('cart',JSON.stringify(cart));
    }

})