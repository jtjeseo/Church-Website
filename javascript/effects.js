$(window).scroll(function() {
    if ($(window).scrollTop() > 10) {
        // > 10px from top - show div
        $(".right-col").show();
    }
    else {
        // <= 10px from top - hide div
        $(".right-col").hide();
    }
});