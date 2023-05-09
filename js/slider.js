const swiper = new Swiper('.swiper', {
    //spaceBetween: 10,
    loop: false,
  
    // Navigation arrows
    navigation: {
      nextEl: '.next-button',
      prevEl: '.prev-button',
    },

    //centeredSlides: true,

    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 'auto',
            spaceBetween: 15,
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 2,
        },
        // when window width is >= 640px
        667.98: {
            slidesPerView: 3,
        }
    }
});