// Search Book
import { books } from "./data.js";
import { displayBooksWithPagination } from "./paginationUtils.js";

function searchBook() {
    const query = prompt("Enter the title, author, or tag of the book you want to search for: ");
    const result = filterBook(books, query);
    displayResult(result, query);
}

function filterBook(books, query) {
    const result = books.filter(
        (book) =>
            book.title.toLowerCase().includes(query.toLowerCase()) ||
            book.author.toLowerCase().includes(query.toLowerCase()) ||
            book.tags.some((tag) => tag.toLowerCase().includes(query.toLowerCase()))
    );
    return result;
}

function displayResult(result, query) {
    const searchTitle = `Search Results for "${query}"`;
    displayBooksWithPagination(result, 1, searchTitle);
}

export { searchBook };
