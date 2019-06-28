$(document).ready(function() {

    //load Ajax
    /*
    $('#datos').load('https://reqres.in/');
    */

    var formulario = $('#formulario');

    //Get

    $.get('https://reqres.in/api/users', { page: 3 }, function(response) {


        response.data.forEach((element, index) => {

            $('#datos').append("<p>" + element.first_name + " " + element.last_name + "</p>");

        });

    });
    //Post


    formulario.submit(function(e) {

        //Agregando una e y agregando e.preventDefault
        //evitamos que nos redirija a otra pagina
        e.preventDefault();

        var usuario = {
            'name': $('input[name="name"]').val(),
            'web': $('input[name="web"]').val()
        }

        /*
        //metodo por post convencionas
        $.post($(this).attr("action"), usuario, function(response) {
            console.log(response);

        }).done(function() {
            alert("usuario agregado exitosamente");
            $('input[name="name"]').val('');
            $('input[name="web"]').val('');
        })
        */


        //Metodo por post pro
        $.ajax({
            type: 'POST',
            url: $(this).attr("action"),
            data: usuario,
            beforeSend: function(response) {
                console.log('Enviando usuario..');

            },
            success: function(response) {
                console.log(response);
                $('input[name="name"]').val('');
                $('input[name="web"]').val('');

            },
            error: function() {
                console.log('A ocurrido un error');
                $('input[name="name"]').val('');
                $('input[name="web"]').val('');
            },
            timeout: 100

        });


        // a su vez tambien hay que agregarle un return false
        return false;

    });






















});