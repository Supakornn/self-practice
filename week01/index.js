import { books } from "./data.js";

// Menu List
const menulist = [
  {
    id: "1",
    name: "List All Book",
    action: listAllBook
  },
  {
    id: "2",
    name: "Search Book",
    action: searchBook
  }
];

// Search Book
function searchBook(query) {
  console.log(`Search Book: ${query}`);
}

// Menu Showing
function menuShowing() {
  console.log("================================");
  console.log("=== Menu ===");
  menulist.forEach((menu) => {
    console.log(`${menu.id}. ${menu.name}`);
  });
  console.log("================================");
}

// Menu Action
function menuAction(choice) {
  menulist.forEach((menu) => {
    if (menu.id === choice) {
      menu.action();
    }
  });
}

// TODO: Add pagination
function listAllBook() {
  console.log("================================");
  console.log("=== List All Book ===");
  books.forEach((book) => {
    console.log(`${book.title} - ${book.author} - ${book.year}`);
  });
  console.log("================================");
}

// TODO: Add search book
// TODO: Add sort book
// TODO: Add tag filtering
// TODO: Add bookmark
// Menu
function Menu() {
  menuShowing();
  const choice = prompt("Enter your choice: ");
  menuAction(choice);
}

// Start
Menu();
