
//js code for contact form
document.addEventListener('DOMContentLoaded', function() {
    const feedbackForm = document.getElementById('feedbackForm');
    //js code for the register button on the home page.
    document.getElementById('registerButton').addEventListener("click", redirectFunction);

    function redirectFunction() {
        window.location.href="register.html";
    }

    //js code for login button on home page
    document.getElementById('loginButton').addEventListener("click", redirect);

    function redirect() {
        window.location.href="login.html"
    }

    //prevent the default form submission
    feedbackForm.addEventListener('submit', function(event) {
        event.preventDefault();

        //collect user data
        const firstName = document.getElementById('fname').value;
        const lastName = document.getElementById('lname').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('review').value;

        //display the notification to the user
        alert(`Thank you, ${firstName} ${lastName}, for your feedback.\nWe have received your message and we will get back to you shortly.`);

        //reset the form fields.
        feedbackForm.reset();
    });
});

//js code for register form
document.addEventListener('DOMContentLoaded', function() {
    // Define the list of universities
    const universities = [
        {
            name: "University of Nairobi",
            country: "kenya",
            "average size":25000,
        },
        {
            name:  "Makerere University",
            country : "Ugnda"
        },
        {
            name : "Addis Ababa University",
            country : "Ethiopia"
        },
        {
            name : "University of Dar es Salaam",
            country : "Tanzania"
        },
        {
            name : "University of Cape Town",
            country : "South Africa"
        },
        {
            name : "Harvard University",
            country : "United States"
        },
        {
            name :  "Stanford University",
            country : "England"
        } 
       
    ];

    // Populate the university dropdown
    const universitySelect = document.getElementById('university');
    universities.forEach(university => {
        let option = document.createElement('option');
        option.value = university.country;
        option.text = university.name;
        universitySelect.appendChild(option);
    });

    // Handle form submission
    const registerForm = document.getElementById('registerForm');
    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Collect form data
        const formData = {
            firstName: document.getElementById('fname').value,
            lastName: document.getElementById('lname').value,
            studentId: document.getElementById('studentId').value,
            password: document.getElementById('password').value,
            email: document.getElementById('email').value,
            age: document.getElementById('age').value,
            gender: document.getElementById('gender').value,
            address: document.getElementById('address').value,
            university: document.getElementById('university').value
        };

        // Store the data in local storage
        localStorage.setItem('studentRegistration', JSON.stringify(formData));

        // Notify the user
        alert('Your registration has been submitted successfully.');

        // Reset the form
        registerForm.reset();
    });
});
