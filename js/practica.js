$(document).ready(function() {





    var usuario = {

        name: $('input[name="name"]').val(),
        Web: $('input[name="web"]').val()


    }

    $('#form').submit(function(e) {

        e.preventDefault();

        $.ajax({

            type: 'POST',
            url: $('#form').attr('action'),
            data: usuario,
            beforeSend: function() {

                console.log('Se esta enviando...')
            },
            error: function() {
                console.log('Ha ocurrido un error...')
                $('input[name="name"]').val('');
                $('input[name="web"]').val('');

            },
            success: function(response) {
                console.log(response);
                console.log('Se ha enviado');
                $('input[name="name"]').val('');
                $('input[name="web"]').val('');



            },
            timeout: 1000

        });




        return false;




    });




















});