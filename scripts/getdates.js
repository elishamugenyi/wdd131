document.addEventListener('DOMContentLoaded', function() {
    var footer = document.querySelector('footer');
    
    // Get the current date
    var currentDate = new Date();
    var year = currentDate.getFullYear(); // Get the current year

    //get separate components.
    //var date = currentDate.getDate();
    //var month = currentDate.getMonth() + 1 ; //months are zero based, so add 1
    //var hours = currentDate.hetHours();
    //var minutes = currentDate.getMinutes();
    //var seconds = currentDate.getSeconds();

    // Format the date and time
    //var formattedDateTime = `${date}/${month}/${year} ${hours}:${minutes}:${seconds}`;

    
    // Construct the copyright message
    var copyrightMessage = '\u00A9' + year + ' - Elisha Mugenyi 🇺🇬 Uganda'; // Using Unicode for copyright and flower emoji
    
    // Set the copyright message in the footer
    footer.querySelector('#lastModified').textContent = copyrightMessage;

    //set the last modification message
    //document.getElementById('lastModification').textContent = `Last Modified: ${formattedDateTime}`;
});
