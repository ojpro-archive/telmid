//Setup nicescroll parameters
$('body').niceScroll({
    cursoropacitymin: .2,
    cursoropacitymax: .8,
    cursorcolor: "#7F8C8D",
    cursorwidth: "12px",
    cursorborder: '1px solid #BDC3C7',
    cursorborderradius: "2px",
    zindex: '1',
    hidecursordelay: 400,
    horizrailenabled: false
});
//Scroll to down by clicking chevron icon
$('body header #scroll-down').on('click', function() {
    $('html, body').animate({
        scrollTop: $('header').innerHeight() - 16
    }, 1000)
});