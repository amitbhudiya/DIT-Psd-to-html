$(document).ready(function () {
    $('.mainimage').slick({
        //slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        infinite:false,
        arrows:false,
 });
    $('.smallsl').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: false,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
    });
    $('.productsl').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: false,
        //autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        prevArrow:'.cartprevarrow',
        nextArrow:'.cartnextarrow'
   });
    $('.brandsl').slick({
        slidesToShow: 6,
        slidesToScroll: 2,
        infinite: false,
        //autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        prevArrow:'.prevarrow',
        nextArrow:'.nextarrow'
    });
    $('.testimonials').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false,
        //autoplay: true,
        //autoplaySpeed: 5000,
        arrows: false,
        // prevArrow:'.prevarrow',
        // nextArrow:'.nextarrow'
    });
    $('.instasl').slick({
        slidesToShow: 6,
        slidesToScroll: 2,
        infinite: false,
        //autoplay: true,
        //autoplaySpeed: 5000,
        arrows: true,
        prevArrow:'.instaprevarrow',
        nextArrow:'.instanextarrow'
    });
});