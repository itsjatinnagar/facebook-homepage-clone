const passwordInput = document.getElementById("password"),
    passwordToggle = document.getElementById("password-toggle");
let toggleClass = passwordToggle.classList;

passwordInput.addEventListener("input", () => {
    if (passwordInput.value != "") {
        passwordToggle.style.display = "inline";
    } else {
        passwordToggle.style.display = "none";
    }
});
