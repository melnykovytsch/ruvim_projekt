$(document).ready(function() {
    $('.dropdown-menu').click(function(event) {
        $('.dropdown-menu, ul').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

new Swiper('.image-slider',{
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
});