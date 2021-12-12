import $ from 'jquery';
$(function() {
    $('.toggle .toggle__title').on('click', function(){
        let $toggleTitle = $(this);
        let $toggle = $toggleTitle.closest('.toggle');
        let $toggleContent = $toggle.find('.toggle__content');
        
        if( !$toggleTitle.hasClass('toggle__title--active') ){
            $toggleTitle.addClass('toggle__title--active');
            $toggleContent.slideDown();
            $toggle.addClass('toggle--active');
        }else{
            $toggleTitle.removeClass('toggle__title--active');
            $toggleContent.slideUp();
            $toggle.removeClass('toggle--active');
        }
        
    });
});