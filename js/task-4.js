// Select the login form
const loginForm = document.querySelector('.login-form');

// Add event listener for form submit
loginForm.addEventListener('submit', (event) => {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get form elements
  const { email, password } = loginForm.elements;

  // Trim the values
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  // Check if any field is empty
  if (!emailValue || !passwordValue) {
    alert('All form fields must be filled in');
    return;
  }

  // Create an object with the form data
  const formData = {
    email: emailValue,
    password: passwordValue,
  };

  // Log the form data to the console
  console.log(formData);

  // Reset the form
  loginForm.reset();
});
