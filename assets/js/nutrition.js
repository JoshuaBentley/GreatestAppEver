const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9aba823730msh22aa7df619887b2p1b55fdjsn6329039a1d9c',
		'X-RapidAPI-Host': 'body-mass-index-bmi-calculator.p.rapidapi.com'
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
 
	.then(response => response.json())
	.then(response => bmr.innerText = response.bmi + "your BMI")
    .then(response => console.log(response) )
	.catch(err => console.error(err));
   
}




