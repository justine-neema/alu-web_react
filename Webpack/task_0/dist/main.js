/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/

// --- Starter JavaScript Code ---
// book class with type annotation
class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
}
// Function with type annotation
function displayBook(book) {
    const bookList = document.getElementById("book-list");
    // Handle the case where bookList might be null
    if (bookList) {
        const bookDiv = document.createElement("div");
        bookDiv.innerHTML = `
            <h2>${book.title}</h2>
            <p>By ${book.author}, ${book.year}</p>
        `;
        bookList.appendChild(bookDiv);
    }
}
// Create some book objects
const book1 = new Book("The Hobbit", "J.R.R. Tolkien", 1937);
const book2 = new Book("The Lord of the Rings", "J.R.R. Tolkien", 1954);
// Display the books on the webpage
displayBook(book1);
displayBook(book2);
// Creating review functionality
const reviews = [];
function addReview(bookId, rating, comment) {
    const review = {
        bookId: bookId,
        rating: rating,
        comment: comment
    };
    reviews.push(review);
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixXQUFXO0FBQzdCLG9CQUFvQixZQUFZLElBQUksVUFBVTtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktcHJvamVjdC8uL3NyYy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuLy8gLS0tIFN0YXJ0ZXIgSmF2YVNjcmlwdCBDb2RlIC0tLVxuLy8gYm9vayBjbGFzcyB3aXRoIHR5cGUgYW5ub3RhdGlvblxuY2xhc3MgQm9vayB7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGF1dGhvciwgeWVhcikge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuYXV0aG9yID0gYXV0aG9yO1xuICAgICAgICB0aGlzLnllYXIgPSB5ZWFyO1xuICAgIH1cbn1cbi8vIEZ1bmN0aW9uIHdpdGggdHlwZSBhbm5vdGF0aW9uXG5mdW5jdGlvbiBkaXNwbGF5Qm9vayhib29rKSB7XG4gICAgY29uc3QgYm9va0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvb2stbGlzdFwiKTtcbiAgICAvLyBIYW5kbGUgdGhlIGNhc2Ugd2hlcmUgYm9va0xpc3QgbWlnaHQgYmUgbnVsbFxuICAgIGlmIChib29rTGlzdCkge1xuICAgICAgICBjb25zdCBib29rRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgYm9va0Rpdi5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICA8aDI+JHtib29rLnRpdGxlfTwvaDI+XG4gICAgICAgICAgICA8cD5CeSAke2Jvb2suYXV0aG9yfSwgJHtib29rLnllYXJ9PC9wPlxuICAgICAgICBgO1xuICAgICAgICBib29rTGlzdC5hcHBlbmRDaGlsZChib29rRGl2KTtcbiAgICB9XG59XG4vLyBDcmVhdGUgc29tZSBib29rIG9iamVjdHNcbmNvbnN0IGJvb2sxID0gbmV3IEJvb2soXCJUaGUgSG9iYml0XCIsIFwiSi5SLlIuIFRvbGtpZW5cIiwgMTkzNyk7XG5jb25zdCBib29rMiA9IG5ldyBCb29rKFwiVGhlIExvcmQgb2YgdGhlIFJpbmdzXCIsIFwiSi5SLlIuIFRvbGtpZW5cIiwgMTk1NCk7XG4vLyBEaXNwbGF5IHRoZSBib29rcyBvbiB0aGUgd2VicGFnZVxuZGlzcGxheUJvb2soYm9vazEpO1xuZGlzcGxheUJvb2soYm9vazIpO1xuLy8gQ3JlYXRpbmcgcmV2aWV3IGZ1bmN0aW9uYWxpdHlcbmNvbnN0IHJldmlld3MgPSBbXTtcbmZ1bmN0aW9uIGFkZFJldmlldyhib29rSWQsIHJhdGluZywgY29tbWVudCkge1xuICAgIGNvbnN0IHJldmlldyA9IHtcbiAgICAgICAgYm9va0lkOiBib29rSWQsXG4gICAgICAgIHJhdGluZzogcmF0aW5nLFxuICAgICAgICBjb21tZW50OiBjb21tZW50XG4gICAgfTtcbiAgICByZXZpZXdzLnB1c2gocmV2aWV3KTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==