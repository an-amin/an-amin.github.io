/*
 * Plugin initializer JS
 */

(function($) {
	$(document).ready(function($) {

    /*gallery-filter*/
    var $container = $('.portfolioContainer');
    $container.isotope({
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });
    $('.portfolioFilter a').click(function(){
        $('.portfolioFilter .current').removeClass('current');
        $(this).addClass('current');

        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        return false;
    }); // gallery-filter

    // magnific-pop-up
    $('.image-popup').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        mainClass: 'mfp-fade',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        }
    }); // magnific-pop-up
		/*gallery-filter*/
  


    /*swiper*/
    var swiper = new Swiper('#service_swiper', {
      slidesPerView: 3,
      // spaceBetween: 25,
      grabCursor: true,
      centeredSlides: true,
      // init: false,
      effect: 'coverflow',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows : true,
      },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        // dynamicBullets: true,
      },
      breakpoints: {
        1024: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        }
      }
    });
    /*swiper*/

	}); //document.ready
})( jQuery ); // jQuery.definer

/***WhatsHelp.io widget***/
(function () {
  var options = {
    call: "+8801973737034", // Call phone number
    sms: "+8801973737034", // Sms phone number
    whatsapp: "+8801973737034", // WhatsApp number
    telegram: "islamaminul", // Telegram bot username
    facebook: "sysamin", // Facebook page ID: 160990734741710
    email: "hello-amin@yandex.com", // Email
    call_to_action: "", // Call to action
    button_color: "#129BF4", // Color of button
    position: "right", // Position may be 'right' or 'left'
    order: "email,call,sms,whatsapp,facebook,telegram", // Order of buttons
  };
  var proto = document.location.protocol, host = "whatshelp.io", url = proto + "//static." + host;
  var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url + '/widget-send-button/js/init.js';
  s.onload = function () { WhWidgetSendButton.init(host, proto, options); };
  var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
})();
/***WhatsHelp.io widget***/
