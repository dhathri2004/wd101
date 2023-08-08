// Function to validate date of birth for age between 18 and 55
function isValidDOB(dob) {
    const today = new Date();
    const birthDate = new Date(dob);
    const age = today.getFullYear() - birthDate.getFullYear();
    return age >= 18 && age <= 55;
  }
  
  // Function to add a new user to the table
  function addUserToTable(user) {
    const table = document.getElementById('user-table');
    const newRow = table.insertRow();
    newRow.innerHTML = `
      <td>${user.name}</td>
      <td>${user.email}</td>
      <td>${user.password}</td>
      <td>${user.dob}</td>
      <td>${user.acceptedTerms ? 'Yes' : 'No'}</td>
    `;
  }
  
  // Function to handle form submission
  function handleSubmit(event) {
    event.preventDefault();
  
    // Retrieve form inputs
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    // Retrieve other input values
  
    // Validate date of birth
    const dob = document.getElementById('dob').value;
    if (!isValidDOB(dob)) {
      // Display error message or add invalid class to input field
      return;
    }
  
    // Create user object
    const user = { name, email, /* other properties */ };
  
    // Add user to table
    addUserToTable(user);
  
    // Clear form inputs
    document.getElementById('registration-form').reset();
  }
  
  // Attach event listener to form submit
  document.getElementById('registration-form').addEventListener('submit', handleSubmit);
  
