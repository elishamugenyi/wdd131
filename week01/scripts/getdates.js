document.addEventListener('DOMContentLoaded', function() {
    var footer = document.querySelector('footer');
    var lastModified = document.lastModified;
    footer.querySelector('#lastModified').textContent = 'Last Modification Date: ' + lastModified;
});