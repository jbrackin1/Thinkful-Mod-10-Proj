function findAccountById(accounts, id) {
  const found = accounts.find((account) => account.id === id);
  return found;
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((a,b) => a.name.last.toLowerCase() > b.name.last.toLowerCase() ? 1 : -1);
}

function getTotalNumberOfBorrows(account, books) {
  const id = account.id;
  let total = 0;
  
  books.forEach(book => book.borrows.forEach (borrow => {if (id === borrow.id) total++}));
  return total;
  
}

function getBooksPossessedByAccount(account, books, authors) {
const id = account.id;
return books.filter( book => book.borrows.some(borrow => !borrow.returned && borrow.id === id)).map( book => {
  const author = authors.find( writer => writer.id === book.authorId);
  
return {author, ...book};
})
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
