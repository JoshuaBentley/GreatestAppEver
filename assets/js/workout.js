$('.searchButton').click(function workout() {
    var muscle = $('input').val()
    console.log(muscle)
    $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/exercises?muscle=' + muscle,
        headers: { 'X-Api-Key': '+qJeMFVwgk8PQfrADoeAFw==OoEPXG8KEs97zdh6'},
        contentType: 'application/json',
        success: function(result) {
            console.log(result);
            $('.workoutName').text(result[0].name)
         },
         
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);

        }
    
})})

// $('.searchButton').click(function (result) {
//     muscle = 'triceps'
    
// })

