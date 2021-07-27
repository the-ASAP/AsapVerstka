$('.accordion').click(() => {
    const $accordionText = $('.accordion').next()

    if ( !$accordionText.hasClass('accordion__info_active') ) console.log(123)
})
 