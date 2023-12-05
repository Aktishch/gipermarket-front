import ymaps from 'ymaps'

const init = () => {

    const center = [54.75365856992721,32.10443149999999]
    const mark = [54.75365856992721,32.10443149999999]

    ymaps.load('https://api-maps.yandex.ru/2.1/?lang=ru_RU').then(maps => {

        const inputs = [...document.querySelectorAll('[data-suggest-view]')]

        inputs.forEach((input) => {

            new maps.SuggestView(input, {

                results: 5,
                container: document.body

            })

        })

        const map = new maps.Map('map', {

            center: center,
            zoom: 16

        })

        const placemark = new maps.Placemark(mark, {}, {

            iconLayout: 'default#image',
            iconImageHref: '/local/templates/gipermarket_sada/img/geo.png',
            iconImageSize: [90, 90],
            iconImageOffset: [-45, -45]

        })

        map.controls.remove('geolocationControl')
        map.controls.remove('searchControl')
        map.controls.remove('trafficControl')
        map.controls.remove('typeSelector')
        map.controls.remove('fullscreenControl')
        map.controls.remove('rulerControl')
        map.behaviors.disable(['scrollZoom'])
        map.geoObjects.add(placemark)

    }).catch(error =>

        console.log('Failed to load Yandex Maps', error)

    )

}

export default { init }