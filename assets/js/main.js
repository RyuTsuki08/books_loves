if(JSON.parse(localStorage.getItem("user"))) {
  let user = JSON.parse(localStorage.getItem("user"));
    let logged = JSON.parse(localStorage.getItem("logged"));
    if (logged == true) {
        console.log(user);
    }
} else {
    console.log("No hay usuario loggeado");
}


