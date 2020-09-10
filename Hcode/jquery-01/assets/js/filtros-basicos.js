//selecionando o último elemento
$('.list-group li:last').click(function() {
    alert('Ok');
});
//Selecionamos o primeiro elemento
$('.list-group li:first').click(function() {
    console.log('cliquei no primeiro item')    
});
//selecionando elementos de maneira alternada ímpares
$('.list-group li:even').css('background-color', '#ccc')

//selecionando elementos de maneira alternada páres
$('.list-group li:odd').css('background-color','#999')

//Selecionando um elemento em uma posição específica (baseando em um array)
$('.list-group li:eq(0)').css('font-size', '40px');

//selecionando todos os elementos abaixo de outro
$('.list-group li:gt(2)').css('opacity', '0.6')

//selecinando todos os elementos antes do outro
$('list-group li:lt(1)').css('opacity', '0.3')