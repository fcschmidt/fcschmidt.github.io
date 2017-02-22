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
});

