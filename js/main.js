

$(document).ready(function(){

    $('.menu').click(function(){
        $('.menubox').slideToggle(900);       
    })
    function back(){
        $('.container h1').fadeOut(1500,function(){
            $('.container h1').fadeIn(1500,function(){
                back();
            })
        })
    }
    back();
    
    $('.menu').click(function(){
        $('.menu').toggleClass('menuani')

    })

    
    $(window).resize(function(){
        var winHeight = $(document).height()
        $('.container:after').height($(document).height())
        console.log(winHeight)
    })
   
   
})
