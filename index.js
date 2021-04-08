let totPages = 0;

function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  
  fetch('https://anapioficeandfire.com/api/books')
  .then(resp => resp.json())
  .then(json => renderBooks(json));
  
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name ;
    main.appendChild(h2);

  // new code 
    totPages = totPages + parseInt(book.numberOfPages); 
    const lu = document.createElement('lu');
    lu.innerHTML = ' '  ;
    h2.appendChild(lu);

    const li = document.createElement(`li`);
    li.innerHTML = book.numberOfPages + ' pages';
    h2.appendChild(li);
  
  });
  
  const h3 = document.createElement(`h3`);
  h3.innerHTML = "total Pages = " +  totPages ;
  main.appendChild(h3); 
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
