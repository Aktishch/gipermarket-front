const init = () => {

    const html = document.querySelector('html')
    const burger = document.querySelector('.-burger-')
    const close = document.querySelector('.-close-')
    const mobile = document.querySelector('.-mobile-')

    const documentWidth = document.documentElement.clientWidth
    const windowWidth = window.innerWidth
    const scrollBarWidth = windowWidth - documentWidth

    const openModal = () => {

        html.classList.add('overflow-hidden')
        html.style.marginRight = `${scrollBarWidth}px`
        mobile.classList.add('-mobile-open-')

    }

    const closeModal = () => {

        html.classList.remove('overflow-hidden')
        html.style.marginRight = '0'
        mobile.classList.remove('-mobile-open-')

    }

    burger.addEventListener('click', openModal)
    close.addEventListener('click', closeModal)

}

export default { init }