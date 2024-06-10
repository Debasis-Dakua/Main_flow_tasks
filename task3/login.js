function validateLoginForm() {
    // Get form elements
    var email = document.getElementById('loginEmail').value;
    var password = document.getElementById('loginPassword').value;

    // Retrieve stored users from localStorage
    var users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if email is empty
    if (email === '') {
        alert('Please enter your email.');
        return false;
    }

    // Check if password is empty
    if (password === '') {
        alert('Please enter your password.');
        return false;
    }

    // Check if user exists and password matches
    var user = users.find(function(user) {
        return user.email === email && user.password === password;
    });

    if (user) {
        window.location.href = "home.html";
        alert('Login successful!');
        
        // Store the logged-in user information
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        
        return true;
    } else {
        alert('Incorrect email or password.');
        return false;
    }
}
