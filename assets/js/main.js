// FORM VALIDATION
(() => {
  'use strict';

  // Select all forms requiring validation
  const forms = document.querySelectorAll('.needs-validation');

  // Apply custom Bootstrap validation styles and prevent invalid form submission
  forms.forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }

      form.classList.add('was-validated');
    });
  });
})();

// CHANGE NAVBAR SHADOW
// Select the navbar element
const navbar = document.querySelector('.navbar-scroll');

// Function to add/remove box-shadow based on scroll position
function toggleNavbarShadow() {
  if (window.scrollY > 0) {
    // Add box-shadow to the bottom when scrolling
    navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
  } else {
    // Remove box-shadow when at the top
    navbar.style.boxShadow = 'none';
  }
}

// Listen for the scroll event
window.addEventListener('scroll', toggleNavbarShadow);

// Initial check in case the page is already scrolled
toggleNavbarShadow();
