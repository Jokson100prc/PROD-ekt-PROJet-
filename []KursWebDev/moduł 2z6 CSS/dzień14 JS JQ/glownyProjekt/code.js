$(document).on('scroll', function () {
    const scrollValue = $(this).scrollTop();

    const windowH = $(window).outerHeight();

    const art2ScrollPosition = $('.art2').offset().top;
    const art3ScrollPosition = $('.art3').offset().top;
    const art4ScrollPosition = $('.art4').offset().top;
    const op1ScrollPosition = $('.op1').offset().top;
    const op2ScrollPosition = $('.op2').offset().top;

    const art2Height = $('.art2').outerHeight();
    const art3Height = $('.art3').outerHeight();
    const art4Height = $('.art4').outerHeight();
    const op1Height = $('.op1').outerHeight();
    const op2Height = $('.op2').outerHeight();
    if (scrollValue > art2Height + art2ScrollPosition - windowH) {
        $('.art2').addClass('active')
    }
    if (scrollValue < art2ScrollPosition - art2Height) {
        $('.art2').removeClass('active')
    }


    if (scrollValue > art3Height + art3ScrollPosition - windowH) {
        $('.art3').addClass('active')
    }
    if (scrollValue < art3ScrollPosition - art3Height) {
        $('.art3').removeClass('active')
    }


    if (scrollValue > art4Height + art4ScrollPosition - windowH) {
        $('.art4').addClass('active')
    }
    if (scrollValue < art4ScrollPosition - art4Height) {
        $('.art4').removeClass('active')
    }

    if (scrollValue > op1ScrollPosition - windowH) {
        $('.op1').addClass('active')
    }
    if (scrollValue < op1ScrollPosition - op1Height) {
        $('.op1').removeClass('active')
    }


    if (scrollValue > op2ScrollPosition - windowH) {
        $('.op2').addClass('active')
    }
    if (scrollValue < op2ScrollPosition - op2Height) {
        $('.op2').removeClass('active')
    }

    // if (scrollValue < 100) {
    //     $('article').removeClass('active')}

});