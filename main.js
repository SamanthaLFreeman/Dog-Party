var nameText = document.querySelector('#changeName');
var nameInput = document.querySelector('#inputName');
var button = document.querySelector('.mainButton');

function newName(e) {
  nameText.innerText = nameInput.value;
  e.preventDefault(); 
  nameInput.value = "";
}

button.addEventListener("click", newName);