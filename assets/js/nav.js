let login_button = document.getElementById("nav_login")
let logout_menu = document.getElementById("logout_menu")
let logout_button = document.getElementById("logout_button")
let profile_button = document.getElementById("nav_profile")
let nav_books = document.getElementById("nav_books")
let register_text = document.getElementById("register_text");
let login_text = document.getElementById("login_text");
let blog_link = document.getElementById("blog_link");
let username_dropdown = document.getElementById("username_dropdown");


if(localStorage.getItem("user") && localStorage.getItem("logged") == "true"){
    blog_link.style.visibility = "visible";
    login_button.style.visibility = "hidden";
    login_button.style.display = "none";
    logout_menu.style.visibility = "visible";
    login_text.style.visibility = "hidden";
    register_text.style.visibility = "hidden";
    register_text.style.display = "none";

    let user = JSON.parse(localStorage.getItem("user"));
    username_dropdown.innerHTML = user.username;

} else if(localStorage.getItem("user") && localStorage.getItem("logged") != "true"){
    login_button.style.visibility = "visible";
    blog_link.style.visibility = "hidden";
    logout_menu.style.visibility = "hidden";
    login_text.style.visibility = "visible";
    register_text.style.visibility = "hidden";
    register_text.style.display = "none";
}else{
    blog_link.style.visibility = "hidden";
    login_button.style.visibility = "visible";
    logout_menu.style.visibility = "hidden";
    register_text.style.visibility = "visible";
    login_text.style.visibility = "hidden";
    login_text.style.display = "none";


}

logout_button.addEventListener("click", (e) => {
    if(localStorage.getItem("user")) {
        localStorage.removeItem("logged");
        window.location.replace("index.html");
    }
})
