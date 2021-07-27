$('.accordion').click(() => {
    const $accordionText = $('.accordion').next()

    if ( $accordionText.hasClass('accordion__info_active') ) {
        $('.accordion').addClass('accordion_active')
        $accordionText.removeClass('accordion__info_active') 
    }
    else $accordionText.addClass('accordion__info_active')

})
 