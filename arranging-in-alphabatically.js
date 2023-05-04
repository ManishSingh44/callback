function getBookTitles(books, callback) {
    const titles = books.map(book => book.title).sort();
    callback(titles);
  }
  
  const books = [
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { title: '1984', author: 'George Orwell', year: 1949 },
    { title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
  ];
  
  function logTitles(titles) {
    console.log('Book titles in alphabetical order:');
    titles.forEach(title => console.log(title));
  }
  
  getBookTitles(books, logTitles);
  