$(function () {


    var scrollLock = function(e) {
        if( $('.left-menu').hasClass('active') ){
            e.stopPropagation();
            e.preventDefault();
        }
    };
    $('html, body').bind('touchmove', scrollLock );
    // $('html, body').unbind('touchmove', scrollLock );
    $('.back-btn').click(function () {
        history.back();
    });
    $('.ui.dropdown').dropdown();
    $('.ui.accordion').accordion();

});