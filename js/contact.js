"use strict"; // Start of use strict

function stickyHeader () {
	if ($('.stricky').length) {
		var strickyScrollPos = 100;
		if($(window).scrollTop() > strickyScrollPos) {
			$('.stricky').removeClass('fadeIn animated');
	      	$('.stricky').addClass('stricky-fixed fadeInDown animated');
	      	$('.scroll-to-top').fadeIn(500);
		}
		else if($(this).scrollTop() <= strickyScrollPos) {
			$('.stricky').removeClass('stricky-fixed fadeInDown animated');
	      	$('.stricky').addClass('slideIn animated');
	      	$('.scroll-to-top').fadeOut(500);
		}
	};
}

function handlePreloader() {
	if($('.preloader').length){
		$('.preloader').delay(200).fadeOut(500);
	}
}

function scrollToTop() {
    if ($('.scroll-top').length) {

        //Check to see if the window is top if not then display button
        $(window).scroll(function() {
            if ($(this).scrollTop() > 200) {
                $('.scroll-top').fadeIn();
            } else {
                $('.scroll-top').fadeOut();
            }
        });

        //Click event to scroll to top
        $('.scroll-top').click(function() {
            $('html, body').animate({ scrollTop: 0 }, 1500);
            return false;
        });
    }
}


// Main Menu Function 
function themeMenu() {
    if ($("#main_menu").length) {
        $("#main_menu").menuzord({
            animation: "zoom-out"
        });
    }
}

//Contact Form Validation
if($("#contact-form").length){
	$("#contact-form").validate({
	    submitHandler: function(form) {
	      var form_btn = $(form).find('button[type="submit"]');
	      var form_result_div = '#form-result';
	      $(form_result_div).remove();
	      form_btn.before('<div id="form-result" class="alert alert-success" role="alert" style="display: none;"></div>');
	      var form_btn_old_msg = form_btn.html();
	      form_btn.html(form_btn.prop('disabled', true).data("loading-text"));
	      $(form).ajaxSubmit({
	        dataType:  'json',
	        success: function(data) {
	          if( data.status == 'true' ) {
	            $(form).find('.form-control').val('');
	          }
	          form_btn.prop('disabled', false).html(form_btn_old_msg);
	          $(form_result_div).html(data.message).fadeIn('slow');
	          setTimeout(function(){ $(form_result_div).fadeOut('slow') }, 6000);
	        }
	      });
	    }
	});
}

// instance of fuction while Document ready event	
jQuery(document).ready(function () {
	(function ($) {
		handlePreloader();
		scrollToTop();
		themeMenu();		
	})(jQuery);
});

// instance of fuction while Window Scroll event
jQuery(window).scroll(function () {	
	(function ($) {
		stickyHeader();
	})(jQuery);
});