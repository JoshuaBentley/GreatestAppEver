var calories = document.querySelector(".bmr-calculator .result .calories");
var calculateBtn = document.querySelector(".bmr-calculator .result .calculate-btn");
var age = document.querySelector(".bmr-calculator form #age");
var height = document.querySelector(".bmr-calculator form #height");
var weight = document.querySelector(".bmr-calculator form #weight");
var errorMessage = document.querySelector(".bmr-calculator .result .error-message");

// BMR Calculations based on Harris Benedict Calculator
// Men -> 66.47 + (6.24 x weight in lb) + (12.7 x height in in.) - (6.75 x age in years)
// Women -> 655.51 + (4.35 x weight in lb) + (4.7 x height in inches) - (4.7 x age in years)

//BMR CALCULATOR
function calculateBMR(weight, height, age, gender) {
  if (gender == "male") {
    return (66.47 + (6.24*weight)) + (12.7*height) - (6.75*age);
  }

  if (gender == "female") {
    return (655.51 + (4.35*weight)) + (4.7*height) - (4.7*age);
  }
};

//Change out of arrow expression 
calculateBtn.addEventListener("click", () => {
  if (age.classList.contains("invalid") || height.classList.contains("invalid") || weight.classList.contains("invalid")) {
    errorMessage.classList.add("active");
    return;
  }
  
  var genderValue = document.querySelector(".bmr-calculator form input[name='gender']:checked").value;

  var BMR = calculateBMR(weight.value, height.value, age.value, genderValue);

  calories.innerHTML = BMR.toLocaleString("en-US");

  
});

// Input validation

age.addEventListener("input", (e) => {
  var ageValue = e.target.value;

  if (!ageValue || isNaN(ageValue) || ageValue < 10 || ageValue > 100) {
    age.classList.add("invalid");
  } else {
    age.classList.remove("invalid");
  }
});

height.addEventListener("input", (e) => {
  var heightValue = e.target.value;

  if (!heightValue || isNaN(heightValue) || heightValue < 36) {
    height.classList.add("invalid");
  } else {
    height.classList.remove("invalid");
  }
});

weight.addEventListener("input", (e) => {
  var weightValue = e.target.value;

  if (!weightValue || isNaN(weightValue) || weightValue < 80) {
    weight.classList.add("invalid");
  } else {
    weight.classList.remove("invalid");
  }
});