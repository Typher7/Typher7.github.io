const form = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent form submission

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Perform login validation
  if (username === 'admin' && password === 'password') {
    // Successful login
    alert('Login successful!');
    // Redirect or perform any other action after successful login
  } else {
    // Failed login
    errorMessage.textContent = 'Invalid username or password';
  }
});