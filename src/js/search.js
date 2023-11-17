const init = () => {
    const form = document.querySelector('.-form-search-')

    if (!form) return

    const input = form.querySelector('.-form-search-input-')
    const result = form.querySelector('.-form-search-result-')

    const resultOpen = () => {
        result.classList.remove('visibility-hidden', 'fade-0')
    }

    const resultClose = () => {
        result.classList.add('visibility-hidden', 'fade-0')
    }

    input.addEventListener('focus', () => {
        if (input.value.length > 0) resultOpen()
    })

    input.addEventListener('input', () => {
        switch (input.value.length > 0) {
            case true: {
                resultOpen()
                break
            }

            case false: {
                resultClose()
                break
            }
        }
    })

    document.addEventListener('click', (event) => {
        if (!event.target.closest('.-form-search-')) resultClose()
    })

    document.addEventListener('scroll', resultClose)
}

export default { init }