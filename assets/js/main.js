$(document).ready(function () {
    // Open mobile menu
    $('#btn__menu').click(function () {
        $('.nav__menu-mobile').animate({
            opacity : 'toggle',
            height: 'toggle'
        }, 'slow');
    });

    // Scroll Header Nav
    /*$(window).scroll(function(){
        if($(document).scrollTop() > 20){
            $('header').css({
                'position' : 'fixed',
                'top' : '0',
                'right' : '0',
                'left' : '0',
                'z-index' : '1030'
            });
        } else {
            $('header').css({
                'position' : 'relative',
                'top' : 'auto'
            });
        }
    });*/
    // To top scroll
    $(window).scroll(function(){
        if($(document).scrollTop() > 50){
            $('#toTop').css({
                'display' : 'block'
            });
        } else {
            $('#toTop').css({
                'display' : 'none'
            });
        }
    });
});

