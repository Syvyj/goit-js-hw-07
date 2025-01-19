// Select the input and output elements
const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

// Add event listener for input event
nameInput.addEventListener('input', () => {
  // Get the trimmed value of the input
  const trimmedValue = nameInput.value.trim();

  // Update the output element
  nameOutput.textContent = trimmedValue ? trimmedValue : 'Anonymous';
});