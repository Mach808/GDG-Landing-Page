// Action for the "Join Now" button
document.getElementById("cta-button").addEventListener("click", function () {
    alert("Thank you for your interest in GDG! Visit our website to register.");
  });
  
document.addEventListener("DOMContentLoaded", function () {
// Select all links with the 'quick-link' class
const quickLinks = document.querySelectorAll(".quick-links");

// Add a click event listener to each link
quickLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
    event.preventDefault(); // Prevents the default navigation behavior
    alert("Please visit the GDG website to learn more about our community and opportunities!");

    });
    
});
});
  