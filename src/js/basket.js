const init = () => {
  const modal = document.querySelector('.-basket-modal-')

  if (!modal) return

  const modalClose = modal.querySelector('.-modal-close-')
  const modalImg = modal.querySelector('.-basket-modal-img-')
  const modalName = modal.querySelector('.-basket-modal-name-')
  const modalOldPrice = modal.querySelector('.-basket-modal-old-price-')
  const modalPrice = modal.querySelector('.-basket-modal-price-')
  const modalQuantity = modal.querySelector('.-basket-modal-quantity-')
  const cards = document.querySelectorAll('.-product-card-')
  let modalRemoveTimeout

  cards.forEach(card => {
    const img = card.querySelector('.-product-card-img-')
    const imgSrc = img.dataset.src
    const name = card.querySelector('.-product-card-name-')
    const oldPrice = card.querySelector('.-product-card-old-price-')
    const price = card.querySelector('.-product-card-price-')
    const quantity = card.querySelector('.-product-card-quantity-')
    const btn = card.querySelector('.-product-card-btn-')
    let nameText
    let oldPriceText
    let priceText
    let val

    if (name) nameText = name.textContent
    if (oldPrice) oldPriceText = oldPrice.textContent
    if (price) priceText = price.textContent

    if (btn) {
      btn.addEventListener('click', () => {
        if (modal.classList.contains('product-in-basket--open')) modal.classList.remove('product-in-basket--open')

        setTimeout(() => {
          modal.classList.add('product-in-basket--open')
          quantity ? val = quantity.value : val = 1

          if (modalImg) modalImg.src = imgSrc
          if (modalName) modalName.innerHTML = nameText
          if (modalOldPrice) modalOldPrice.innerHTML = oldPriceText
          if (modalPrice) modalPrice.innerHTML = priceText
          if (modalQuantity) modalQuantity.innerHTML = val
          if (modalRemoveTimeout) clearTimeout(modalRemoveTimeout)

          modalRemoveTimeout = setTimeout(() => {
            modal.classList.remove('product-in-basket--open')
          }, 12000)
        }, 300)
      })
    }

    modalClose.addEventListener('click', () => {
        modal.classList.remove('product-in-basket--open')
    })
  })
}

export default { init }