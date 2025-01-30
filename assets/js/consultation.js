document.addEventListener("DOMContentLoaded", function () {
    const consultationForm = document.getElementById("consultationForm");
  
    consultationForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent form submission
  
      // Get form data
      const formData = new FormData(consultationForm);
      const data = Object.fromEntries(formData.entries());
  
      // Simulate form submission (replace with actual API call)
      console.log("Form submitted:", data);
  
      // Show a success message
      alert("Thank you! Your consultation request has been submitted. We will contact you shortly.");
      consultationForm.reset(); // Reset the form
    });
  });