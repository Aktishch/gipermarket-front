const showPassword = (event) => {

    const btn = event.target
    const eye = btn.querySelector('use')
    const input = btn.parentElement.querySelector('.-password-')

    if (input.type === 'password') {

        eye.setAttribute('xlink:href', 'img/icons.svg#eye-hidden')
        input.type = 'text'

    } else {

        eye.setAttribute('xlink:href', 'img/icons.svg#eye-visible')
        input.type = 'password'

    }

}

const init = () => {

    document.addEventListener('click', (event) => {

        if (event.target.classList.contains('-eye-')) showPassword(event)

    })

}

export default { init }