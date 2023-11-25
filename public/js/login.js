const loginFormHandler = async (event) => {

  const username = document.querySelector('#usernameInput').value.trim();
  const password = document.querySelector('#passwordInput').value.trim();

  if (username && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log in.');
    }
  }
};

const signupFormHandler = async (event) => {

  const username = document.querySelector('#usernameInput').value.trim();
  const password = document.querySelector('#passwordInput').value.trim();
  
  if (username && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to sign up.');
    }
  }
};

// quickly switch between login and signup forms.
const signInForm = () => document.location.replace('/login');
const signUpForm = () => document.location.replace('/signup');