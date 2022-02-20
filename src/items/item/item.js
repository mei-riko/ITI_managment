import $ from 'jquery';
$(function() {
    $('.item.item_link').on('click', function(e) { 
        // alert('cls clicked');
     }).on('click','.item__label-modal', function(e) { 
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        // alert('cls modal clicked');
        Fancybox.show([{ src: "#iis", type: "inline", dragToClose: false, }]);
     });
});