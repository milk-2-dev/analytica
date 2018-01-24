function animateMobile(){
    var animateAddClass = setInterval(function() {
        $('.header-number i').addClass('tada');
    }, 3000);

    var animateRemoveClass = setInterval(function() {
        $('.header-number i').removeClass('tada');
    }, 6000);

}

animateMobile();

$(document).ready(function(){
    $('#accordion .card').each(function(){
        $(this).find('h5').hover(function () {

                var blockId = $(this).find('.collapsed').attr('href');
                //console.log(blockId);

            $(blockId).on('show.bs.collapse', function () {
                $('#accordion').find('div[aria-expanded="true"]').collapse('hide');
            })
                $(this).parent().parent().find(blockId).collapse('show');


        })
    })
});

setTimeout(function(){
    $('.header-callback').after($('.rngst_phone_button'));
}, 1000);


