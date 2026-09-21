
// Get the login button in the header
const openLogin = document.getElementById("openLogin");

// Get the login form
const loginForm = document.getElementById("loginForm");

// Get the login button inside the form
const loginButton = document.getElementById("loginButton");

// Open the login form
openLogin.addEventListener("click", function () {

    loginForm.style.display = "block";

});


// Login
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