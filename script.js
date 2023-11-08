// Get a reference to the form element by its ID
const foundPetForm = document.getElementById('foundPetForm');
const tableBody = document.querySelector('tbody'); // Get a reference to the table body

// Add an event listener to the form to handle the submission
foundPetForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form input values
    const recordType = document.getElementById('recordType').value || 'N/A';
    const location = document.getElementById('location').value || 'N/A';
    const name = document.getElementById('name').value || 'N/A';
    const type = document.getElementById('type').value || 'N/A';
    const age = document.getElementById('age').value || 'N/A';
    const color = document.getElementById('color').value || 'N/A';
    const date = document.getElementById('date').value || 'N/A';
    const Dtype = document.getElementById('Dtype').value || 'N/A';

    // Create a new table row
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${recordType}</td>
        <td>${location}</td>
        <td>${name}</td>
        <td>${type}</td>
        <td>${age}</td>
        <td>${color}</td>
        <td>${date}</td>
        <td>${Dtype}</td>
    `;

    // Append the new row to the table body
    tableBody.appendChild(newRow);

    // Reset the form after submission if needed
    foundPetForm.reset();
});
