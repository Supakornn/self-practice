// Search Book
import { books } from "./data.js";

function searchBook() {
    console.log("================================");
    console.log("=== Search Book ===");
    const query = prompt("Enter the title of the book you want to search for: ");
    const result = filterBook(books, query);
    displayResult(result);
    console.log("================================");
}

function filterBook(books, query) {
    const result = books.filter((book) => book.title.toLowerCase().includes(query.toLowerCase()));
    return result;
}

function displayResult(result) {
    if (result.length === 0) {
        console.log("No books found!");
    } else {
        console.log(`Found ${result.length} books:`);
        result.forEach((book, index) => {
            console.log(`${index + 1}. ${book.title} - ${book.author} - ${book.year}`);
        });
    }
}

export { searchBook };
