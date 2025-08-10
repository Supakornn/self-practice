// Data ให้ AI Generate มาให้ครับ

// books
const books = [
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        year: 1925,
        tags: ["classic", "fiction"]
    },
    {
        title: "1984",
        author: "George Orwell",
        year: 1949,
        tags: ["dystopian", "fiction"]
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        year: 1960,
        tags: ["classic", "fiction"]
    },
    {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        year: 1951,
        tags: ["classic", "fiction"]
    },
    {
        title: "The Lord of the Rings",
        author: "J.R.R. Tolkien",
        year: 1954,
        tags: ["fantasy", "adventure"]
    },
    {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        year: 1813,
        tags: ["classic", "romance"]
    },
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        year: 1937,
        tags: ["fantasy", "adventure"]
    },
    {
        title: "Harry Potter and the Sorcerer's Stone",
        author: "J.K. Rowling",
        year: 1997,
        tags: ["fantasy", "young adult"]
    },
    {
        title: "The Da Vinci Code",
        author: "Dan Brown",
        year: 2003,
        tags: ["thriller", "mystery"]
    },
    {
        title: "The Hunger Games",
        author: "Suzanne Collins",
        year: 2008,
        tags: ["dystopian", "young adult"]
    },
    {
        title: "Brave New World",
        author: "Aldous Huxley",
        year: 1932,
        tags: ["dystopian", "science fiction"]
    },
    {
        title: "The Chronicles of Narnia",
        author: "C.S. Lewis",
        year: 1950,
        tags: ["fantasy", "children"]
    },
    {
        title: "One Hundred Years of Solitude",
        author: "Gabriel García Márquez",
        year: 1967,
        tags: ["magical realism", "classic"]
    },
    {
        title: "The Kite Runner",
        author: "Khaled Hosseini",
        year: 2003,
        tags: ["drama", "historical fiction"]
    },
    {
        title: "The Girl with the Dragon Tattoo",
        author: "Stieg Larsson",
        year: 2005,
        tags: ["thriller", "mystery"]
    },
    {
        title: "Life of Pi",
        author: "Yann Martel",
        year: 2001,
        tags: ["adventure", "philosophical"]
    },
    {
        title: "The Alchemist",
        author: "Paulo Coelho",
        year: 1988,
        tags: ["philosophical", "adventure"]
    },
    {
        title: "Gone Girl",
        author: "Gillian Flynn",
        year: 2012,
        tags: ["thriller", "psychological"]
    },
    {
        title: "The Book Thief",
        author: "Markus Zusak",
        year: 2005,
        tags: ["historical fiction", "young adult"]
    },
    {
        title: "Dune",
        author: "Frank Herbert",
        year: 1965,
        tags: ["science fiction", "epic"]
    },
    {
        title: "The Fault in Our Stars",
        author: "John Green",
        year: 2012,
        tags: ["young adult", "romance"]
    },
    {
        title: "Where the Crawdads Sing",
        author: "Delia Owens",
        year: 2018,
        tags: ["mystery", "literary fiction"]
    },
    {
        title: "The Silent Patient",
        author: "Alex Michaelides",
        year: 2019,
        tags: ["thriller", "psychological"]
    },
    {
        title: "Educated",
        author: "Tara Westover",
        year: 2018,
        tags: ["memoir", "non-fiction"]
    },
    {
        title: "The Seven Husbands of Evelyn Hugo",
        author: "Taylor Jenkins Reid",
        year: 2017,
        tags: ["historical fiction", "romance"]
    },
    {
        title: "Normal People",
        author: "Sally Rooney",
        year: 2018,
        tags: ["literary fiction", "romance"]
    },
    {
        title: "The Midnight Library",
        author: "Matt Haig",
        year: 2020,
        tags: ["philosophical", "literary fiction"]
    },
    {
        title: "Project Hail Mary",
        author: "Andy Weir",
        year: 2021,
        tags: ["science fiction", "adventure"]
    },
    {
        title: "Klara and the Sun",
        author: "Kazuo Ishiguro",
        year: 2021,
        tags: ["science fiction", "literary fiction"]
    },
    {
        title: "The Invisible Man",
        author: "H.G. Wells",
        year: 1897,
        tags: ["science fiction", "classic"]
    },
    {
        title: "Frankenstein",
        author: "Mary Shelley",
        year: 1818,
        tags: ["gothic", "science fiction"]
    },
    {
        title: "Dracula",
        author: "Bram Stoker",
        year: 1897,
        tags: ["gothic", "horror"]
    },
    {
        title: "The Picture of Dorian Gray",
        author: "Oscar Wilde",
        year: 1890,
        tags: ["gothic", "classic"]
    },
    {
        title: "Jane Eyre",
        author: "Charlotte Brontë",
        year: 1847,
        tags: ["classic", "romance"]
    },
    {
        title: "Wuthering Heights",
        author: "Emily Brontë",
        year: 1847,
        tags: ["classic", "gothic"]
    },
    {
        title: "The Adventures of Sherlock Holmes",
        author: "Arthur Conan Doyle",
        year: 1892,
        tags: ["mystery", "classic"]
    },
    {
        title: "Moby Dick",
        author: "Herman Melville",
        year: 1851,
        tags: ["classic", "adventure"]
    },
    {
        title: "War and Peace",
        author: "Leo Tolstoy",
        year: 1869,
        tags: ["classic", "historical fiction"]
    },
    {
        title: "Crime and Punishment",
        author: "Fyodor Dostoevsky",
        year: 1866,
        tags: ["classic", "psychological"]
    },
    {
        title: "The Brothers Karamazov",
        author: "Fyodor Dostoevsky",
        year: 1880,
        tags: ["classic", "philosophical"]
    },
    {
        title: "Anna Karenina",
        author: "Leo Tolstoy",
        year: 1878,
        tags: ["classic", "romance"]
    },
    {
        title: "The Count of Monte Cristo",
        author: "Alexandre Dumas",
        year: 1844,
        tags: ["classic", "adventure"]
    },
    {
        title: "Les Misérables",
        author: "Victor Hugo",
        year: 1862,
        tags: ["classic", "historical fiction"]
    },
    {
        title: "The Three Musketeers",
        author: "Alexandre Dumas",
        year: 1844,
        tags: ["classic", "adventure"]
    },
    {
        title: "Don Quixote",
        author: "Miguel de Cervantes",
        year: 1605,
        tags: ["classic", "comedy"]
    },
    {
        title: "The Odyssey",
        author: "Homer",
        year: -800,
        tags: ["epic", "mythology"]
    },
    {
        title: "The Iliad",
        author: "Homer",
        year: -750,
        tags: ["epic", "mythology"]
    },
    {
        title: "Sapiens",
        author: "Yuval Noah Harari",
        year: 2011,
        tags: ["non-fiction", "history"]
    },
    {
        title: "Atomic Habits",
        author: "James Clear",
        year: 2018,
        tags: ["self-help", "non-fiction"]
    },
    {
        title: "The 7 Habits of Highly Effective People",
        author: "Stephen Covey",
        year: 1989,
        tags: ["self-help", "business"]
    },
    {
        title: "Think and Grow Rich",
        author: "Napoleon Hill",
        year: 1937,
        tags: ["self-help", "business"]
    },
    {
        title: "The Lean Startup",
        author: "Eric Ries",
        year: 2011,
        tags: ["business", "entrepreneurship"]
    },
    {
        title: "Steve Jobs",
        author: "Walter Isaacson",
        year: 2011,
        tags: ["biography", "technology"]
    },
    {
        title: "The Martian",
        author: "Andy Weir",
        year: 2011,
        tags: ["science fiction", "adventure"]
    }
];

export { books };
