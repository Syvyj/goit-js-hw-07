// Function to generate a random hex color
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Select the controls and boxes elements
const controls = document.querySelector('#controls');
const boxes = document.querySelector('#boxes');
const input = controls.querySelector('input');
const createButton = controls.querySelector('[data-create]');
const destroyButton = controls.querySelector('[data-destroy]');

// Function to create boxes
function createBoxes(amount) {
  const elements = [];
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const div = document.createElement('div');
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    elements.push(div);
    size += 10;
  }

  boxes.append(...elements);
}

// Function to destroy boxes
function destroyBoxes() {
  boxes.innerHTML = '';
}

// Add event listener for create button
createButton.addEventListener('click', () => {
  const amount = parseInt(input.value.trim(), 10);

  if (amount >= 1 && amount <= 100) {
    destroyBoxes();
    createBoxes(amount);
    input.value = '';
  } else {
    alert('Please enter a number between 1 and 100');
  }
});

// Add event listener for destroy button
destroyButton.addEventListener('click', () => {
  destroyBoxes();
});