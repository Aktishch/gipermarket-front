const init = () => {

	const headerTop = document.querySelector('.-header-top-')
	const header = document.querySelector('.-header-')
	const nav = document.querySelector('.-nav-')
	const navTop = document.querySelector('.-nav-top-')
	
	const scrollHeader = () => {
		
		let currentScrollPos = window.pageYOffset
		let topHeight = headerTop.clientHeight + header.clientHeight + nav.clientHeight

		currentScrollPos > topHeight ? navTop.classList.add('nav-top--scroll') : navTop.classList.remove('nav-top--scroll')

	}

	document.addEventListener('scroll', scrollHeader)

}

export default { init }