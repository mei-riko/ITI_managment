import $ from 'jquery';

const navbarMobileOpen = ( container ) => {
    $( container ).toggleClass('nav--open');
    $( container ).slideToggle();
};

$(function() {
    $('.header .header__toggle').on('click', function(){
        $(this).toggleClass('header__toggle--open');
        navbarMobileOpen('nav.nav');
    });
    // sliderUnit('.slider.slider_inside');
});
// Resize
$(window).on("resize", function(){
    // sliderUnit('.slider.slider_inside');
});