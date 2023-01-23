$(function () {
    "use strict";

    // vairable
    var html_body = $("html,body");
    var backtotop = $(".back2top");
    var navbar = $(".navbar");

    // backtotop js
    backtotop.on("click", function () {
        html_body.animate({ scrollTop: 0 }, 500);
    });

    // navbar and backtotop js
    $(window).on("scroll", function () {
        var scrolling = $(this).scrollTop();

        if (scrolling > 200) {
            navbar.addClass("bg");
        } else {
            navbar.removeClass("bg");
        }

        if (scrolling > 300) {
            backtotop.fadeIn();
        } else {
            backtotop.fadeOut();
        }
    });

    //mixitup js
    var mixer = mixitup(".work_content");

    //venobox js
    new VenoBox({
        selector: ".venobox",
        numeration: true,
        infinigall: true,
        share: true,
        spinner: "rotating-plane",
    });

    //slick js
    $(".slider_image").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: ".slider_text",
    });
    $(".slider_text").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: ".slider_image",
        focusOnSelect: true,

        prevArrow: '<span class="prev_arrow"><i class="fa-solid fa-arrow-left"></i></span>',
        nextArrow: '<span class="next_arrow"><i class="fa-solid fa-arrow-right"></i></span>',
    });
});
