

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

    $()

})



