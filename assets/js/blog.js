let user = JSON.parse(localStorage.getItem("user"));
let logged = JSON.parse(localStorage.getItem("logged"));
let name = document.getElementById("name");


if (logged == true) {
    name.innerHTML = user.username;
    } else {
        name.innerHTML = "Welcome";
    }
