//code for register and login button

document.addEventListener('DOMContentLoaded', function() {
        //js code for the register button on the home page.
        document.getElementById('registerButton').addEventListener('click', redirectFunction);

        function redirectFunction() {
            window.location.href="register.html";
        }
    
        //js code for login button on home page
        document.getElementById('loginButton').addEventListener("click", redirect);
    
        function redirect() {
            window.location.href="login.html"
        }

});