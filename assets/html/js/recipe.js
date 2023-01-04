$(".recipe").keyup(function(event) {
    if (event.keyCode === 13) {
		console.log('you hit enter')
        $(".searchButton").click();
    }
	
$('.searchButton').click(function () {
	var recipe = $('input').val()
	$.ajax({
    	method: 'GET',
    	url: 'https://api.api-ninjas.com/v1/recipe?query=' + recipe,
    	headers: { 'X-Api-Key': '+qJeMFVwgk8PQfrADoeAFw==OoEPXG8KEs97zdh6'},
    	contentType: 'application/json',
    	success: function(result) {
        	console.log(result);
			$('.ingredients').text(result[0].ingredients)
			$('.instructions').text(result[0].instructions)
			$('.dishName').text(result[0].title)
			$('.servingSize').text(result[0].servings)
    	},
    	error: function ajaxError(jqXHR) {
        	console.error('Error: ', jqXHR.responseText);
    	}
})})});