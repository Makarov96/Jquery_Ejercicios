'use strict'
$(document).ready(function() {
    console.log("JQuery Cargado ");

    // Selector de ID
    /*
        var rojo = $("#rojo").css("background", "red")
            .css("color", "white");
        console.log(rojo);


        var amarillo = $("#amarillo").css("background", "yellow")
            .css("color", "white");
        console.log(amarillo);

        var verde = $("#verde").css("background", "green")
            .css("color", "white");
        console.log(verde);

    */
    //Selector con clase

    var rojo = $(".red").css("background", "red")
        .css("color", "white");
    //console.log(rojo);


    var amarillo = $(".yellow").css("background", "yellow")
        .css("color", "white");
    //console.log(amarillo);

    var verde = $(".zebra");
    //  console.log(verde);

    // Agregando una clase que esta en el css
    $(".click").click(function() {

        $(this).addClass("zebra");


    });



    // Selectores de etiqueta

    var parrafos = $('p').css("cursor", "pointer");

    parrafos.click(function() {

        var info = $(this);

        if (!info.hasClass('grande')) {
            info.addClass('grande');
        } else {

            info.removeClass('grande');
        }
    });


    //Selectores por atributo

    $('[title = "google"]').css("background", "#ccc");

    $('[title = "facebook"]').css("background", "blue");


    //Otros

    //  $('p, a').addClass('magen-superior');
    //Manera1:
    // var buscar = $("#caja").find('.resaltado');
    //Marena2:
    var buscar = $("#caja .resaltado").eq(0).parent().parent().parent().find('[title = "google"]');

    console.log(buscar);







});