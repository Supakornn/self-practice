import { listAllBooks } from "./listAllBook.js";
import { searchBook } from "./searchBook.js";

// Menu List
const menulist = [
    {
        id: "1",
        name: "List All Book",
        action: listAllBooks
    },
    {
        id: "2",
        name: "Search Book",
        action: searchBook
    }
];

function handleMenuChoice(choice) {
    const menu = menulist.find((menu) => menu.id === choice);
    if (menu) {
        menu.action();
    } else {
        console.log("Invalid choice! Please try again.");
        Menu();
    }
}

// Menu
function Menu() {
    console.log("================================");
    console.log("=== Menu ===");
    menulist.forEach((menu) => {
        console.log(`${menu.id}. ${menu.name}`);
    });
    console.log("================================");
    const choice = prompt("Enter your choice: ");
    handleMenuChoice(choice);
}

// Start
Menu();

export { Menu };
