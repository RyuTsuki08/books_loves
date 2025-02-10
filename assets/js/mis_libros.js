let user = JSON.parse(localStorage.getItem("user"));
let favorites = JSON.parse(localStorage.getItem("favorites"))
let books_list = document.getElementById("book-list")

if (user) {
    let logged = JSON.parse(localStorage.getItem("logged"));
    if (logged == true) {
        books_list.innerHTML = ''

        favorites.map((e) => {
            let book = e;
`
            <div class="card" style="width: 30vw">
                <img src="${book.image}" class="card-img-top" alt="${book.title}">
                <div class="card-body">
                <div class="texts">

                 <h5 class="card-title">${book.title}</h5>
                <p class="small-desc">${book.subtitle}</p>
                </div>
                    
                <div class="card-footer">

                <a href="${book.url}" class="btn btn-primary">Ver libro</a>
                    <a href="${book.url}" class="btn btn-secondary">Descargar</a>
                </div>
                   
                    </div>

                    
            </div>
            `;
            books_list.innerHTML += bookHTML;
        })
        }
} else {
    console.log("No hay usuario loggeado");
    window.location.replace("../index.html");
}