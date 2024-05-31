import Swiper, { Navigation, Pagination, Scrollbar, Autoplay, Grid, Thumbs, EffectFade, Lazy } from 'swiper'

Swiper.use([Navigation, Pagination, Scrollbar, Autoplay, Grid, Thumbs, EffectFade, Lazy]);
Swiper.defaults.touchStartPreventDefault = false
window.Swiper = Swiper

const init = () => {
  new Swiper('.banners-slider .swiper', {
    navigation: {
      nextEl: '.banners-slider .slider-next',
      prevEl: '.banners-slider .slider-prev'
    },
    slidesPerView: 'auto',
    slidesPerGroup: 1,
    watchSlidesProgress: true,
    loop: true,
    grabCursor: true,
    speed: 1000,
    autoplay: {
      delay: 4000,
      stopOnLastSlide: false,
      disableOnInteraction: false
    }
  })

  new Swiper('.categories-slider .swiper', {
    slidesPerView: 'auto',
    slidesPerGroup: 1,
    watchSlidesProgress: true,
    spaceBetween: 8,
    loop: true,
    navigation: {
      nextEl: '.categories-sliders .slider-next',
      prevEl: '.categories-sliders .slider-prev'
    },
    breakpoints: {
      576: {
        spaceBetween: 20
      }
    }
  })

  const productsSliders = document.querySelectorAll('.products-slider')

  productsSliders.forEach(productsSlider => {
    if (!productsSlider) return

    const productsSwiper = productsSlider.querySelector('.swiper')
    const productsNext = productsSlider.querySelector('.slider-next')
    const productsPrev = productsSlider.querySelector('.slider-prev')

    new Swiper(productsSwiper, {
      slidesPerView: 'auto',
      slidesPerGroup: 1,
      watchSlidesProgress: true,
      navigation: {
        nextEl: productsNext,
        prevEl: productsPrev
      }
    })
  })

  new Swiper('.reviews-slider .swiper', {
    slidesPerView: 'auto',
    slidesPerGroup: 1,
    watchSlidesProgress: true,
    loop: true,
    navigation: {
      nextEl: '.reviews-slider .slider-next',
      prevEl: '.reviews-slider .slider-prev'
    }
  })

  const cardDetailBullets = new Swiper('.product-detail-bullets .swiper', {
    slidesPerView: 'auto',
    watchSlidesProgress: true,
    freeMode: true,
})

new Swiper('.product-detail-slider .swiper', {
    slidesPerView: 'auto',
    watchSlidesProgress: true,
    spaceBetween:20,
    thumbs: {
        swiper: cardDetailBullets,
    }
})
}

export default { init }