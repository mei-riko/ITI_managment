function valid(val, elem, type) {
	var phone = false,
		name = false,
		$inputPhone = elem.closest('form').find('.input[data-input="phone"]'),
		$inputName = elem.closest('form').find('.input[data-input="name"]');
	
	if (typeof $inputPhone != 'undefined' && $inputPhone.length != 0) {
	  if ($inputPhone[0].inputmask.isComplete()) {

		phone = true;
		if (val == 'click') {
			$inputPhone.removeClass('input--error').addClass('input--success');
		}

	  } else {

		phone = false;
		if (val == 'click') {
			$inputPhone.removeClass('input--success').addClass('input--error');
		}

	  }
	}
	if (typeof $inputName != 'undefined' && $inputName.length != 0) {
	  if ( $inputName.val().length > 0 ) {
		name = true;
		
		if (val == 'click') {
			$inputName.removeClass('input--error').addClass('input--success');
		}
	  } else {
		name = false;

		if (val == 'click') {
			$inputName.removeClass('input--success').addClass('input--error');
		}
	  }
	}
	
	// Form With Phone
	if (typeof $inputPhone != 'undefined' && $inputPhone.length != 0) {
		if ( phone ) {
			$('[btn-form]').addClass('btn--active');
		} else {
			$('[btn-form]').removeClass('btn--active');
		}

		if( type == 'strategy' ){
			return name && phone;
		}
	}
}

// Cookies set inside object
var cookieHelper = {
  // Cookies
  create: function (name, value, days) {
	  if (days) {
		  var date = new Date();
		  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
		  var expires = "; expires=" + date.toGMTString();
	  }
	  else var expires = "";

	  document.cookie = name + "=" + value + expires + "; path=/";
  },

  read: function(name) {
	  var nameEQ = name + "=";
	  var ca = document.cookie.split(';');
	  for (var i = 0; i < ca.length; i++) {
		  var c = ca[i];
		  while (c.charAt(0) == ' ') c = c.substring(1, c.length);
		  if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
	  }
	  return null;
  },

  erase: function(name) {
	  cookieHelper.create(name, "", -1);
  }
}

$(document).on("submit","#ajaxForm form",function(e){
	e.preventDefault();
	
	let $form = $(this).closest('form'),
		type = '',
		name = '';
	
	if ( $(this).closest('form').hasClass('form_strategy') ){
		type = 'strategy';
	}
	
	if( valid( 'click', $(this), type ) == true ){
		
		var m_method=$(this).attr('method');
		var m_action=$(this).attr('action');
		var m_data=$(this).serialize();
		
		name = $form.find('.input[data-input="name"]').val();
		
		$.ajax({
			type: m_method,
			url: m_action,
			data: m_data,
			resetForm: 'true',
			success: function(result){
				var data = $(result).find("#ajaxForm").html();
				
				cookieHelper.erase('callbackName');
				cookieHelper.create('callbackName', name);
				
				if (typeof localStorage === 'object') {
					try {
						localStorage.setItem('callbackName', name);
					} catch (e) {
						Storage.prototype._setItem = Storage.prototype.setItem;
						Storage.prototype.setItem = function() {};
						alert('Your web browser does not support storing settings locally. In Safari, the most common cause of this is using "Private Browsing Mode". Some settings may not save or some features may not work properly for you.');
					}
				}
				
				console.log('name: ' + name);		
				console.log('cookies: ' + cookieHelper.read('callbackName'));
				console.log('localStorage: ' + localStorage.getItem('callbackName'));
				
				$("#ajaxFormThanks").html(data.replace("Спасибо!", "Спасибо, " + name + "!"));
				$("html, body").animate({
					scrollTop: $("#ajaxFormThanks").offset().top + "px"
				}, {
					duration: 500,
					easing: "swing"
				});
			}
		});
	}else{
		console.log( valid( 'click', $(this), type ) );
	}
});
