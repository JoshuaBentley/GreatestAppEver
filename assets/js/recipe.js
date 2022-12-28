
$('.searchButton').click(function workout() {
	var recipe = $('input').val()
	$.ajax({
    	method: 'GET',
    	url: 'https://api.api-ninjas.com/v1/recipe?query=' + recipe,
    	headers: { 'X-Api-Key': '+qJeMFVwgk8PQfrADoeAFw==OoEPXG8KEs97zdh6'},
    	contentType: 'application/json',
    	success: function(result) {
        	console.log(result);
			$('.recipe1').text(result[0].ingredients)
    	},
    	error: function ajaxError(jqXHR) {
        	console.error('Error: ', jqXHR.responseText);
    	}
})})