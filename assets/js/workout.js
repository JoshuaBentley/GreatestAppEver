$(".searchBox").keyup(function(event) {
    if (event.keyCode === 13) {
		console.log('you hit enter')
        $(".searchButton").click();
    }

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
            $('.workoutName1').text(result[0].name)
            $('.equipment1').text("Equipment needed: " + result[0].equipment)
            $('.instructions1').text(result[0].instructions)
            $('.workoutName2').text(result[1].name)
            $('.equipment2').text("Equipment needed: " + result[1].equipment)
            $('.instructions2').text(result[1].instructions)
            $('.workoutName3').text(result[2].name)
            $('.equipment3').text("Equipment needed: " + result[2].equipment)
            $('.instructions3').text(result[2].instructions)
            $('ul').addClass('hide')
            $('p.bold').addClass('hide')
         },
         
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);

        }
    
})})})
