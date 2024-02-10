document.getElementById('myForm').addEventListener('submit', function (event) {
  event.preventDefault();
  const nameInput = document.getElementById('name');

  if (!nameInput.value) {
    nameInput.setCustomValidity('Please fill out this field');
  } else {
    nameInput.setCustomValidity('');
  }

});