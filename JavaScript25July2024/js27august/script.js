const form = document.getElementById('myForm');
const statusDiv = document.getElementById('status');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const jsonData = {};

  for (const [key, value] of formData) {
    jsonData[key] = value;
  }

  const jsonString = JSON.stringify(jsonData);

  localStorage.setItem('formData', jsonString);

  statusDiv.textContent = 'Data pending...';
  statusDiv.className = 'pending';

  // Simulate a delay to demonstrate the pending state
  setTimeout(() => {
    statusDiv.textContent = 'Data sent successfully!';
    statusDiv.className = 'success';
  }, 2000);
});

// Get data from local storage
const storedData = localStorage.getItem('formData');
if (storedData) {
  const parsedData = JSON.parse(storedData);
  console.log(parsedData);
}