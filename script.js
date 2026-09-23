// =========================
// LOGIN
// =========================

// Get the login button in the header
const openLogin = document.getElementById("openLogin");

// Get the login form
const loginForm = document.getElementById("loginForm");

// Get the login button inside the form
const loginButton = document.getElementById("loginButton");


// =========================
// OPEN LOGIN FORM
// =========================

openLogin.addEventListener("click", function () {

    loginForm.style.display = "block";

});


// =========================
// LOGIN
// =========================

loginButton.addEventListener("click", function () {

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;


    // Check if the fields are empty
    if (email === "" || password === "") {

        alert("Please enter your email and password.");

    } else {

        alert("Login successful!");

        // Clear the form
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";

        // Hide the login form
        loginForm.style.display = "none";
    }

});


// =========================
// DARK MODE
// =========================

// Get the dark mode button
const darkModeBtn = document.getElementById("darkModeBtn");


// Check if dark mode was already selected
if (localStorage.getItem("darkMode") === "enabled") {

    document.body.classList.add("dark-mode");

    darkModeBtn.textContent = "☀️ Light Mode";

}


// Dark mode button
darkModeBtn.addEventListener("click", function () {

    // Add or remove dark mode
    document.body.classList.toggle("dark-mode");


    // If dark mode is ON
    if (document.body.classList.contains("dark-mode")) {

        localStorage.setItem("darkMode", "enabled");

        darkModeBtn.textContent = "☀️ Light Mode";

    }

    // If dark mode is OFF
    else {

        localStorage.setItem("darkMode", "disabled");

        darkModeBtn.textContent = "🌙 Dark Mode";

    }

});