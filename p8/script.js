let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("form");

form.addEventListener("submit", function(evt) {
    evt.preventDefault();

    document.querySelector("#emailerror").textContent = "";
    document.querySelector("#passworderror").textContent = "";
    document.querySelector("#result-message").textContent = ""; 

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=[\]{};':"\\|,.<>/?]).{8,}$/;
    let emailans = emailRegex.test(email.value);
    let passwordans = passwordRegex.test(password.value);

    let isValid = true;
    if (!emailans) {
        document.querySelector("#emailerror").textContent = "Email is error!";
        document.querySelector("#emailerror").style.display = "initial";
        document.querySelector("#emailerror").style.color = "red";
        isValid = false;
    }

    if(!passwordans) {
        document.querySelector("#passworderror").textContent = "Password is error!";
        document.querySelector("#passworderror").style.display = "initial";
        document.querySelector("#passworderror").style.color = "red";
        isValid = false;
    }
    if (isValid) {
        document.querySelector("#result-message").textContent = "Email and Password are valid";
        document.querySelector("#result-message").style.color = "green";
    }
});