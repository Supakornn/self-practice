import { Menu } from "./index.js";

const pageSize = 10; // 10 books per page

// Calculate total pages
function getTotalPages(items) {
    return Math.ceil(items.length / pageSize);
}

// Get items for current page
function getItemsForPage(items, page) {
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return items.slice(startIndex, endIndex);
}

// Display pagination info
function displayPaginationInfo(currentPage, totalItems) {
    const totalPages = getTotalPages(totalItems);
    console.log(`Page ${currentPage} of ${totalPages} (${totalItems.length} total books)`);
    console.log("Navigation: [P]revious | [N]ext | [F]irst | [L]ast | [M]enu");
}

// Display books with pagination
function displayBooksWithPagination(books, currentPage = 1, title = "Books") {
    while (true) {
        console.log("================================");
        console.log(`=== ${title} ===`);

        if (books.length === 0) {
            console.log("No books found!");
            console.log("================================");
            break;
        }

        if (books.length <= pageSize) {
            books.forEach((book, index) => {
                console.log(`${index + 1}. ${book.title} - ${book.author} - ${book.year}`);
            });
            console.log("================================");
            break;
        }

        const booksOnPage = getItemsForPage(books, currentPage);
        const startNumber = (currentPage - 1) * pageSize + 1;

        booksOnPage.forEach((book, index) => {
            const bookNumber = startNumber + index;
            console.log(`${bookNumber}. ${book.title} - ${book.author} - ${book.year}`);
        });

        console.log("================================");
        displayPaginationInfo(currentPage, books);

        const choice = prompt("Enter navigation choice (P/N/F/L/M): ");
        const result = handlePaginationChoice(choice, currentPage, books, title);

        if (result.action === "continue") {
            currentPage = result.newPage;
        } else if (result.action === "menu") {
            Menu();
            break;
        }
    }
}

// Handle pagination choices
function handlePaginationChoice(choice, currentPage, books) {
    const totalPages = getTotalPages(books);

    switch (choice?.toUpperCase()) {
        case "P":
            if (currentPage > 1) {
                return { action: "continue", newPage: currentPage - 1 };
            } else {
                console.log("Already on first page!");
                return { action: "continue", newPage: currentPage };
            }
        case "N":
            if (currentPage < totalPages) {
                return { action: "continue", newPage: currentPage + 1 };
            } else {
                console.log("Already on last page!");
                return { action: "continue", newPage: currentPage };
            }
        case "F":
            return { action: "continue", newPage: 1 };
        case "L":
            return { action: "continue", newPage: totalPages };
        case "M":
            return { action: "menu" };
        default:
            console.log("Invalid choice! Please try again.");
            return { action: "continue", newPage: currentPage };
    }
}

export { displayBooksWithPagination, getTotalPages, getItemsForPage, displayPaginationInfo };
