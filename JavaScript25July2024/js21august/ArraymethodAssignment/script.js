// Initialization fruits array
const fruits = ['trawberry', 'Apple', 'Banana', 'Cherry', 'Date', 'lychee'];

// Function to render fruits list
function renderFruitsList() {
  const fruitsList = document.getElementById('fruits-list');
  fruitsList.innerHTML = '';
  fruits.forEach((fruit, index) => {
    const fruitElement = document.createElement('div');
    fruitElement.classList.add('fruit');
    fruitElement.textContent = `${index + 1}. ${fruit}`;
    fruitsList.appendChild(fruitElement);
  });
}

// Render initial fruits list
renderFruitsList();

// Search button click event handler
document.getElementById('search-btn').addEventListener('click', () => {
  const searchInput = document.getElementById('search-input');
  const searchValue = searchInput.value.trim();
  if (searchValue) {
    const foundFruit = fruits.find((fruit) => fruit.toLowerCase() === searchValue.toLowerCase());
    if (foundFruit) {
      alert(`Found ${foundFruit} at index ${fruits.indexOf(foundFruit)}`);
    } else {
      alert(`No fruit found with name ${searchValue}`);
    }
    searchInput.value = '';
  }
});

// Sort A-Z button click event handler
document.getElementById('sort-btn').addEventListener('click', () => {
  fruits.sort((a, b) => a.localeCompare(b));
  renderFruitsList();
});

// Sort Z-A button click event handler
document.getElementById('sort-z-btn').addEventListener('click', () => {
  fruits.sort((a, b) => b.localeCompare(a));
  renderFruitsList();
});

// Add fruit button click event handler
document.getElementById('add-btn').addEventListener('click', () => {
  const newFruit = prompt('Enter a new fruit name');
  if (newFruit) {
    fruits.push(newFruit);
    renderFruitsList();
  }
});

// Remove fruit button click event handler
document.getElementById('remove-btn').addEventListener('click', () => {
  const fruitToRemove = prompt('Enter the fruit name to remove');
  if (fruitToRemove) {
    const index = fruits.indexOf(fruitToRemove);
    if (index !== -1) {
      fruits.splice(index, 1);
      renderFruitsList();
    } else {
      alert(`No fruit found with name ${fruitToRemove}`);
    }
  }
});