document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the values entered in the form
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation (you can replace with actual logic later)
    if (username === 'user' && password === 'password') {
        alert('Login successful!');
    } else {
        document.getElementById('error-message').style.display = 'block';
    }
});
