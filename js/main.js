

$(document).ready(function () {

    $('.menu').click(function () {
        $('.menubox').slideToggle(500);
    })

    function back() {
        $('.container h1').fadeToggle(2000, function () {
            back();
        })

    }
    back();

    $('.menu').click(function () {
        $('.menu').toggleClass('menuani')
    })

    // $(window).scroll(function () {
    //     var srco = $(this).scrollTop()
    //     function Top0() {
    //         $('#box3').animate({ 'top': '0px' }, 2000);
    //     }
    //     if (srco >= 300) {
    //         Top0();
    //     }
    // })
    
    

    function totalHeight(){
        var Docwidth = $(document).width()
        var Docheight = $(document).height()
        var box1height = $('#box1').height()
        var box1width = $('#box1').width()
        $('.bgccolor').innerHeight(Docheight-box1height)
        $('.bgccolor').innerWidth(box1width)
    }
    totalHeight();
})



