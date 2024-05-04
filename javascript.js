    $(document).ready(function(){
        $('.owl-carousel').owlCarousel({
            loop:true,
            margin:10,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    nav:true
                },
                600:{
                    items:1,
                    nav:false
                },
                1000:{
                    items:1,
                    nav:true,
                    loop:false
                }
            }
        });
    });

$(document).ready(function () {
    $("#carousel_news").owlCarousel({
        items: 3,
        autoplay: true,
        loop: true,
        nav: true,
        dots: false,
        navText: ["<i class='fa-solid fa-angle-left'></i>", "<i class='fa-solid fa-angle-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
        }
    });
});