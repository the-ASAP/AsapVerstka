$('.accordion').click(() => {
    const $accordionText = this.next()

    if ( $accordionText.hasClass('accordion__info_active') ) $accordionText.removeClass('accordion__info_active')
    else $accordionText.addClass('accordion__info_active')

})
 