$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('nav').addClass('fixed')
            
        } else {
            $('nav').removeClass('fixed')
            
        }
    })
})