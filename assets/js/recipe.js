const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9aba823730msh22aa7df619887b2p1b55fdjsn6329039a1d9c',
		'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
	}
};

var showResults = document.querySelector('.searchButton')
showResults.addEventListener('click', getFood)

function getFood() {
	var food = 'beef'
	fetch('https://tasty.p.rapidapi.com/recipes/auto-complete?prefix=chicken%20soup', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
}
