$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})



function scrollMy() {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}



var distance = $('.overview').offset().top;

$(window).scroll(function () {
    if ($(this).scrollTop() >= distance) {
        $(".upscroll").show();
    } else {
        $(".upscroll").hide()
    }
});