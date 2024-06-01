//javascript code for the login page.
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Get user input
        const studentId = document.getElementById('studentId').value;
        const password = document.getElementById('password').value;

        // Retrieve stored user data from localStorage
        const storedData = localStorage.getItem('studentRegistration');
        
        if (storedData) {
            const studentData = JSON.parse(storedData);

            // Check if the entered credentials match the stored credentials
            if (studentData.studentId === studentId && studentData.password === password) {
                alert('Login successful!');
                // Redirect to the dashboard or home page after successful login
                window.location.href = 'payment.html';
            } else {
                alert('Invalid student ID or password.');
            }
        } else {
            alert('No registered users found.');
        }
    });
});
