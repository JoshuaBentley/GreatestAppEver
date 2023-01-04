var button = document.querySelector(".button");
var input = document.getElementById('value');
var display = document.querySelector('.consumedCalories')
display.innerHTML = localStorage.getItem('progress')

button.addEventListener('click', saveProgress);

function saveProgress() {
  localStorage.setItem('progress', input.value);
  display.innerHTML = input.value 
}

