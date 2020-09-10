//selecionando o ultimo elemento mesmo que seja mais de um caso
$('.list-group li:last-child').css('text-decoration', 'underline')
//selecionando o Primeiro elemento mesmo que seja mais de um caso
$('.list-group li:first-child').css('font-size', '30px')
//Selecionando os elementos de maneira alternada(par)
$('.list-group li:nth-child(even)').css('background-color', '#ccc')
//
$('list-group li:nth-child(odd)').css('background-color','red') 

// $('.list-group li:eq(0)').css('background-color', 'red')

//Seleconando um elemento em uma piosição especifica mesmo que seja mais de um caso
$('.list-group li:nth-child(1)').css('font-size', '30px')
//Selecionando um elemento em uma pósição específica, começando a contar d último elemento
$('.list-group li:nth-last-child(3)').css('font-weight', 'bold')