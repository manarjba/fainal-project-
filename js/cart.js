// cart.js

// Example function to dynamically add items to the cart
function addItemToCart(bookImage, bookName, bookPrice) {
    var cartItems = document.getElementById('cart-items');
    var newRow = document.createElement('tr');

    newRow.innerHTML = `
        <td class="cart-item">
            <img src="${bookImage}" alt="Book Cover">
            <span>${bookName}</span>
        </td>
        <td>${bookPrice}</td>
        <td>
            <div class="quantity-control">
                <button class="btn btn-secondary btn-sm" onclick="updateQuantity(this, -1)">-</button>
                <input type="number" class="form-control form-control-sm" value="1" min="1" style="width: 50px;">
                <button class="btn btn-secondary btn-sm" onclick="updateQuantity(this, 1)">+</button>
            </div>
        </td>
        <td>${bookPrice}</td>
        <td><button class="btn btn-danger btn-sm" onclick="removeItem(this)">Remove</button></td>
    `;

    cartItems.appendChild(newRow);
    updateTotalPrice();
}

function updateQuantity(button, change) {
    var quantityInput = button.parentNode.querySelector('input');
    var newQuantity = parseInt(quantityInput.value) + change;
    if (newQuantity >= 1) {
        quantityInput.value = newQuantity;
        updateTotalPrice();
    }
}

function removeItem(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
    updateTotalPrice();
}

function updateTotalPrice() {
    var cartItems = document.getElementById('cart-items').getElementsByTagName('tr');
    var totalPrice = 0;

    for (var i = 0; i < cartItems.length; i++) {
        var price = parseFloat(cartItems[i].getElementsByTagName('td')[1].textContent.replace('$', ''));
        var quantity = cartItems[i].getElementsByTagName('input')[0].value;
        totalPrice += price * quantity;
    }

    document.getElementById('total-price').textContent = '$' + totalPrice.toFixed(2);
}

// Example call to add an item to the cart
// addItemToCart('book-cover.jpg', 'Book Name', 50);
