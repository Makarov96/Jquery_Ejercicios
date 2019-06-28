$(document).ready(function() {


    //MouseOver y 


    var caja = $('#caja');
    var formulario = $('#nombre');
    var cajadatos = $('#datos');
    /*
        caja.mouseover(function() {
            var that = $(this);

            that.css('background', 'red');

        });

        caja.mouseout(function() {
            var that = $(this);

            that.css('background', 'green');

        });
    */
    //hover con este metodo  lo que se hace es invocar
    //dos funciones definidas y mandarlas a llamar al hover
    /*
    function CambiaRojo() {
        var that = $(this);
        that.css('background', 'red');

    }

    function CambiaVerde() {
        var that = $(this);
        that.css('background', 'green');

    }

    caja.hover(CambiaRojo, CambiaVerde);
    */

    //evento doble click y click con JQuery
    /*
        caja.click(function() {
            var that = $(this);
            that.css('background', 'blue')
                .css('color', 'white');

        });


        caja.dblclick(function() {
            var that = $(this);
            that.css('background', 'pink')
                .css('color', 'yellow');

        });


    */

    //Eventos focus y blur


    formulario.focus(function() {
        var that = $(this);
        that.css('border', '2px solid green');


    });

    formulario.blur(function() {
        var that = $(this);

        that.css('border', '1px solid grey');
        var info = that.val();
        // console.log(info);
        cajadatos.text(info).show();




    });




    //mouse down and mouseup
    cajadatos.mousedown(function() {

        var that = $(this);

        that.css('border-color', 'gray');

    });

    cajadatos.mouseup(function() {

        var that = $(this);

        that.css('border-color', 'black');

    });

    //mouse move


    $(document).mousemove(function() {
        $('body').css('cursor', 'none');

        var sigueme = $('#sigueme');
        sigueme.css('left', event.clientX)
            .css('top', event.clientY);




    });




});