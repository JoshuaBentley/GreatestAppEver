$('.searchButton').click(function nutrition() {
  var query = '3lb carrots and a chicken sandwich'
  $.ajax({
    method: 'GET',
    url: 'https://api.calorieninjas.com/v1/nutrition?query=' + query,
    headers: { 'X-Api-Key': 'sC3XXupZz6J1fT/NwyO/Tg==oA4O6cy44IW7bhua'},
    contentType: 'application/json',
    success: function(result) {
        console.log(result);
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});

}) 


