
// API URL
// const dbooks_api = "https://www.dbooks.org/api/";
// Fetch books from API
const dbooks_api = "https://www.dbooks.org/api/"
const user = JSON.parse(localStorage.getItem("user"))
let search_input = document.getElementById("search-input")


search_input.addEventListener("change", async (e) => {
    e.preventDefault()
    const search_term = e.target.value.trim()
    if (search_term) {
        const books = await get_books(dbooks_api + `search/${search_term}`)
        const bookList = document.getElementById('book-list');
        let booksHTML = '';
        books.map((book) => {
            booksHTML += `
                <div class="card" style="width: 30vw">
                    <img src="${book.image}" class="card-img-top" alt="${book.title}">
                    <div class="card-body">
                    <div class="texts">
    
                     <h5 class="card-title">${book.title}</h5>
                    <p class="small-desc">${book.subtitle}</p>
                    </div>
                        
                    <div class="card-like" id="like">
                        <div title="Like"  class="heart-container">
                        <input  class="checkbox" type="checkbox" >
                        <div class="svg-container">
                            <svg xmlns="http://www.w3.org/2000/svg" class="svg-outline" viewBox="0 0 24 24">
                                <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z">
                                </path>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" class="svg-filled" viewBox="0 0 24 24">
                                <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z">
                                </path>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" height="100" width="100" class="svg-celebrate">
                                <polygon points="10,10 20,20"></polygon>
                                <polygon points="10,50 20,50"></polygon>
                                <polygon points="20,80 30,70"></polygon>
                                <polygon points="90,10 80,20"></polygon>
                                <polygon points="90,50 80,50"></polygon>
                                <polygon points="80,80 70,70"></polygon>
                            </svg>
                            </div>
                        </div></div>
    
                    </div>
                    <div class="card-footer">
    
                    <a href="${book.url}" class="btn btn-primary">Ver libro</a>
                        <a href="${book.url}" class="btn btn-secondary">Descargar</a>
                    </div>
                       
                        </div>
    
                        
                </div>
                `;
                
                 });
                bookList.innerHTML = booksHTML;
    
                let like = document.querySelector('#like');
                let heart = document.querySelector('.heart-container');
                
            if(localStorage.getItem("logged") == "true"){
                like.style.visibility = "visible";
                heart.style.visibility = "visible";
                like.style.display = "block";
                heart.style.display = "block";
                
    
            }else{
                like.style.visibility = "hidden";
                heart.style.visibility = "hidden";
                like.style.display = "none";
                heart.style.display = "none";
            }
            } else {
                books_list.innerHTML = ' Libros no encontrados. Verifica tu búsqueda.'
            }
    }
);

async function get_books(api) {
        const result = await fetch(api)
        .then(response => response.json())
        .catch(error => console.error('Error al leer el JSON:', error));
        const books = result.books
      return books;
}

function get_book(id, books){
    const book = books.find(book => book.id === id)
    return book
}

function saveBook(book, user, favorite){
    try {
        let parsedFavorite = favorite ? JSON.parse(favorite)  : []
        const my_favorites = []

        console.log(parsedFavorite)

        if (parsedFavorite.length > 0) {
            const favorite = {
                "id": book.id,
                "title": book.title,
                "user": user.username,
                "book": book
            };
            parsedFavorite.push(favorite)
            localStorage.setItem("favorites", JSON.stringify(parsedFavorite))
            console.log("Actualizado")
        } else {
            const favorite = {
                "id": book.id,
                "title": book.title,
                "user": user.username,
                "book": book
            };

            my_favorites.push(favorite)

            localStorage.setItem("favorites", JSON.stringify(my_favorites))
            console.log("Creado")
            return my_favorites
        }
        
    } catch (error) {
        console.log(error)
    }
}

async function display_books() {
  const books = await get_books(dbooks_api + "/recent");
  const bookList = document.getElementById('book-list');
    let booksHTML = '';
    books.map((book) => {
        booksHTML += `
            <div class="card" style="width: 30vw">
                <img src="${book.image}" class="card-img-top" alt="${book.title}">
                <div class="card-body">
                <div class="texts">

                 <h5 class="card-title">${book.title}</h5>
                <p class="small-desc">${book.subtitle}</p>
                </div>
                    
                <div class="card-like" id="like">
                    <div title="Like"  class="heart-container">
                    <input  class="checkbox" type="checkbox" >
                    <div class="svg-container">
                        <svg xmlns="http://www.w3.org/2000/svg" class="svg-outline" viewBox="0 0 24 24">
                            <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z">
                            </path>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" class="svg-filled" viewBox="0 0 24 24">
                            <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z">
                            </path>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" height="100" width="100" class="svg-celebrate">
                            <polygon points="10,10 20,20"></polygon>
                            <polygon points="10,50 20,50"></polygon>
                            <polygon points="20,80 30,70"></polygon>
                            <polygon points="90,10 80,20"></polygon>
                            <polygon points="90,50 80,50"></polygon>
                            <polygon points="80,80 70,70"></polygon>
                        </svg>
                        </div>
                    </div></div>

                </div>
                <div class="card-footer">

                <a href="${book.url}" class="btn btn-primary">Ver libro</a>
                    <a href="${book.url}" class="btn btn-secondary">Descargar</a>
                </div>
                   
                    </div>

                    
            </div>
            `;
            
             });
            bookList.innerHTML = booksHTML;

            let like = document.querySelector('#like');
            let heart = document.querySelector('.heart-container');
            
        if(localStorage.getItem("logged") == "true"){
            like.style.visibility = "visible";
            heart.style.visibility = "visible";
            like.style.display = "block";
            heart.style.display = "block";
            

        }else{
            like.style.visibility = "hidden";
            heart.style.visibility = "hidden";
            like.style.display = "none";
            heart.style.display = "none";
        }

    return books
}


document.addEventListener("DOMContentLoaded", async (e) => {
    await display_books()
})

document.addEventListener("click", async (e) => {
    const books = await get_books()
    if(e.target.classList.contains("checkbox")){
        console.log(e.target.dispatchEvent("click"))
        let book = books.find(book => book.title == bookId)
        // let favorites = localStorage.getItem("favorites")
        const savedBook = saveBook(book, user, favorites)
    }
})






