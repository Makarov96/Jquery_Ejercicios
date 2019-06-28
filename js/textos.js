$(document).ready(function() {

    var button = $('#add_button');
    var links = $('#add_link');


    reloadlinks();
    button.click(function() {

        var a = $('#menu');
        var links2 = links.val();
        a.append('<li><a href="' + links2 + '"></a></li>');
        links.val('');
        reloadlinks();

    });


    function reloadlinks() {
        $('a').each(function(index) {

            var a = $(this);
            var enlace = a.attr('href');
            a.text(enlace);
            a.attr('target', '_blank')

        });

    }



























});