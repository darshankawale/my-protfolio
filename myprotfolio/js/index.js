
const navLinks = document.querySelectorAll('.nav-link');

// Get the current page URL
const currentUrl = window.location.href;

// Loop through all navigation links
navLinks.forEach(link => {
    // Check if the link's href matches the current URL
    if (link.href === currentUrl) {
        // Add the 'active' class to the matching link
        link.classList.add('active');
    }
});



const mypassword = "12345678";

document.getElementById('verifyButton').addEventListener('click', function (event) {
  event.preventDefault();

  const password = document.getElementById('passwordInput').value;
  const passwordModal = bootstrap.Modal.getInstance(document.getElementById('passwordModal'));

  if (password === mypassword) {
    const currentDateTime = new Date().toLocaleString();
    document.getElementById('dateInput').value = currentDateTime;

    // Close Password Modal
    passwordModal.hide();

    // Show Blog Modal
    const blogModal = new bootstrap.Modal(document.getElementById('blogmodal'));
    blogModal.show();
  } else {
    alert('Incorrect password!');
  }
});


     

      
   





   // for contact form
 