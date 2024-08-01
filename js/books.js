// books.js

document.addEventListener('DOMContentLoaded', function() {
    loadBooks();
});

function loadBooks() {
    var booksList = document.getElementById('books-list');
    // Example data, you can fetch this data from your server using AJAX
    var books = [
        { image: 'images/book1.jpg', title: 'Book 1', price: '$10' },
        { image: 'images/book2.jpg', title: 'Book 2', price: '$15' },
        { image: 'images/book3.jpg', title: 'Book 3', price: '$20' }
    ];

    books.forEach(function(book) {
        var bookDiv = document.createElement('div');
        bookDiv.className = 'col-md-4';
        bookDiv.innerHTML = `
            <div class="card mb-4">
                <img class="card-img-top" src="${book.image}" alt="${book.title}">
                <div class="card-body">
                    <h5 class="card-title">${book.title}</h5>
                    <p class="card-text">Price: ${book.price}</p>
                    <button class="btn btn-primary" onclick="addItemToCart('${book.image}', '${book.title}', '${book.price}')">Add to Cart</button>
                </div>
            </div>
        `;
        booksList.appendChild(bookDiv);
    });
}
