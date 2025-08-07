import { books } from "./data.js";
import { Menu } from "./index.js";

const pageSize = 10; // 10 books per page
let currentPage = 1;

// cal total pages
function getTotalPages() {
    return Math.ceil(books.length / pageSize);
}

// get books for current page
function getBooksForPage(page) {
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return books.slice(startIndex, endIndex);
}

// pagination info
function displayPaginationInfo() {
    const totalPages = getTotalPages();
    console.log(`Page ${currentPage} of ${totalPages} (${books.length} total books)`);
    console.log("Navigation: [P]revious | [N]ext | [F]irst | [L]ast | [M]enu");
}

// list all books
function listAllBooks() {
    console.log("================================");
    console.log("=== List All Books ===");

    const booksOnPage = getBooksForPage(currentPage);
    const startNumber = (currentPage - 1) * pageSize + 1;

    booksOnPage.forEach((book, index) => {
        const bookNumber = startNumber + index;
        console.log(`${bookNumber}. ${book.title} - ${book.author} - ${book.year}`);
    });

    console.log("================================");
    displayPaginationInfo();

    const choice = prompt("Enter navigation choice (P/N/F/L/M): ");
    handlePaginationChoice(choice);
}

function handlePaginationChoice(choice) {
    const totalPages = getTotalPages();

    switch (choice?.toUpperCase()) {
        case "P":
            if (currentPage > 1) {
                currentPage--;
                listAllBooks();
            } else {
                console.log("Already on first page!");
                listAllBooks();
            }
            break;
        case "N":
            if (currentPage < totalPages) {
                currentPage++;
                listAllBooks();
            } else {
                listAllBooks();
                console.log("Already on last page!");
            }
            break;
        case "F":
            currentPage = 1;
            listAllBooks();
            break;
        case "L":
            currentPage = totalPages;
            listAllBooks();
            break;
        case "M":
            Menu();
            break;
        default:
            console.log("Invalid choice! Please try again.");
            listAllBooks();
    }
}

export { listAllBooks };
