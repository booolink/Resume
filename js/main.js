

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

    $(window).resize(function () {

        var Docwidth = $('#box1').width()

        var Docheight = $(document).height()
        var box1height = $('#box1').height()

        $('.bgccolor').height(Docheight - box1height)
        $('.bgccolor').width(Docwidth)

    })

})









