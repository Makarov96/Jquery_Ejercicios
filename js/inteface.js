$(document).ready(function() {



    //Mover elemento por la pagina
    $('.elemento').draggable();

    //Redimencionas

    $('.elemento').resizable();


    //

    //$('.lista-seleccionable').selectable();
    $('.lista-seleccionable').sortable({

        update: function(event, ui) {

            console.log('Ha cambiado la lista')
        }

    });


    //Drop mover un cuadradito al fondo de otr
    $('#elemento-movido').draggable();
    $('#area').droppable({

        drop: function() {

            console.log('has soltado algo dentro');

        }

    });

    //Efectos de mostrar con un boton 


    $('#mostrar').click(function() {


        //muestra de arriba para abajo
        // $('.caja-efecto').toggle('blind');
        //muestra de izquierda a derecha
        //$('.caja-efecto').toggle('slide');
        //drop como si fuera un degradado
        //$('.caja-efecto').toggle('drop');
        //va formando un cuadrado
        //$('.caja-efecto').toggle('fold');
        //va degradando el cuadrdo
        //$('.caja-efecto').toggle('puff');
        //que va de mayor a menor
        //$('.caja-efecto').toggle('scale');
        //este agita el cuadrado y pasar opciones
        $('.caja-efecto').toggle('shake', 4000);


    });



    //este sirve como para mostrar pequeños 
    //recuadros en base a un link que pueda estar en un a href = 
    $(document).tooltip();



    //Dialog

    $('#presioname').click(function() {

        $('#popup').dialog();
    });


    //calendario 
    $('#calendario').datepicker();


    //Tabs 


    $('#pestanas').tabs();





























})