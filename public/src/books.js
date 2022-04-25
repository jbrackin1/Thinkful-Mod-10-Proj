function findAuthorById(authors, id) {
  return authors.find(res => res.id === id);
}

function findBookById(books, id) {
  return books.find(res => res.id === id);
}

function partitionBooksByBorrowedStatus(books) {
let res= [[],[]];
books.forEach(book => {
  if(book.borrows[0].returned){
    res[1].push(book)
  }
  else{
    res[0].push(book)
  }
});
return res;
}

function getBorrowersForBook(book, accounts) {
  const borrowedBooks = accounts.filter(account => {
    const borrow = book.borrows.find(borrow => borrow.id === account.id);
    if(borrow){
      account.returned = borrow.returned;
      return true;
    } 
    else{
      return false;
    }
  })
  return borrowedBooks.slice(0,10);

  
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
