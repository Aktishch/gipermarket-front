import fancybox from "./js/fancybox";
import swiper from "./js/swiper";
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
import dataHref from './js/data-href'
import profileLoadPhoto from './js/profile-load-photo'
import copyLink from './js/copy-link'
import inputNumber from './js/input-number'
import canvasImage from './js/canvas-image'
import timeCounter from './js/time-counter'
import basket from './js/basket'


import './scss/index.scss';

window.ripple = ripple
window.addEventListener('DOMContentLoaded', () => loadHandler())

fancybox.init()

function loadHandler() {
	swiper.init()
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
	dataHref.init()
	profileLoadPhoto.init()
	copyLink.init()
	inputNumber.init()
	canvasImage.init()
	timeCounter.init()
	basket.init()

	window.addEventListener('toggleopen', toggleopenHaandler)
	window.addEventListener('toggleclose', togglecloseHaandler)
	document.addEventListener('click', select)

}

const select = (event) => {
	if (event.target.closest('.select-item')) {
		const select = event.target.closest('.select')
		const item = event.target.closest('.select-item')
		const toggler = select.querySelector('.select-toggler')
		const value = item.getAttribute('data-value')
		const target = select.querySelector('.select-target')
		const content = document.getElementById(select.getAttribute('data-content'))

		toggler.innerHTML = item.querySelector('.select-item-inner').outerHTML
		if (content) {
			if (item.querySelector('.select-item-content')) {
				content.innerHTML = item.querySelector('.select-item-content')?.innerHTML
			} else {
				content.innerHTML = ''
			}
		}


		let toSelect = target.querySelector(`option[value='${value}']`);
		if (!toSelect) {
			[toSelect] = target.options;
		}
		toSelect.selected = true;
		target.dispatchEvent(new CustomEvent('change'));

	}
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