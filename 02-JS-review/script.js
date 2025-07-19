const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// Desctructuring
/* Commented out to work with Array map method
  const books = getBooks();
  const book = getBook(1);

  const { title, author, genres, reviews, publicationDate, hasMovieAdaptation } = book;
  console.log(title, author, genres, reviews);

//  const primaryGenre = genres[0];
//  const secondaryGenre = genres[1];

// Rest operator - collects the rest of the elements in an array
const [primaryGenre, secondaryGenre, ...otherGenres] = genres;
console.log(primaryGenre, secondaryGenre, otherGenres);

// Spread operator - expands an array into individual elements
// can also be used to create a new array with the spread operator
const newGenres = [...genres, "epic fantasy"];
console.log(newGenres);

// can also be done inversely
const newGenres2 = ["epic fantasy", ...genres];
console.log(newGenres2);

const updatedBook = {...book, movePublicationDate: "2001-12-19"};
updatedBook;

// Arrow functions
const getYear = (str) => str.split("-")[0];
console.log(getYear(publicationDate));

// Template literals - notice the use of backticks
const summary = `${title} by ${author} is a ${primaryGenre} book with a rating of ${reviews.goodreads.rating} on Goodreads. It was publised in ${getYear(publicationDate)}. The book has ${hasMovieAdaptation ? "" : "not"} been adapted into a movie.`;

summary;

// Turnerary operator
const hasTranslations = book.translations ? "Yes" : "No"; // Yes

// Short circuiting with logical operators -happens when the first operand is enough to determine the result of the operation
// && operator returns the first falsy value or the last value if all are truthy
// || operator returns the first truthy value or the last value if all are falsy
console.log(true && "Hello"); // Hello
console.log(false && "Hello"); // false

// falsy values: false, 0, "", null, undefined, NaN
console.log("dmitri" && "Hello"); // Hello
console.log(0 && "Hello"); // 0

console.log("dmitri" || "Hello"); // dmitri
console.log(0 || "Hello"); // Hello

console.log(book.translations.spanish || "No translation available"); // No translation available

// Nullish coalescing operator - returns the right-hand operand when the left-hand operand is null or undefined
const count = book.reviews.librarything.reviewsCount ?? "No reviews available"; 

// Optional chaining - allows you to access nested properties without worrying about whether the property exists or not
// returns undefined if the property does not exist
function getTotalReviewCount(book){
    const goodreadsCount = book.reviews?.goodreads?.reviewsCount;
    const librarythingCount = book.reviews?.librarything?.reviewsCount ?? 0; // If the property reviewsCount does not exist add 0 to the total
    return goodreadsCount + librarythingCount;
}

console.log(getTotalReviewCount(book)); // 139869
*/

// Working with the Array map method - creates a new array with the results of calling a provided function on every element in the calling array
// map method does not mutate the original array, but returns a new returs a new array with the modified elements
const books = getBooks();

const x = [1, 2, 3, 4, 5].map((el) => el * 2); // [2,4,6,8,10]
console.log(x);

const titles = books.map((book) => book.title);
console.log(titles);

function getTotalReviewCount(book) {
  const goodreadsCount = book.reviews?.goodreads?.reviewsCount;
  const librarythingCount = book.reviews?.librarything?.reviewsCount ?? 0; // If the property reviewsCount does not exist add 0 to the total
  return goodreadsCount + librarythingCount;
}

const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
  reviewsCount: getTotalReviewCount(book),
}));

essentialData;

// Working with the Array filter method - creates a new array with the elements that pass the test
const longBooks = books
  .filter((book) => book.pages > 800)
  .filter((book) => book.hasMovieAdaptation);
longBooks;

const adventureBooks = books
  .filter((book) => book.genres.includes("adventure"))
  .map((book) => book.title);
adventureBooks;

// Working with the Array reduce method - executes a reducer function on each element of the array, resulting in a single output value
const pagesAllBooks = books.reduce((acc, book) => acc + book.pages, 0);
pagesAllBooks;

// Section about the sort method for arrays
const unsorted = [1, 3, 2, 5, 4];
// Implicitly sorts the array ascendingly
unsorted.sort(); // [1, 2, 3, 4, 5]

// The way to sort numbers in ascending order
unsorted.sort((a, b) => a - b); // [1, 2, 3, 4, 5]
// The way to sort numbers in descending order
unsorted.sort((a, b) => b - a); // [5, 4, 3, 2, 1]

// Note that the sort method mutates the original array
// To avoid this, you can create a copy of the array before sorting it
const arr = [3, 7, 9, 6, 1];
const sortedArr = arr.sort((a, b) => a - b);
sortedArr;
arr;

// Example where we use the slice method to create a copy of the array before sorting it
const arr2 = [3, 7, 9, 6, 1];
const sortedArr2 = arr2.slice().sort((a, b) => a - b);
sortedArr2;
arr2;

// 1 Add new book object to the books array
const newBook = {
  id: 6,
  title: "The Hobbit",
  publicationDate: "1937-09-21",
  author: "J. R. R. Tolkien",
};

const updatedBooks = [...books, newBook];
updatedBooks;

// 2 Delete book object from the books array
const booksAfterDeletion = books.filter((book) => book.id !== 3);
booksAfterDeletion;

// 3 Update book object in the books array
const updatedBooks2 = books.map((book) => {
  if (book.id === 2) {
    return { ...book, title: "The Futurological Congress" };
  }
  return book;
});
