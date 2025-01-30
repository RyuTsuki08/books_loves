
async function get_books() {
   const result = await fetch('book.json')
  .then(response => response.json())
  .then(data => data)
  .catch(error => console.error('Error al leer el JSON:', error));
  return result;
}
  
//     let nombre = prompt("Ingrese su nombre: ");
//     let apellido = prompt("Ingrese su apellido: ");
//     let edad = prompt("Ingrese su edad: ");
//     let genero = prompt("Ingrese su genero (M/F): ");
//     let direccion = prompt("Ingrese su direccion: ");
//     let telefono = prompt("Ingrese su telefono: ");
//     let correo = prompt("Ingrese su correo: ");
//     let fecha = prompt("Ingrese su fecha de nacimiento: ");

//     let person_obj = {
//         nombre: nombre,
//         apellido: apellido,
//         edad: parseInt(edad),
//         genero: genero,
//         direccion: direccion,
//         telefono: telefono,
//         correo: correo,
//         fecha: fecha
//     }
// let nombre_parse = JSON.stringify(person_obj) // ""


// localStorage.setItem("user", nombre_parse) // Guardar en el almacenamiento local

// console.log(localStorage.getItem("user"))        

if(JSON.parse(localStorage.getItem("user"))){
    let user = JSON.parse(localStorage.getItem("user"))
    console.log("El usuario existe")
    document.write("<h1> Bienvenido" + user.nombre +  "</h1>")
} else{
    document.write("<h1>Registrate<h1>")
}

books = get_books()
console.log(books)