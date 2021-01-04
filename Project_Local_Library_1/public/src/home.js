function totalBooksCount(books) {
  return books.length 
}
function totalAccountsCount(accounts) {
  return accounts.length
}
function booksBorrowedCount(books) {
  return books.reduce((count, book) => {
    return !book.borrows[0].returned ? ++count : count;
  }, 0);
}

function getMostCommonGenres(books) {
  let genre = {};
  const result = [];
  for (const book of books) {
    genre[book.genre] ? (genre[book.genre] += 1) : (genre[book.genre] = 1);
  }
  for (let i = 0; i < Object.keys(genre).length; i++) {
    result.push({
      name: Object.keys(genre)[i],
      count: Object.values(genre)[i],
    });
  }
  return result
    .sort((genreA, genreB) => (genreA.count > genreB.count ? -1 : 1))
    .slice(0, 5);
}
function getMostPopularBooks(books) {
  let result = books
    .sort((book1, book2) => book2.borrows.length - book1.borrows.length)
    .map((book) => {
      return { name: book.title, count: book.borrows.length };
    });
  return result.slice(0, 5);
}
function getMostPopularAuthors(books, authors) {
  let result = [];
  authors.forEach((author) => {
   result[author.id] = {
      name: `${author.name.first} ${author.name.last}`,
      count: 0,
    };
  });
  books.forEach(
    (book) => (result[book.authorId].count += book.borrows.length)
  );
  let results = result.sort(
    (author1, author2) => author2.count - author1.count
  );
  return results.slice(0, 5);
}

module.exports = {
  totalBooksCount,
  totalAccountsCount,
  booksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
