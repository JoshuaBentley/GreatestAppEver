var button = document.querySelector(".button");
var input = document.getElementById('value');

button.addEventListener('click', saveProgress);

function saveProgress() {
  localStorage.setItem('progress', input.value);
}

function getProgress() {
  return localStorage.getItem('progress');
}
