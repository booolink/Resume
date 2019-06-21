

$(document).ready(function(){

    $('.menu').click(function(){
        $('.menubox').slideToggle();
    })

    function back(){
        $('.container h1').fadeOut(1500,function(){
            $('.container h1').fadeIn(1500,function(){
                back();
            })
        })
    }
    back();
    
})
