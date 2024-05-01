
const input = document.querySelector('#favchap'); //variable holding reference to input
const button = document.querySelector('button');  //holds reference to button
const list = document.querySelector('#list');

// Function to create a new list item with chapter title and delete button
function createListItem(chapter) {
    // Creating li element
    const listItem = document.createElement('li');
    
    // Creating span element for chapter title
    const chapterSpan = document.createElement('span');
    chapterSpan.textContent = chapter;
    
    // Creating delete button
    //const deleteButton = document.createElement('button');
    //deleteButton.textContent = 'Delete';
    //deleteButton.classList.add('delete');
    
    // Appending chapter title and delete button to list item
    listItem.appendChild(chapterSpan);
    listItem.appendChild(deleteButton);
    
    // Appending list item to the list
    list.appendChild(listItem);
  }
  
  // Event listener for button click
button.addEventListener('click', () => {
    // Getting the value of the input
    const chapter = input.value;
    
    // Checking if input is not empty
    if (chapter.trim() !== '') {
      // Creating a new list item
      const listItem = document.createElement('li');
      
      // Creating a delete button
      const deleteButton = document.createElement('button');
      deleteButton.textContent = '❌';
      deleteButton.classList.add('delete');
      deleteButton.addEventListener('click', () => {
        listItem.remove(); // Remove the associated list item when delete button is clicked
      });
      
      // Populate the text content of the list item with the input value
      listItem.textContent = chapter;
      
      // Appending delete button to the list item
      listItem.appendChild(deleteButton);
      
      // Appending list item to the list
      list.appendChild(listItem);
      
      // Clearing the input
      input.value = '';
      input.focus();
    }
  });