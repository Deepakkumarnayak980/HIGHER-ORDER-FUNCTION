const books = [
	{ title: "Book 1", author: "author 1", year: 2005 },
	{ title: "Book 2", author: "author 2", year: 2012 },
	{ title: "Book 3", author: "author 3", year: 2008 },
	{ title: "Book 4", author: "author 4", year: 2015 },
	// ... add more books here
  ];
   
  // Function to capitalize the first letter of a string
  function capitalizeFirstLetter(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
  }
   
  // Filter and capitalize books
  function filterAndCapitalizeBooks(booksList) {
	const filteredBooks = booksList.filter(book => book.year >= 2010);
	const capitalizedBooks = filteredBooks.map(book => ({
	  title: book.title,
	  author: capitalizeFirstLetter(book.author),
	}));
	return capitalizedBooks;
  }
   
  // Filter and capitalize the books, and display the result
  const filteredAndCapitalizedBooks = filterAndCapitalizeBooks(books);
  console.log("Filtered and Capitalized Books:", filteredAndCapitalizedBooks);
  