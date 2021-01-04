function findAuthorById(authors, id) {
  const authFind = authors.find(auth => auth.id === id)
  return authFind
}
function findBookById(books, id) {
  const bookFind = books.find(book => book.id === id)
  return bookFind
}
function partitionBooksByBorrowedStatus(books) {
  function borrowedBooksFilter(book) {
  return book.borrows.some((borrow) => !borrow.returned);
}
  let borrowedBooks = books.filter(borrowedBooksFilter);
  let returnedBooks = books.filter((book) => {
    return !book.borrows.some((borrow) => !borrow.returned);
  });
  return [borrowedBooks, returnedBooks];
}
function getBorrowersForBook(book, accounts) {
  let borrowers = [];
  book.borrows.forEach((borrow) => {
    let account = accounts.find((account) => borrow.id === account.id);
    let accountCopy = { ...account }; 
    accountCopy.returned = borrow.returned;
    borrowers.push(accountCopy);
  });
  return borrowers.slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
