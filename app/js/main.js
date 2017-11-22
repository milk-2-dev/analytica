function animateMobile(){
    var animateAddClass = setInterval(function() {
        $('.header-number i').addClass('tada');
    }, 3000);

    var animateRemoveClass = setInterval(function() {
        $('.header-number i').removeClass('tada');
    }, 6000);

}

animateMobile();

function customCollapse(){
    $('.setting-item__desc a').on('click', function(e){
        if($(this).parent().is('.open')){
            $(this).parent().css('max-height', '80px');
            $(this).parent().removeClass('open');
            $(this).css('top', '55px');
        }
        else{
            var blockHeight = $(this).parent().find('p').outerHeight(true);
            $(this).parent().addClass('open');
            $(this).parent().css('max-height', blockHeight);
            $(this).css('top', blockHeight - 20);
        }
    })
}

customCollapse()