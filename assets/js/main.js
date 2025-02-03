async function get_books() {
    try {
        const result = await fetch('book.json')
        .then(response => response.json())
        .catch(error => console.error('Error al leer el JSON:', error));
      return result;
    } catch (error) {
        console.error('Error al leer el JSON:', error);
    }
}

async function display_books() {
  const books = await get_books();
  console.log(books);
  const bookList = document.getElementById('book-list');
    let booksHTML = '';
    books.forEach(book => {
        booksHTML += `
            <div class="card">
                <img src="${book.image}" class="card-img-top" alt="${book.title}">
                <div class="card-body">
                    <h5 class="card-title">${book.title}</h5>
                    <p class="card-text">${book.description}</p>
                    <a href="#" class="btn btn-primary">Ver más</a>
                </div>
            </div>
        `;});
        bookList.innerHTML = booksHTML;
  return books
}

if(JSON.parse(localStorage.getItem("user"))) {
  let user = JSON.parse(localStorage.getItem("user"));
  console.log("El usuario existe");
  document.write("<h1> Bienvenido " + user.nombre + "</h1>");
} else {
  document.write("<h1>Registrate<h1>");
}

let books = display_books()

