!function(e){var t={};function a(l){if(t[l])return t[l].exports;var r=t[l]={i:l,l:!1,exports:{}};return e[l].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=t,a.d=function(e,t,l){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(a.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(l,r,function(t){return e[t]}.bind(null,r));return l},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=2)}([function(e,t){e.exports=jQuery},function(e,t,a){"use strict";var l,r=a(0),n=(l=r)&&l.__esModule?l:{default:l};function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var i=function(e){(0,n.default)(e).length>0&&((0,n.default)(e).each((function(){var e;if(e=(0,n.default)(this),(0,n.default)(e).addClass("swiper"),(0,n.default)(e).find(".slider__wrapper").addClass("swiper-wrapper"),(0,n.default)(e).find(".slider__slide").addClass("swiper-slide"),!(0,n.default)(this).hasClass("swiper-initialized")){var t;new Swiper(this,{loop:!1,slidesPerView:1,spaceBetween:20,navigation:{nextEl:".slider__arrow_next",prevEl:".slider__arrow_prev"},breakpoints:{577:(t={slidesPerView:2},s(t,"slidesPerView","auto"),s(t,"spaceBetween",20),t)}})}})),(0,n.default)(window).width()<769||window.matchMedia("screen and (max-width: 768x)").matches||(0,n.default)(e).each((function(){var e;(0,n.default)(this).hasClass("swiper-initialized")&&this.swiper.destroy(!0,!0),e=(0,n.default)(this),(0,n.default)(e).removeClass("swiper"),(0,n.default)(e).find(".slider__wrapper").removeClass("swiper-wrapper"),(0,n.default)(e).find(".slider__slide").removeClass("swiper-slide")})))};(0,n.default)((function(){i(".slider.slider_inside")})),(0,n.default)(window).on("resize",(function(){i(".slider.slider_inside")}))},function(e,t,a){"use strict";var l,r=a(0),n=(l=r)&&l.__esModule?l:{default:l};a(3),a(4),a(5),a(1),a(6),a(7),a(8),(0,n.default)((function(){(0,n.default)(document).on("click",'[data-trigger="scroll"]',(function(e){return e.preventDefault(),(0,n.default)("html, body").animate({scrollTop:(0,n.default)((0,n.default)(this).attr("href")).offset().top+"px"},{duration:500,easing:"swing"}),!1})),(0,n.default)(document).on("click",'[data-trigger="click"]',(function(e){e.preventDefault()}))}))},function(e,t,a){"use strict";var l,r=a(0),n=(l=r)&&l.__esModule?l:{default:l};a(1);(0,n.default)(document).on("mouseup",(function(e){var t=(0,n.default)(".nav.nav--open"),a=(0,n.default)(".header__toggle.header__toggle--open");t.is(e.target)||0!==t.has(e.target).length||a.is(e.target)||((0,n.default)("body").removeClass("show-overlay"),a.removeClass("header__toggle--open"),t.removeClass("nav--open"),t.slideUp());var l=(0,n.default)(".calculator .calculator__modal.calculator__modal--active");l.is(e.target)||0!==l.has(e.target).length||(l.removeClass("calculator__modal--active"),l.slideUp())}))},function(e,t,a){"use strict";var l,r=a(0),n=(l=r)&&l.__esModule?l:{default:l};(0,n.default)(document).on("click",".tabs .tabs__item",(function(){var e=(0,n.default)(this).parent(),t=e.closest(".tabs"),a=(0,n.default)(this).data("content"),l=(0,n.default)(".tabs__content"+a);e.find(".tabs__item").hasClass("tabs__item_inside")?e.find(".tabs__item").removeClass("tabs__item_inside--active").eq((0,n.default)(this).index()).addClass("tabs__item_inside--active"):e.find(".tabs__item").removeClass("tabs__item--active").eq((0,n.default)(this).index()).addClass("tabs__item--active"),t.find(".tabs__content").removeClass("tabs__content--show").removeClass("tabs__content--active"),l.addClass("tabs__content--active")}))},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.unitMaskPhone=void 0;var l,r=a(0),n=(l=r)&&l.__esModule?l:{default:l};function s(e){var t;switch(e.attr("data-input")){case"message":e.val().length>2?e.removeClass("input--error").addClass("input--success"):e.removeClass("input--success").addClass("input--error");break;case"mail":t=e.val(),/^([\w-\.]+@([\w-]+\.)+[\w-]{2,5})?$/.test(t)&&e.val().length>0?e.removeClass("input--error").addClass("input--success"):e.removeClass("input--success").addClass("input--error");break;case"name":e.val().length>2?e.removeClass("input--error").addClass("input--success"):e.removeClass("input--success").addClass("input--error")}}var i=t.unitMaskPhone=function(){(0,n.default)('input[data-input="phone"]').inputmask({mask:"+7 (999) 999 99 99",placeholder:" ",showMaskOnHover:!1,onincomplete:function(){(0,n.default)(this).closest("form").addClass("error-phone"),(0,n.default)(this).addClass("input--error"),(0,n.default)(this).siblings(".error_phone").addClass("error").html("Укажите корректный номер"),(0,n.default)(this).removeClass("input--success")},oncomplete:function(){(0,n.default)(this).closest("form").removeClass("error-phone"),(0,n.default)(this).removeClass("input--error"),(0,n.default)(this).siblings(".error_phone").removeClass("error").html(""),(0,n.default)(this).addClass("input--success")}})};(0,n.default)((function(){(0,n.default)('input[type="tel"]').length>0&&i(),(0,n.default)(".input").on("input",(function(){s((0,n.default)(this))})),(0,n.default)(".input").on("change",(function(){s((0,n.default)(this))}))})),(0,n.default)("input").on("keydown",(function(e){if(13===e.keyCode&&!(0,n.default)(this).inputmask("isComplete"))return e.preventDefault(),(0,n.default)(this).blur(),!1}))},function(e,t,a){"use strict";var l,r=a(0),n=(l=r)&&l.__esModule?l:{default:l};(0,n.default)((function(){(0,n.default)(".toggle .toggle__title").on("click",(function(){var e=(0,n.default)(this),t=e.closest(".toggle"),a=t.find(".toggle__content");e.hasClass("toggle__title--active")?(e.removeClass("toggle__title--active"),a.slideUp(),t.removeClass("toggle--active")):(e.addClass("toggle__title--active"),a.slideDown(),t.addClass("toggle--active"))}))}))},function(e,t,a){"use strict";var l,r=a(0),n=(l=r)&&l.__esModule?l:{default:l};(0,n.default)((function(){var e=(0,n.default)(".calculator").data("percent"),t=((0,n.default)(".calculator").data("stragery"),(0,n.default)(".calculator").data("period")),a=(0,n.default)(".calculator").data("min"),l=(Math.round(1e5*a),(0,n.default)(".calculator").data("max")),r=(0,n.default)(".calculator").data("start"),s=Math.round(1e5*r);(0,n.default)("#incomingData").text(new Intl.NumberFormat("ru-RU",{useGrouping:!0,minimumFractionDigits:0}).format(Number(s)));var i=Math.round(13*s/100);i>42e3&&(i=s>=4e5?52e3:42e3),(0,n.default)("#refundData").text(new Intl.NumberFormat("ru-RU",{useGrouping:!0,minimumFractionDigits:0}).format(Number(i)));var o=Math.round(s*(1+e*t/100)+i*t);(0,n.default)("#yieldData").text(new Intl.NumberFormat("ru-RU",{useGrouping:!0,minimumFractionDigits:0}).format(Number(o))),(0,n.default)("#calculatorSlider").length>0&&(0,n.default)("#calculatorSlider").slider({range:"min",value:r,min:a,step:.5,max:l,slide:function(a,l){var r=Math.round(1e5*l.value),s=new Intl.NumberFormat("ru-RU",{useGrouping:!0,minimumFractionDigits:0}).format(Number(r));(0,n.default)("#incomingData").text(s);var i=Math.round(13*r/100);i>42e3&&(i=r>=4e5?52e3:42e3);var o=new Intl.NumberFormat("ru-RU",{useGrouping:!0,minimumFractionDigits:0}).format(Number(i));(0,n.default)("#refundData").text(o);var u=Math.round(r*(1+e*t/100)+i*t),d=new Intl.NumberFormat("ru-RU",{useGrouping:!0,minimumFractionDigits:0}).format(Number(u));(0,n.default)("#yieldData").text(d)}}),(0,n.default)(".calculator .calculator__link").on("click",(function(e){e.preventDefault(),(0,n.default)(".calculator .calculator__modal").addClass("calculator__modal--active"),(0,n.default)(".calculator .calculator__modal").slideDown()})),(0,n.default)(".calculator .calculator__modal .calculator__modal-close").on("click",(function(e){e.preventDefault(),(0,n.default)(".calculator .calculator__modal").removeClass("calculator__modal--active"),(0,n.default)(".calculator .calculator__modal").slideUp()}))}))},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.navbarMobileClose=void 0;var l,r=a(0),n=(l=r)&&l.__esModule?l:{default:l};var s=t.navbarMobileClose=function(e){(0,n.default)("body").removeClass("show-overlay"),(0,n.default)(".header .header__toggle").removeClass("header__toggle--open"),(0,n.default)(e).removeClass("nav--open"),(0,n.default)(e).slideUp()};(0,n.default)((function(){(0,n.default)(".header .header__toggle").on("click",(function(){var e;(0,n.default)(this).toggleClass("header__toggle--open"),e="nav.nav",(0,n.default)(e).toggleClass("nav--open"),(0,n.default)(e).slideToggle(),(0,n.default)("body").toggleClass("show-overlay")}))})),(0,n.default)(window).on("resize",(function(){((0,n.default)(window).width()>1024||!window.matchMedia("screen and (max-width: 1024px)").matches)&&((0,n.default)("nav.nav").hasClass("nav--open")&&s("nav.nav"),(0,n.default)("nav.nav").removeAttr("style"))}))}]);