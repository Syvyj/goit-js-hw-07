// Function to generate a random hex color
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Select the button and span elements
const changeColorButton = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');

// Add event listener for button click
changeColorButton.addEventListener('click', () => {
  // Generate a random color
  const newColor = getRandomHexColor();

  // Set the background color of the body
  document.body.style.backgroundColor = newColor;

  // Update the text content of the span with the new color
  colorSpan.textContent = newColor;
});