let button_submit = document.getElementById("submit")

function createData(document){
    let nombre = document.getElementById("name").value
    let username = document.getElementById("username").value    
    let email = document.getElementById("email").value
    let telefono = document.getElementById("phone").value
    let password = document.getElementById("password").value
    // let password2 = document.getElementById("password2").value

    const data = {
        nombre: nombre,
        username: username,
        email: email,
        telefono: telefono,
        password: password,
        // password2: password2
        }
        return data
}

function submitData(data){
    console.log(data)
        let data_string = JSON.stringify(data)
        localStorage.setItem("user", data_string)
}

button_submit.addEventListener("click", (e) =>{
    e.preventDefault()
    window.location.replace("/")
    const data = createData(document)
    submitData(data)
})

