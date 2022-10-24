const anchorTransition = (event) => {

    event.preventDefault()

    const id = String(event.target.getAttribute('href'))
    const navTopHeight = document.querySelector('.-nav-top-').clientHeight
    const scrollToBlock = document.querySelector(id)

    let scrollToBlockPosition = scrollToBlock.getBoundingClientRect().top
    let offsetPosition = scrollToBlockPosition + window.pageYOffset - navTopHeight

    window.scrollTo({

        top: offsetPosition,
        behavior: 'smooth'

    })

}

const init = () => {

    document.addEventListener('click', (event) => {

        if (event.target.hasAttribute('data-href')) anchorTransition(event)

    })

}

export default { init }