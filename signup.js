document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;

    // Check if username already exists in localStorage
    if (localStorage.getItem('username') === newUsername) {
        document.getElementById('signup-error').style.display = 'block';
    } else {
        // Store the new credentials in localStorage
        localStorage.setItem('username', newUsername);
        localStorage.setItem('password', newPassword);
        alert('Account created successfully! You can now log in.');
        window.location.href = 'index.html'; // Redirect to login page
    }
});
