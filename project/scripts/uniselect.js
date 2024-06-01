document.addEventListener('DOMContentLoaded', function(){
     //js code to handle university selection.
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
});