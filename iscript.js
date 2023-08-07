// Function to handle the login form submission
function handleLogin() {
    // Get the values from the input fields
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  
    // Perform backend validation and authentication
    // Replace this code with your actual backend logic
  
    // Simulate a successful login for demonstration purposes
    if (email && password) {
      alert("Login successful");
      // Redirect the user to the home page or another page
      window.location.href = "userindex.html";
    } else {
      alert("Invalid email or password. Please try again.");
    }
  }
  