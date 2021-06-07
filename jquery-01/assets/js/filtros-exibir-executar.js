    /*$('#toggle_cars').click(function(){

        let hiddenCars = $('.cars li:hidden').length;
    
        if (hiddenCars > 0) {
            $('.cars li').show()
        } else {
            $('.cars li').hide();
        }
    */
    //BOTÃO PARA EXIBIR E OCULTAR CARROS
    $('#toggle_cars').click(function(){

        let hiddenCars = $('.cars li:hidden').length;
        let method = (hiddenCars > 0) ? 'show' : 'hide';    

        /*if (hiddenCars > 0) {
            method = 'show';
        } else {
            method = 'hide';
        }*/
        eval(`$('.cars li').${method}()`);
            
    });