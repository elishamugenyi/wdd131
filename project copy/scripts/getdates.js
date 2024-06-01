document.addEventListener('DOMContentLoaded', function() {
    var footer = document.querySelector('footer');
    
    
    // Get the current year
    const currentYear = new Date().getFullYear();

    // Update the span element with the current year
    document.getElementById('currentyear').textContent = ` \u00A9 ${currentYear}`;

    // Get the last modified date of the file
    const lastUpdated = new Date(document.lastModified);

    // Format the last modified date as required (e.g., "MM/DD/YYYY HH:MM:SS")
    const formattedLastUpdated = `${lastUpdated.getMonth() + 1}/${lastUpdated.getDate()}/${lastUpdated.getFullYear()} ${lastUpdated.getHours()}:${lastUpdated.getMinutes()}:${lastUpdated.getSeconds()}`;

    // Update the paragraph element with the last modified date
    document.getElementById('lastUpdated').textContent = `Last Updated: ${formattedLastUpdated}`;
    
});
