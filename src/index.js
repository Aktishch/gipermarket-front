import fancybox from "./js/fancybox";
import yandexMap from './js/yandex-map';
import rangeSlider from './js/range-slider';
import theme from './js/theme';
import inputmask from "./js/inputmask";
import scrollTo from "./js/scrollTo";
import tab from 'npm-kit-tab';
import toggle from 'npm-kit-toggle';
import ripple from 'npm-kit-ripple';
import scrollNav from './js/scroll-nav'
import mobileMenu from './js/mobile-menu'
import password from './js/password'
import Swiper, { Navigation, Pagination, Scrollbar, Autoplay, Grid, Thumbs, EffectFade, Lazy } from 'swiper';


import './scss/index.scss';

Swiper.use([Navigation, Pagination, Scrollbar, Autoplay, Grid, Thumbs, EffectFade, Lazy]);
Swiper.defaults.touchStartPreventDefault = false
window.Swiper = Swiper
window.ripple = ripple
window.addEventListener('DOMContentLoaded', () => loadHandler())

function loadHandler() {
	fancybox.init()
	yandexMap.init()
	scrollTo.init()
	rangeSlider.init()
	tab.init()
	toggle.init()
	ripple.init()
	theme.init()
	inputmask.init(document)

	ripple.attach('.btn')
	ripple.attach('.waved')
	ripple.deAttach('.btn--link')
	scrollNav.init()
	mobileMenu.init()
	password.init()

	window.addEventListener('toggleopen', toggleopenHaandler)
	window.addEventListener('toggleclose', togglecloseHaandler)

}

function toggleopenHaandler(event) {
	if (event.detail.target.classList.contains('-filter-')) {
		document.body.classList.add('overflow-hidden')
	}
}

function togglecloseHaandler(event) {
	if (event.detail.target.classList.contains('-filter-')) {
		document.body.classList.remove('overflow-hidden')
	}
}