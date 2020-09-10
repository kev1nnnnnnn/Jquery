
$(document).ready(function(){

    $.expr[':'].carsCentury21 = function(el) {

        if ($(el).data('ano') > 2000) {

        return true;
        }
    //Clear Code ->  return($(el).data('ano') > 2000);
    }

    //Criando nosso proprio filtro
    $('.list-group li:carsCentury21').css('font-size', '30px')
});