function animateMobile(){
    var animateAddClass = setInterval(function() {
        $('.header-number i').addClass('tada');
    }, 2000);

    var animateRemoveClass = setInterval(function() {
        $('.header-number i').removeClass('tada');
    }, 4000);

}

animateMobile();
