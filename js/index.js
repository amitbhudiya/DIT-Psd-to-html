$(document).ready(function () {
    $('.mainimage').slick({
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
    });
    $('.smallsl').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: false,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
    });
    $('.product').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: false,
        //autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
    });
    $('.brandsl').slick({
        slidesToShow: 6,
        slidesToScroll: 2,
        infinite: false,
        //autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
    });
});