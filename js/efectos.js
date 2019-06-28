$(document).ready(function() {



    /*
    
    fadeIn -------> hace fundido
    fadeOut-------------> hace fundido
    fadeTo ---> hace una transaccion y este necesita otro parametro
    ejemplo .fadeTo(para1,param2);

    */

    var mostrar = $('#mostrar');
    var ocultar = $('#ocultar');
    var div = $('#caja');
    var abrir = $('#abrir');


    mostrar.click(function() {
        $(this).hide('normal');
        div.fadeTo('slow', 1);
        ocultar.show('fast');

    });

    ocultar.click(function() {


        mostrar.show('fast');
        $(this).hide('normal');
        div.fadeTo('fast', 0);

    });




    abrir.click(function() {

        div.slideToggle('fast');

    });


    $('#animame').click(function() {


        div.animate({
            marginLeft: '500px',
            fontSize: '40px',
            height: '110px'

        }, 'slow')

        .animate({
            borderRadius: '900px',
            marginTop: '80px'
        }, 'slow')

        .animate({
                borderRadius: '0px',
                marginLeft: '0px',

            }, 'slow')
            .animate({
                borderRadius: '100px',
                marginTop: '0px',

            }, 'slow')

        div.animate({
            marginLeft: '500px',
            fontSize: '40px',
            height: '110px'

        }, 'slow');









    });











});