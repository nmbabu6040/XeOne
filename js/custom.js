// preloader start 
jQuery(window).on("load", function () {
    "use strict";
    jQuery(".loader").fadeOut(800);

});


// banner slider 
$('.bannerSlider').owlCarousel({
    loop: true,
    margin: 0,
    dots: true,
    autoplay: true,
    smartSpeed:500,
    autoplayTimeout: 4000,
    responsiveClass: true,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 1,
        },
        1000: {
            items: 1,

        }
    }
})



// team slider 
$('.teamSlider').owlCarousel({
    loop: true,
    margin: 30,
    items: 3,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 2,
        },
        1000: {
            items: 3,

        }
    }
})

// counter js 
$(document).ready(function () {
    $(".counter").counterUp();
});

// venobox js 
new VenoBox({
    selector: '.my-video-links',
});


// testimonial slider 
$('.testSlider').owlCarousel({
    loop: true,
    margin: 30,
    dots: true,
    dotsEach: 1,
    items: 3,
    smartSpeed: 800,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
        },
        576: {
            items: 2,
        },
        768: {
            items: 3,

        },
        992: {
            items: 3
        }
    }
})

// brand slider 
$('.brandSlider').owlCarousel({
    loop: true,
    margin: 30,
    items: 5,
    smartSpeed: 800,
    autoplay: true,
    autoplayTimeout: 3000,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
        },
        576: {
            items: 2,
        },
        768: {
            items: 4,

        },
        992: {
            items: 5
        }
    }
})

// sticky menu bar 
$(document).ready(function () {
    var $window = $(window);

    $window.on("scroll", function () {
        if ($window.scrollTop() > 120) {
            $(".navbar").addClass("fixedmenu");
        } else {
            $(".navbar").removeClass("fixedmenu");
        }
    });
});




