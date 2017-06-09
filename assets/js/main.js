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
    // Scroll navbar and indice for Learning page
    $(window).scroll(function(){
        if($(document).scrollTop() > 160){
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
    // Nav Trilha - Single post
    $(window).scroll(function(){
        if($(document).scrollTop() > 50){
            $('.nav__trilha').css({
                'width' : '100%',
                'position' : 'fixed',
                'top' : '0',
                'right' : '0',
                'left' : '0',
                'padding-top' : '1.5em',
                'z-index' : '1030'
            });

            $('.avatar__nav').fadeIn({
                display : 'block',
                opacity : 'toggle'
            });

            $('#toTop').fadeIn({
                display : 'block',
                opacity : 'toggle'
            });
        } else {
            $('.nav__trilha').css({
                'position' : 'relative',
                'top' : 'auto',
                'padding-top' : '0'
            });

            $('.avatar__nav').css({
               'display' : 'none'
            });

            $('#toTop').fadeOut({
                display : 'block',
                opacity : 'toggle'
            });
        }
    });
    // Share posts
    $(window).scroll(function(){
        if($(document).scrollTop() > 100){
            $('#share').css({
                'position' : 'fixed',
                'display' : 'block',
                'margin-top' : '5em',
                'z-index' : '1030'
            });
        } else {
            $('#share').css({
                'position' : 'relative',
                'display' : 'none'
            });
        }
    });
    /*
    * Navbar Secondary Menu and Avatar display
    * Error Media Queries
    * Adicionar regras de media queries para visualização
    */
    /*$(window).scroll(function(){
        if($(document).scrollTop() > 100){
            $('#second').css({
                'width' : '100%',
                'position' : 'fixed',
                'top' : '0',
                //'right' : '0',
                //'left' : '0',
                'padding-top' :'1em',
                'z-index' : '1030'
            });
        } else {
           $('#second').css({
                'width' : '50%',
                'position' : 'relative',
                'padding-top' : '.3em'
           });
        }
    });
    $(window).scroll(function(){
        if($(document).scrollTop() > 300){
            $('#second').css({
                'width' : '100%',
                'position' : 'fixed',
                'top' : '0',
                //'right' : '0',
                'left' : '0',
                'padding-top' : '1em',
                'z-index' : '1030'
            });

            $('#avatar').css({
                'display' : 'block',
                'margin-right' : '3.4em'
            });
        } else {
            $('#avatar').css({
                'display' : 'none'
            });
        }
    });*/
});

