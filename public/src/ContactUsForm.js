
/*document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
    
    var firstNameInput = contactForm.querySelector('input[type="text"][placeholder="First Name"]');
    var lastNameInput = contactForm.querySelector('input[type="text"][placeholder="Last Name"]');
    var emailInput = contactForm.querySelector('input[type="email"][placeholder="Email (Required)"]');
    var messageTextarea = contactForm.querySelector('#messageForm');
    
    // Construct JSON object
    var formData = {
        "firstName": firstName,
        "lastName": lastName,
        "Email": email,
        "Message": message
    };

    // Send data to Cloud Function
    fetch("YOUR_CLOUD_FUNCTION_ENDPOINT", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (response.ok) {
            alert("Form submitted successfully!");
        } else {
            alert("Error submitting form. Please try again later.");
        }
    })
    .catch(error => {
        console.error("Error:", error);
        alert("An error occurred. Please try again later.");
    });
});*/