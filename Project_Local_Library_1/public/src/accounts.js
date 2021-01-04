function findAccountById(accounts, id) {
  const accFind = accounts.find(account => account.id === id)
  return accFind
}
function sortAccountsByLastName(accounts) {
  return accounts.sort((accA, accB) => accA.name.last > accB.name.last ? 1 : -1)
}
function numberOfBorrows(account, books) {
  let total = 0
   books.forEach(book => { 
     book.borrows.forEach(borrow => {
       if(borrow.id === account.id)
         total += 1
     })
   })
   return total
}
function getBooksPossessedByAccount(account, books, authors) {
  let checkedOutBooks = books.filter((book) => { 
    return book.borrows.some((borrow) => { 
      return borrow.id === account.id && !borrow.returned; 
    });
  });
  let results = [];
  checkedOutBooks.forEach((book) => {
    let author = authors.find((author) => author.id === book.authorId);
    let bookCopy = { ...book }; 
    bookCopy.author = author;
    results.push(bookCopy);
  });
  return results;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  numberOfBorrows,
  getBooksPossessedByAccount,
};
