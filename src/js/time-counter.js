const init = () => {
  const counter = document.querySelector('*[data-counter]')

  if (!counter) return

  const subtitle = counter.querySelector('*[data-counter-subtitle]')
  const timer = counter.querySelector('*[data-counter-timer]')
  const units = timer.querySelectorAll('*[data-counter-unit]')
  const date = new Date(Number(counter.dataset.counterYear), Number(counter.dataset.counterMonth) - 1, Number(counter.dataset.counterDay), Number(counter.dataset.counterHour), Number(counter.dataset.counterMinute), 0).getTime()

  const getTimeCounter = () => {
    const distance = date - new Date().getTime()
    const day = 24 * 60 * 60 * 1000
    const hour = 60 * 60 * 1000
    const minute = 60 * 1000

    const values = [
      Math.floor(distance / day),
      Math.floor((distance % day) / hour),
      Math.floor((distance % hour) / minute),
      Math.floor((distance % minute) / 1000),
    ]

    units.forEach((element, index) => (element.textContent = values[String(index)]))

    if (distance < 0) removeTimeCounter()
  }

  const interval = setInterval(getTimeCounter, 1000)

  const removeTimeCounter = () => {
    clearInterval(interval)
    timer.remove()
    subtitle.classList.remove('display-none')
  }

  getTimeCounter()
}

export default { init }