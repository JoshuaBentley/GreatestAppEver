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
         },
         
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);

        }
    
})})

$('.searchButton').click(function workout(){

// $('#searchButton').on('keypress click', function workout(e) {
//     if (e.which === 13 || e.type === 'click')

    var muscle = $('input').val()

    // var type = $('input').val()
    // var difficulty = $('input').val()

    console.log(muscle)
    $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/exercises?muscle=' + muscle + '&type=', //+ type + '&difficutly=' + difficulty// 
        headers: { 'X-Api-Key': '+qJeMFVwgk8PQfrADoeAFw==OoEPXG8KEs97zdh6'},
        contentType: 'application/json',
        success: function(result) {
            console.log(result);
            $('.workoutName').text(result[0].name)
            $('.instruct').text(result[0].instructions)
            $('.result').text('Difficutly: ' + result[0].difficulty)
         },
         
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);

        }
    
})})



// $('.searchButton').click(function (result) {
//     muscle = 'triceps'
    
// })

