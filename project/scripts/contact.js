//code for handling contact form.
document.addEventListener('DOMContentLoaded', function(){
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