!function(e){var t={};function a(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=1)}([function(e,t){e.exports=jQuery},function(e,t,a){"use strict";var n,r=a(0),i=(n=r)&&n.__esModule?n:{default:n};a(2),a(3),a(4),a(5),a(6),a(7),(0,i.default)((function(){(0,i.default)(document).on("click",'[data-trigger="scroll"]',(function(e){return e.preventDefault(),(0,i.default)("html, body").animate({scrollTop:(0,i.default)((0,i.default)(this).attr("href")).offset().top+"px"},{duration:500,easing:"swing"}),!1})),(0,i.default)(document).on("click",'[data-trigger="click"]',(function(e){e.preventDefault()}))}))},function(e,t,a){"use strict";var n,r=a(0),i=(n=r)&&n.__esModule?n:{default:n};(0,i.default)(document).on("mouseup",(function(e){var t=(0,i.default)(".nav.nav--open"),a=(0,i.default)(".header__toggle.header__toggle--open");t.is(e.target)||0!==t.has(e.target).length||a.is(e.target)||(a.removeClass("header__toggle--open"),t.removeClass("nav--open"),t.slideUp())}))},function(e,t,a){"use strict";var n,r=a(0),i=(n=r)&&n.__esModule?n:{default:n};(0,i.default)(document).on("click",".tabs .tabs__item",(function(){var e=(0,i.default)(this).parent(),t=e.closest(".tabs"),a=(0,i.default)(this).data("content"),n=(0,i.default)(".tabs__content"+a);e.find(".tabs__item").hasClass("tabs__item_inside")?e.find(".tabs__item").removeClass("tabs__item_inside--active").eq((0,i.default)(this).index()).addClass("tabs__item_inside--active"):e.find(".tabs__item").removeClass("tabs__item--active").eq((0,i.default)(this).index()).addClass("tabs__item--active"),t.find(".tabs__content").removeClass("tabs__content--show").removeClass("tabs__content--active"),n.addClass("tabs__content--active")}))},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.unitMaskPhone=void 0;var n,r=a(0),i=(n=r)&&n.__esModule?n:{default:n};var u=t.unitMaskPhone=function(){(0,i.default)('input[data-input="phone"]').inputmask({mask:"+7 (999) 999 99 99",placeholder:" ",showMaskOnHover:!1,onincomplete:function(){(0,i.default)(this).closest("form").addClass("error-phone"),(0,i.default)(this).addClass("input--error"),(0,i.default)(this).siblings(".error_phone").addClass("error").html("Укажите корректный номер"),(0,i.default)(this).removeClass("input--success")},oncomplete:function(){(0,i.default)(this).closest("form").removeClass("error-phone"),(0,i.default)(this).removeClass("input--error"),(0,i.default)(this).siblings(".error_phone").removeClass("error").html(""),(0,i.default)(this).addClass("input--success")}})};(0,i.default)((function(){(0,i.default)('input[type="tel"]').length>0&&u()})),(0,i.default)("input").on("keydown",(function(e){if(13===e.keyCode&&!(0,i.default)(this).inputmask("isComplete"))return e.preventDefault(),(0,i.default)(this).blur(),!1}))},function(e,t,a){"use strict";var n,r=a(0),i=(n=r)&&n.__esModule?n:{default:n};var u=function(e){(0,i.default)(e).length>0&&(0,i.default)(e).each((function(){var e;if(e=(0,i.default)(this),(0,i.default)(e).addClass("swiper"),(0,i.default)(e).find(".slider__wrapper").addClass("swiper-wrapper"),(0,i.default)(e).find(".slider__slide").addClass("swiper-slide"),!(0,i.default)(this).hasClass("swiper-initialized"))new Swiper(this,{loop:!1,slidesPerView:1,spaceBetween:10,navigation:{nextEl:".slider__arrow_next",prevEl:".slider__arrow_prev"},breakpoints:{376:{slidesPerView:"auto",spaceBetween:20},577:{slidesPerView:"auto",spaceBetween:20},769:{slidesPerView:"auto",spaceBetween:20},1025:{slidesPerView:2,spaceBetween:20},1441:{slidesPerView:3,spaceBetween:20},1601:{slidesPerView:3,spaceBetween:20}}})}))};(0,i.default)((function(){u(".slider.slider_inside")})),(0,i.default)(window).on("resize",(function(){u(".slider.slider_inside")}))},function(e,t,a){"use strict";var n,r=a(0),i=(n=r)&&n.__esModule?n:{default:n};(0,i.default)((function(){var e=(0,i.default)(".calculator").data("percent"),t=((0,i.default)(".calculator").data("stragery"),(0,i.default)(".calculator").data("period")),a=(0,i.default)(".calculator").data("min"),n=(Math.round(1e5*a),(0,i.default)(".calculator").data("max")),r=(0,i.default)(".calculator").data("start"),u=Math.round(1e5*r);(0,i.default)("#incomingData").text(new Intl.NumberFormat("ru-RU",{useGrouping:!0,minimumFractionDigits:0}).format(Number(u)));var s=Math.round(u*t*e/100);(0,i.default)("#yieldData").text(new Intl.NumberFormat("ru-RU",{useGrouping:!0,minimumFractionDigits:0}).format(Number(s)));var l=Math.round(13*s/100);(0,i.default)("#refundData").text(new Intl.NumberFormat("ru-RU",{useGrouping:!0,minimumFractionDigits:0}).format(Number(l))),(0,i.default)("#calculatorSlider").slider({range:"min",value:r,min:a,max:n,slide:function(a,n){var r=Math.round(1e5*n.value),u=new Intl.NumberFormat("ru-RU",{useGrouping:!0,minimumFractionDigits:0}).format(Number(r));(0,i.default)("#incomingData").text(u);var s=Math.round(t*r*e/100),l=new Intl.NumberFormat("ru-RU",{useGrouping:!0,minimumFractionDigits:0}).format(Number(s));(0,i.default)("#yieldData").text(l);var o=Math.round(13*s/100),d=new Intl.NumberFormat("ru-RU",{useGrouping:!0,minimumFractionDigits:0}).format(Number(o));(0,i.default)("#refundData").text(d)}})}))},function(e,t,a){"use strict";var n,r=a(0),i=(n=r)&&n.__esModule?n:{default:n};(0,i.default)((function(){(0,i.default)(".header .header__toggle").on("click",(function(){var e;(0,i.default)(this).toggleClass("header__toggle--open"),e="nav.nav",(0,i.default)(e).toggleClass("nav--open"),(0,i.default)(e).slideToggle()}))})),(0,i.default)(window).on("resize",(function(){}))}]);