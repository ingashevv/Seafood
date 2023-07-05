$(function(){
    $('.header-slider').slick({
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="images/prev.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/next.svg"></button>',
        vertical: true
    });

    $('.product__name').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        focusOnSelect: true,
        asNavFor: '.product__content',
        vertical: true,
        prevArrow: '<button type="button" class="product-prev"><img src="images/product-prev.svg"></button>',
        nextArrow: '<button type="button" class="product-next"><img src="images/product-next.svg"></button>',
    });
    $('.product__content').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.product__name',
        fade: true,
        arrows: false,
    });


});