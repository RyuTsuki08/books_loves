let button_submit = document.getElementById("submit")
let button_sign = document.getElementById("sign_button")
function encriptarContraseña(password) {
    let hash = 0;
    if (password.length === 0) return hash;
    for (let i = 0; i < password.length; i++) {
        const char = password.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash |= 0; // Convert to 32bit integer
    }
    return hash.toString();
}

function createUser(document) {
    let nombre = document.getElementById("sup_name").value;
    let username = document.getElementById("sup_username").value;
    let email = document.getElementById("sup_email").value;
    let telefono = document.getElementById("sup_phone").value;
    let password = document.getElementById("sup_password").value;



    const data = {
        nombre: nombre,
        username: username,
        email: email,
        telefono: telefono,
        password: encriptarContraseña(password),
    };
    return data;
}

function verificarContraseña(inputPassword, storedHash) {
    return encriptarContraseña(inputPassword) === storedHash;
}


function login_user(document) {
    let email = document.getElementById("sign_email").value;
    let password = document.getElementById("sign_password").value;
    let storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser.email === email) {
        if (verificarContraseña(password, storedUser.password)) {
            alert("Login exitoso");
            localStorage.setItem("logged", true);
            window.location.replace("../../index.html");
        } else {
            console.log("Contraseña incorrecta");
        }
    } else {
        console.log("Usuario no encontrado");
    }
}

function submitData(data) {
    console.log(data);
    let data_string = JSON.stringify(data);
    localStorage.setItem("user", data_string);
}

button_submit.addEventListener("click", (e) => {
    e.preventDefault();
    const data = createUser(document);
    if(data.username == "" && data.password == "" && data.email == "" && data.telefono == "" && data.nombre == ""){
        alert("El campo de usuario no puede estar vacío");
    }else{
        submitData(data);
        window.location.replace("../../index.html");
    }
});

console.log(button_sign)
console.log(button_submit)

button_sign.addEventListener("click", (e) => {
    e.preventDefault();
    if (localStorage.getItem("user")) {
        login_user(document);
    } else{
        alert("El usuario no existe. Por favor regístrese");
    }
});

