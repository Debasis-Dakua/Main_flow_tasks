function validateAndStoreSignUpForm() {
    // Get form elements
    var username = document.getElementById('signupUsername').value;
    var email = document.getElementById('signupEmail').value;
    var password = document.getElementById('signupPassword').value;
    var confirmPassword = document.getElementById('signupConfirmPassword').value;

    // Validate form fields
    if (username === '' || email === '' || password === '' || confirmPassword === '') {
        alert('Please fill in all fields.');
        return false;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return false;
    }

    // Retrieve existing users from localStorage
    var users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if the user already exists
    var userExists = users.some(function(user) {
        return user.email === email;
    });

    if (userExists) {
        alert('User already exists.');
        return false;
    }

    // Store new user information in users array
    var newUser = {
        username: username,
        email: email,
        password: password
    };

    users.push(newUser);

    window.location.href = "home.html";
    // Save updated users array to localStorage
    localStorage.setItem('users', JSON.stringify(users));

    // Validation and storage successful
    alert('Sign-up successful!');
   
    return true;
}
