window.onload = function() {
    if (localStorage.getItem("logged") === "true") {
        document.getElementById("login-container").classList.add("hidden");
        document.getElementById("app").classList.remove("hidden");
    }
}

// Usuario de prueba
const USER = "admin";
const PASS = "1234";

// LOGIN
function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const error = document.getElementById("login-error");

    if (username === USER && password === PASS) {
    localStorage.setItem("logged", "true");

    document.getElementById("login-container").classList.add("hidden");
    document.getElementById("app").classList.remove("hidden");
    } else {
        error.textContent = "Usuario o contraseña incorrectos";
        error.style.color = "red";
    }
}

// LOGOUT
function logout() {
    document.getElementById("app").classList.add("hidden");
    document.getElementById("login-container").classList.remove("hidden");
}

// CAMBIO DE SECCIÓN
function showSection(section) {
    document.getElementById("home").classList.add("hidden");
    document.getElementById("contact").classList.add("hidden");

    document.getElementById(section).classList.remove("hidden");
}