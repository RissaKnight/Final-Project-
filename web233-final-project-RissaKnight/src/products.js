"use strict"

// Array of products
// const products = [
let shopItemsData = [
    {
        id: 1,
        name: "Handcrafted Necklace",
        description: "A unique necklace crafted from reclaimed bullet shells.",
        price: 25.00,
        image: "images/product1.jpg"
    },
    {
        id: 2,
        name: "Handcrafted Cufflinks",
        description: "Unique cufflinks crafted from reclaimed bullet shells.",
        price: 25.00,
        image: "images/product2.jpg"
    },
    {
        id: 3,
        name: "Handcrafted Ring",
        description: "A unique ring crafted from reclaimed bullet shells.",
        price: 25.00,
        image: "images/product3.jpg"
    },
    { 
        id: 4, 
        name: "Handcrafted Cuff", 
        description: "A unique arm cuff crafted from reclaimed bullet shells.", 
        price: 25.00, 
        image: "images/product4.jpg" 
    },
    { 
        id: 5, name: "Handcrafted Necklace Holder", 
        description: "A necklace holder crafted from reclaimed bullet shells.", 
        price: 25.00, 
        image: "images/product5.jpg" 
    },
    { 
        id: 6, name: "Handcrafted Bottle Opener", 
        description: "A bottle opener crafted from reclaimed bullet shells.", 
        price: 25.00, 
        image: "images/product6.png" 
    },
    { 
        id: 7, 
        name: "Handcrafted Keychain", 
        description: "A keychain crafted from reclaimed bullet shells.", 
        price: 25.00, 
        image: "images/product7.jpg" 
    },
    { 
        id: 8, 
        name: "Handcrafted Solid Ring", 
        description: "A solid ring crafted from reclaimed bullet shells.", 
        price: 25.00, 
        image: "images/product8.jpg" 
    },
    { 
        id: 9, 
        name: "Handcrafted Capsule Pendant", 
        description: "A capsule pendant crafted from reclaimed bullet shells.", 
        price: 25.00, 
        image: "images/product9.jpg" 
    },
    { 
        id: 10, 
        name: "Handcrafted Earrings", 
        description: "A pair of earrings crafted from reclaimed bullet shells.", 
        price: 25.00, 
        image: "images/product10.jpg" 
    }
];

// Function to render products
function renderProducts() {
    const productList = document.getElementById('product-list');
    products.forEach(product => {
        const productItem = document.createElement('li');
        productItem.className = 'product-item';
        productItem.innerHTML = `
            <a href="${product.image}" data-lightbox="product-gallery" data-title="${product.name}">
                <img src="${product.image}" alt="${product.name}">
            </a>
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <p>Price: $${product.price.toFixed(2)}</p>
            <label for="quantity-${product.id}">Quantity:</label>
            <input type="number" id="quantity-${product.id}" min="1" value="1">
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productItem);
    });
}

// Add to Cart function
function addToCart(productId) {
    const product = products.find(item => item.id === productId);
    const quantityInput = document.getElementById(`quantity-${productId}`);
    const quantity = parseInt(quantityInput.value);

    if (quantity < 1 || isNaN(quantity)) {
        alert("Please enter a valid quantity.");
        return;
    }

    // Retrieve or initialize cart
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if product is already in cart
    const existingProduct = cart.find(item => item.id === productId);
    if (existingProduct) {
        existingProduct.quantity += quantity;
    } else {
        cart.push({ ...product, quantity });
    }

    // Update localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    alert(`${quantity} x ${product.name} added to cart!`);
}



// // Render cart on the cart page
// function renderCart() {
//     const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
//     const cartContainer = document.getElementById('cart-items');
//     cartContainer.innerHTML = ''; // Clear the cart before rendering
//     let total = 0;

//     if (cartItems.length === 0) {
//         cartContainer.innerHTML = '<p>Your cart is empty.</p>';
//         document.getElementById('cart-total').innerText = '$0.00';
//         return;
//     }

//     cartItems.forEach(item => {
//         const itemTotal = item.price * item.quantity;
//         total += itemTotal;

//         const cartRow = document.createElement('div');
//         cartRow.className = 'cart-row';
//         cartRow.innerHTML = `
//             <div class="cart-item cart-column">
//                 <img class="cart-item-image" src="${item.image}" width="100" height="100">
//                 <span class="cart-item-title">${item.name}</span>
//             </div>
//             <span class="cart-price cart-column">$${item.price.toFixed(2)}</span>
//             <div class="cart-quantity cart-column">
//                 <input class="cart-quantity-input" type="number" min="1" value="${item.quantity}" data-id="${item.id}">
//                 <button class="btn btn-danger" data-id="${item.id}" type="button">REMOVE</button>
//             </div>
//             <span class="cart-total-item">$${itemTotal.toFixed(2)}</span>
//         `;
//         cartContainer.appendChild(cartRow);
//     });

//     document.getElementById('cart-total').innerText = `$${total.toFixed(2)}`;
//     attachCartListeners();
// }

// // Attach event listeners to cart controls
// function attachCartListeners() {
//     const removeButtons = document.getElementsByClassName('btn-danger');
//     const quantityInputs = document.getElementsByClassName('cart-quantity-input');

//     for (const button of removeButtons) {
//         button.addEventListener('click', removeCartItem);
//     }

//     for (const input of quantityInputs) {
//         input.addEventListener('change', updateCartItem);
//     }
// }

// // Remove item from cart
// function removeCartItem(event) {
//     const productId = parseInt(event.target.getAttribute('data-id'));
//     let cart = JSON.parse(localStorage.getItem('cart')) || [];
//     cart = cart.filter(item => item.id !== productId);
//     localStorage.setItem('cart', JSON.stringify(cart));
//     renderCart();
// }

// // Update item quantity in cart
// function updateCartItem(event) {
//     const productId = parseInt(event.target.getAttribute('data-id'));
//     const newQuantity = parseInt(event.target.value);

//     if (newQuantity < 1 || isNaN(newQuantity)) {
//         alert("Please enter a valid quantity.");
//         event.target.value = 1;
//         return;
//     }

//     let cart = JSON.parse(localStorage.getItem('cart')) || [];
//     const item = cart.find(item => item.id === productId);
//     if (item) {
//         item.quantity = newQuantity;
//     }
//     localStorage.setItem('cart', JSON.stringify(cart));
//     renderCart();
// }

// // Function to clear the cart
// function clearCart() {
//     localStorage.removeItem('cart');
//     alert("Cart cleared!");
// }

// // Initialize pages
// document.addEventListener('DOMContentLoaded', () => {
//     if (document.getElementById('product-list')) {
//         renderProducts();
//     }
//     if (document.getElementById('cart-items')) {
//         renderCart();
//     }

     // Initialize LightSlider for the product gallery
     $('#product-list').lightSlider({
        item: 4,
        slideMargin: 10,
        loop: true,
        controls: true,
        responsive: [
            { breakpoint: 800, settings: { item: 2, slideMove: 1 } },
            { breakpoint: 480, settings: { item: 1, slideMove: 1 } }
        ]
    });

// });


// // Function to clear the cart
// function clearCart() {
//     localStorage.removeItem("cart");
//     alert("Cart cleared!");
// }

// // Load cart from localStorage
// function loadCart() {
//     return JSON.parse(localStorage.getItem("cart")) || [];
// }

// // Initialize the page
// document.addEventListener('DOMContentLoaded', () => {
//     renderProducts();

    // Initialize LightSlider for the product gallery
    // $('#product-list').lightSlider({
    //     item: 4,
    //     slideMargin: 10,
    //     loop: true,
    //     controls: true,
    //     responsive: [
    //         { breakpoint: 800, settings: { item: 2, slideMove: 1 } },
    //         { breakpoint: 480, settings: { item: 1, slideMove: 1 } }
    //     ]
    // });
// });