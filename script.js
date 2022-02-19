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

passwordToggle.addEventListener("click", () => {
    if (toggleClass.contains("fa-eye")) {
        toggleClass.remove("fa-eye");
        toggleClass.add("fa-eye-slash");
        passwordInput.type = "password";
    } else {
        toggleClass.remove("fa-eye-slash");
        toggleClass.add("fa-eye");
        passwordInput.type = "text";
    }
});

document.getElementById("current-year").innerText = new Date().getFullYear();
