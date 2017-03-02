$(document).ready(function () {
    // Open mobile menu
    /*$('#btn__menu').eq(0).click(function () {
        $('.nav__menu').eq(0).slideToggle(500);
    });*/
    $('#btn__menu').click(function () {
        $('.nav__menu').animate({
            opacity : 'toggle',
            height: 'toggle'
        }, 'slow');
    });

    // Clipboard js
    new Clipboard('.btn');

    // Scroll navbar and indice for Learning page
    $(window).scroll(function(){
        if($(document).scrollTop() > 150){

            $('#navbar').css({
                'width' : '100%',
                'position' : 'fixed',
                'top' : '0',
                'right' : '0',
                'left' : '0',
                'z-index' : '1030'
            });

            $('#indice').css({
                'width' : '18%',
                'position' : 'fixed',
                'top' : '3em'
            });

            $('.docs__content').css({
               'position' : 'relative'
            });
        } else {
            $('#navbar').css({
                'position' : 'relative',
                'top' : 'auto'
            });

            $('#indice').css({
                'width' : 'auto',
                'position' : 'relative',
                'top': '0'
            });
        }
    });
});

