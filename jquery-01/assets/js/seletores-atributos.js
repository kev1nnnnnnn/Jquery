//verificando se possui um atributo
$('.header-border li [href]').text('Link')

//verificando se possui mais de 1 atributo
$('.header-border li [href][title]').text('Home')

//Verificando o valor para o atributo
$('.header.border li [href="about.html"]').text()    

//Verificando os atributos que começam com uma lestra específica
$('.header-border li [href^="i"]').text()

//Verificando os atributos que terminam com uma expressão específica
$('header-border li [href$="html"]').text()

//Verificando os atributos que possuem a expressão informada
$('.header-border li [href*="in"]').text()