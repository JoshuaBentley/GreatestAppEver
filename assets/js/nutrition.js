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

// TDEE CALCULATOR
// x1.2 Sedentary - little to no exercise
// x1.375 Lightly Active - light exercise, 1-3 days/wk
// x 1.55 Moderate - exercise 3-5 days per week
// x 1.725 Active - hard exercise 6-7 days per week
// x 1.9 Very Active - very hard exercise and a physical job

// take results from BMR x activity level = TDEE

function calculateTDEE(weight, height, age, gender) {
  if (tdee == "Sedentary") {
    return BMR*1.2;
  } else if (tdee == "Lightly Active") {
    return BMR*1.375;
  } else if (tdee == "Moderate") {
    return BMR*1.55;
  } else if (tdee == "Active") {
    return BMR*1.725; 
  } else if (tdee == "Very Active") {
    return BMR*1.9;
  }        
};

calculateBtn.addEventListener("click", () => {
  if (age.classList.contains("invalid") || height.classList.contains("invalid") || weight.classList.contains("invalid")) {
    errorMessage.classList.add("active");
    return;
  }
  
  var tdeeValue = document.querySelector(".tdee-calculator form input[name='tdee']:checked").value;

  var BMR = calculateBMR(weight.value, height.value, age.value, genderValue);

  calories.innerHTML = BMR.toLocaleString("en-US");

  
});
