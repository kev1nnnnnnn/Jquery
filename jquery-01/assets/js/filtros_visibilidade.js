//selecioandno os elementos que estão invisiveis pelo display none
$('.list-group liist-group-item.hidden').show()
    
//Selecioando os elementos visíveis
$('.cars li:visible').hide();

$('#show_cars').click(function(){

    $('.cars li:hidden').css('text-decoration', 'underline').show()

});

$('#hide_cars').click(function(){

    $('.cars li:visible').hide();

});