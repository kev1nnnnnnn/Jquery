$(document).ready(function(){

    //Adicionando uma classe
    $('header .menu ul li>last').addClass('stylized_menu')
    //Rmovendo uma classe
    $('header .menu ul li>last').remove('stylized_menu')
    //verificando se um elemento possui uma classe
    $('header menu ul li:last a').hasClass('hasClass');

    $('p').each(function(){
        if($(this).hasClass('paragrafo')) {
            $(this).append('<span style="color: red;"> - Eu tenho a Classe </span>')
        }
    });

    //alterando uma classe com o toggle class
    $('header menu ul a').click(function(event) {
        event.preventDefault();

        $(this).toggleClass('stylized_menu');
    });

});