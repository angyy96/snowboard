import 'owl.carousel';
$(document).ready(function() {
    let header = $("#header"),
        sliderHeight = $(".slider").innerHeight(),
        scrollOffset = $(window).scrollTop(),
        navToggler = $("#nav-toggler");
    
    // Fixed header on scroll

    checkScroll(scrollOffset);

    $(window).on("scroll", function(event) {
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);


        $(navToggler).removeClass("active");
        $(".nav-menu").removeClass("show");
    })


    function checkScroll(scrollOffset) {
        if (scrollOffset > sliderHeight) {
            header.addClass('fixed');
        } else {
            header.removeClass('fixed');
        }
    }

    // Toggle navigation menu

   $(navToggler).on("click", function() {
       $(this).toggleClass("active");
       $(".nav-menu").toggleClass("show");
   })

   $(".slider-snowboards").owlCarousel({
        items: 3,
        autoplay: true,
        responsiveClass:true,
        autoplayHoverPause: true,
        loop: true,
        nav: true,
        center: true,
        navText: ['', ''],
        responsive: {
        0: {
            items: 1,
            nav: true,
            dots: false
        },
        576: {
            items: 1
        },
        990: {
            items: 3
        },
        1110: {
            items: 3
        }
        }
    });
});



$(window).on('load', function(){

    // Owl-carousel Intro Slider

    $('#page').show()
    $('#preloader').hide()

    $(".slider").owlCarousel({
        items: 1,
        autoplay: true,
        autoplayHoverPause: true,
        loop: true,
        lazyLoad : true,
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            }
        }
    });
})


