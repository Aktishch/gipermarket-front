const inputNumber = (event) => {
  const input = event.target
  input.value = input.value.replace(/^\.|[^\d\.]|\.(?=.*\.)|^0+(?=\d)/g, '')
}

const init = () => {
  document.addEventListener('input', (event) => {
    if (event.target.getAttribute('data-input') == 'number') inputNumber(event)
  })

}

export default { init }