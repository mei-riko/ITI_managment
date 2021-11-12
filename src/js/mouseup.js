import $ from 'jquery';
$(document).on('mouseup', function (e){
    let navbarActive = $('.nav.nav--open');
    let toggleActive = $('.header__toggle.header__toggle--open');

    if (!navbarActive.is(e.target) // клик был не по блоку
          && navbarActive.has(e.target).length === 0 // и не по его дочерним 
          && !toggleActive.is(e.target)
    ) {
        toggleActive.removeClass('header__toggle--open');
        navbarActive.removeClass('nav--open');
        navbarActive.slideUp();
    }
});