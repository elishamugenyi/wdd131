//different code to handle the register form on the regiter page.
document.addEventListener('DOMContentLoaded', function(){

    // Define the list of universities
    const universities = [
        {
            name: "University of Nairobi",
            country: "kenya"
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
            country : "United States"
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