
const input = document.querySelector('#favchap'); //variable holding reference to input
const button = document.querySelector('button');  //holds reference to button
const list = document.querySelector('#list');

//create list item to add chapter item and delete button
const listItem = document.createElement('li');
listItem.textContent = chapter;


//create a delete button
const deleteButton = document.createElement('button'); 
deleteButton.textContent = 'X'

//appedn listItem with deleteButton
listItem.appendChild(deleteButton);

//append the listitem to the list
listItem.appendChild(listItem);
