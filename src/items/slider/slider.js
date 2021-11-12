import $ from 'jquery';

const sliderClassAdd = ( container ) => {
    $( container ).addClass('swiper');
    $( container ).find('.slider__wrapper').addClass('swiper-wrapper');
    $( container ).find('.slider__slide').addClass('swiper-slide');
};
const sliderClassRemove = ( container ) => {
    $( container ).removeClass('swiper');
    $( container ).find('.slider__wrapper').removeClass('swiper-wrapper');
    $( container ).find('.slider__slide').removeClass('swiper-slide');
};
const sliderUnit = ( elem ) => {
    if( $( elem ).length > 0 ){
        $( elem ).each(function(){
            sliderClassAdd( $(this) );
            // console.log( $(this).hasClass('swiper-initialized') );
            if( !$(this).hasClass('swiper-initialized') ){
                const swiper = new Swiper(this, {
                    // Optional parameters
                    loop: false,
                    slidesPerView: 1,
                    spaceBetween: 10,
                    navigation: {
                        nextEl: '.slider__arrow_next',
                        prevEl: '.slider__arrow_prev',
                    },
                    
                    breakpoints: {
                        376: {
                            // slidesPerView: 1,
                            slidesPerView: 'auto',
                            spaceBetween: 20,
                        },
                        577: {
                            // slidesPerView: 1,
                            slidesPerView: 'auto',
                            spaceBetween: 20,
                        },
                        769: {
                            // slidesPerView: 1,
                            slidesPerView: 'auto',
                            spaceBetween: 20,
                        },
                        1025: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                            
                        },
                        1441: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                            
                        },
                        1601: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                    },
                });
            }
        });
        // if ( $(window).width() < 769 || window.matchMedia('screen and (max-width: 768x)').matches ){
            
        // }else{
        //     $( elem ).each(function(){
        //         if( $(this).hasClass('swiper-initialized') ){
        //             this.swiper.destroy(true, true);
        //         }
        //         sliderClassRemove( $(this) );
        //     });
        // }
    }
    
};

$(function() {
    sliderUnit('.slider.slider_inside');
});
// Resize
$(window).on("resize", function(){
    sliderUnit('.slider.slider_inside');
});