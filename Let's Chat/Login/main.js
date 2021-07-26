

function signIn(){
        var username = document.getElementById("username").value;
        var email = document.getElementById("email").value;
        localStorage.setItem("Username",username);
        localStorage.setItem("Email",email);
}
