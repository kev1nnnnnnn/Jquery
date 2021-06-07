//Selecionando um elemento pelo seu conteúdo
$('nav li a:contains(contato)').css('outline', 'solid red 2px')
        
//Selecionando um elemento que nao possui conteudo
$('.cars li:empty').text('vazio').css({
    'background': 'red',
    'color': 'blue'
    });

//Selecionando os elementos que possuem conteúdo
$('.list-group li:parent').append('<span style="color: green;"> - tem valor</span>')

//Selecinando os elementso que possuem outros elementos
$('.list-group li:has(span)').animate( {
    fontSize: '30px',
    opacity: 0.7
}, 2000)
