import { books } from "./data.js";
import { displayBooksWithPagination } from "./paginationUtils.js";

// list all books
function listAllBooks() {
    displayBooksWithPagination(books, 1, "List All Books");
}

export { listAllBooks };
