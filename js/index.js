$(document).ready(function () {
    $('.mainimage').slick({
        //slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: false,
        arrows: false,
    });
    $('.smallsl').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: false,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        responsive: [
            {
                breakpoint: 779,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false
                }
            }]
    });
    $('.productsl').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: false,
        //autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        prevArrow: '.cartprevarrow',
        nextArrow: '.cartnextarrow',
        responsive: [
            {
                breakpoint: 779,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            }]
    });
    $('.brandsl').slick({
        slidesToShow: 6,
        slidesToScroll: 2,
        infinite: false,
        //autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        prevArrow: '.prevarrow',
        nextArrow: '.nextarrow',
        responsive: [
            {
                breakpoint: 779,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            }]
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
        responsive: [
            {
                breakpoint: 779,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            }]
    });
    $('.instasl').slick({
        slidesToShow: 6,
        slidesToScroll: 2,
        infinite: false,
        //autoplay: true,
        //autoplaySpeed: 5000,
        arrows: true,
        prevArrow: '.instaprevarrow',
        nextArrow: '.instanextarrow',
        responsive: [
            {
                breakpoint: 779,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            }]
    });
});