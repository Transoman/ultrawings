jQuery(document).ready(function($) {

  // Toggle nav menu
  $('.nav-toggle').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('active');
    $('.header__nav').toggleClass('open');
  });

  // Modal
  $('.modal').popup({
    transition: 'all 0.3s',
    onclose: function() {
      $(this).find('label.error').remove();
    }
  });

  // Slider
  var breakpoint = window.matchMedia( '(min-width: 992px)' );
  var partnerSlider;

  var breakpointChecker = function() {
     // if larger viewport and multi-row layout needed
     if ( breakpoint.matches === true ) {
        // clean up old instances and inline styles when available
        if ( partnerSlider !== undefined ) {
          if ($('.info__logos').length) {
            $('.info__logos').removeClass('swiper-container');
            $('.info__logos div').unwrap('.swiper-wrapper');
            $('.info__logos img').unwrap();
            $('.info__logos .swiper-pagination').remove();
            partnerSlider.destroy( true, true );
          }
        }
        // or/and do nothing
        return;
     // else if a small viewport and single column layout needed
     } else if ( breakpoint.matches === false ) {
        // fire small viewport version of swiper
        return enableSwiper();
     }
  };

  var enableSwiper = function() {
    $('.info__logos').addClass('swiper-container');
    if (! $('.info__logos .swiper-wrapper').length ) {
      $('.info__logos img').wrapAll('<div class="swiper-wrapper"></div>');
    }
    $('.info__logos img').wrap('<div></div>');
    $('.info__logos .swiper-wrapper div').addClass('swiper-slide');
    $('.info__logos').append('<div class="swiper-pagination"></div>');

    partnerSlider = new Swiper ('.info__logos', {
      slidesPerView: 3,
      spaceBetween: 15,
      breakpoints: {
        767: {
          slidesPerView: 2,
          spaceBetween: 10
        },
        480: {
          slidesPerView: 1,
          spaceBetween: 0
        }
      },

      pagination: {
        el: '.swiper-pagination',
      },
    });
  }

  // keep an eye on viewport size changes
  breakpoint.addListener(breakpointChecker);
  // kickstart
  breakpointChecker();

  // Tabs
  $('.screen-tabs').tabslet();

  var itemCount = $('.com-list__item').length;

  if (itemCount > 6) {
    $('.com-list__item').each(function(i, el) {
      if (i > 5) {
        $(el).hide();
      }
      
    });
  }

  $('.screen-tabs__more').click(function(e) {
    e.preventDefault();
   

    if ($(this).text() == 'Hide') {
      $('.com-list__item').each(function(i, el) {
        if (i > 5) {
          $(el).hide();
        }
      });
      $(this).text('Show More');
    }
    else {
      $('.com-list__item').show();
      $(this).text('Hide');
    }
  });

  // SVG
  svg4everybody({});

});