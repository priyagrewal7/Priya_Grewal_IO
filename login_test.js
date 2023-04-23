const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("error-msg-second-line");
const loginSuccess = document.getElementById("login-success");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();

    const password = loginForm.password.value;

    if (password === "Marvelavengers3117" || password === "AdminAccess" || password === "TempTest") {
        loginSuccess.style.opacity = 1;
        setTimeout(function(){
            window.location.href = "camerahome.html";   
        }, 3000);
        
       
        
    } else {
        loginErrorMsg.style.opacity = 1;
        
    }
})
