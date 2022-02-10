$(function(){
  //  Sticky Header  
  $(window).scroll(function(){
    var scrolling = $(this).scrollTop();
    
    if(scrolling > 40){
        $('.navbar').addClass('my_sticky_bg');
    }
    else {
         $('.navbar').removeClass('my_sticky_bg');
    }
    }); 
    // Banner slick slider 
  $('.banner_slick_slider').slick({
    arrows: true,
    autoplay: true,
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<i class="fa fa-chevron-left prev"></i>',
    nextArrow: '<i class="fa fa-chevron-right next"></i>',
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  // About slick slider 

  $('.about_slick_slider').slick({
    arrows: false,
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    
    ]
  });

  // Counter up start 
  $('.counter').counterUp({
    delay: 10,
    time: 2000
  });

  // Course slick slider 
  $('.course_slick_slider').slick({
    arrows: true,
    autoplay: true,
    dots: false,
    infinite: true,
    speed: 1500,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<i class="fa fa-chevron-left course_prev"></i>',
    nextArrow: '<i class="fa fa-chevron-right course_next"></i>',
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false
        }
      }
    
    ]
  });

  // Testimonial slider 
  $('.testi_slide').slick({
    arrows: true,
    autoplay: true,
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<i class="fa fa-chevron-left testimonial_prev"></i>',
    nextArrow: '<i class="fa fa-chevron-right testimonial_next"></i>',
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          autoplay: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    
    ]
  });
// Add class and remove class 
 
  

  // Teacher slick slider 

  $('.teacher_slick_sider').slick({
    arrows: false,
    autoplay: false,
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false
        }
      }
    
    ]
  });
  // Instagram part start 
  $('.insta_slick_slider').slick({
    arrows: false,
    autoplay: true,
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      }
    
    ]
  });
  // back to top button 
  $(window).on('scroll', function(event) {
    if($(this).scrollTop() > 300){
        $('.back-to-top').fadeIn(200);
    } else{
        $('.back-to-top').fadeOut(200);
    }
  });
  //==== Animate the scroll to top
  $('.back-to-top').on('click', function(event) {
    event.preventDefault();
  
    $('html, body').animate({
        scrollTop: 0,
    }, 1000);
  });
});

