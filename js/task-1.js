// Select the categories list
const categoriesList = document.querySelector('#categories');

// Get all category items
const categoryItems = categoriesList.querySelectorAll('.item');

// Log the number of categories
console.log(`Number of categories: ${categoryItems.length}`);

// Iterate over each category item
categoryItems.forEach(item => {
  // Get the title of the category
  const categoryTitle = item.querySelector('h2').textContent;

  // Get the number of elements in the category
  const categoryElementsCount = item.querySelectorAll('ul li').length;

  // Log the category title and number of elements
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryElementsCount}`);
});