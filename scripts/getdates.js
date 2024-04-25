document.addEventListener('DOMContentLoaded', function() {
    var footer = document.querySelector('footer');
    
    // Get the current date
    var currentDate = new Date();
    var year = currentDate.getFullYear(); // Get the current year
    
    // Construct the copyright message
    var copyrightMessage = '\u00A9' + year + ' - Elisha Mugenyi \uD83C\uDF3A Uganda'; // Using Unicode for copyright and flower emoji
    
    // Set the copyright message in the footer
    footer.querySelector('#lastModified').textContent = copyrightMessage;
});
