
/**
 * ========================================================
 * this function execute when DOM element ready 
 * ===========================================================
 */

$(document).ready(function () {

    // animation  start
    // when trigged specific section
    $(function () {
        $(window).on('scroll', function () {
            let scrollTop = $(this).scrollTop();
            function domElemDetector(el) {
                if ($(el).length) {
                    let elemOffsetTop = el.offset().top
                    let elemHeight = el.outerHeight();
                    let windowHeight = $(window).outerHeight();
                    if (scrollTop >= (elemOffsetTop - (windowHeight / 2))) {
                        setTimeout(function () {
                            el.addClass('bg-white py-4 px-4 text-dark');
                        }, 100);
                    } else {
                        el.removeClass('bg-white py-4 px-4 text-dark');
                    }
                }
            }
            domElemDetector($('.element'));
        });
    });


});


