$(document).ready(function(){

    /* ====================PT1==========================*/  

    $('type=radio').change(function() {
        let value = $('input:checked').val();
        let gender = ( value == 'M') ? 'Masculino' : 'femininos';
       
        console.log('você selecionou o sexo' + gender);
        console.log(`Você selecionou o sexo $(gender)`);
    });    
    
    
    
    //Selecioando um botão
    //$('#register :button').text() 
    
    //selecionando um checkbox
    //$('#register :button').css('opacity', '1.0')
    
    //Selecioanndo os elementos 'checkado'
    //$('input:checked').val()
    
    
     /* ====================PT2==========================*/
    
    //Selecionando os elementos desabilitados
    // $('#register :disabled').val('kevinbfv@gmail.com').prop('disabled', false);
    
    //selecionando o submit
    //$('#register :submit').css('background-color', 'orange')

    $('input').focus(function(){
        $('input.focus').val('ola, voce clicou');
    });

    $('#register :submit').click(function() {

        event.preventDefault();
        console.log('voce clicou no botao submit');
    })

    

});


