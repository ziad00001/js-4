
var loginButton = document.getElementById('login');
loginButton.addEventListener('click', function(e) {
    e.preventDefault(); 

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    
    var authenticated = authenticate(email, password);
    if (authenticated) {
        alert("Success!");
        
        document.getElementById('authContainer').style.display = 'none';
        document.getElementById('homeContainer').style.display = 'block';
        document.getElementById('username').textContent = email;
    } else {
        alert("Invalid.");
    }
});


function authenticate(email, password) {
    
    if (email === "ziadeldahshan2@gmail.com" && password === "password") {
        return true;
    } else {
        return false;
    }
}


function toggleForm() {
    
}

function logout() {

    document.getElementById('authContainer').style.display = 'block';
    document.getElementById('homeContainer').style.display = 'none';
}