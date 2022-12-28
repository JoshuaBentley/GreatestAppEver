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

var showResults = document.querySelector('button')
showResults.addEventListener('click', getResults)

function getResults(){
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;
    // var age = document.getElementById('age').value;
    var bmr = document.getElementById('bmr');
    fetch('https://body-mass-index-bmi-calculator.p.rapidapi.com/imperial?weight=' + weight + '&height=' + height, options)
    // fetch('https://bmr-and-tmr.p.rapidapi.com/calculate-bmr?weight=' + weight + '&height=' + height + '&age=' + age + '&sex=male&inImperial=false', options)
	.then(response => response.json())
	.then(response => bmr.innerText = response.bmi + "your BMI")
    .then(response => console.log(response) )
	.catch(err => console.error(err));
   
}


  calories.innerHTML = BMR.toLocaleString("en-US");

  
});
