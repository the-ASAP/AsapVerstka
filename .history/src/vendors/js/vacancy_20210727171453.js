$('.accordion__button').click((event) => {
    const $accordionText = $(event.currentTarget).next()

    if ( $accordionText.hasClass('accordion__info_active') ) {
        $accordionText.removeClass('accordion__info_active')
        $(event.currentTarget).removeClass('accordion_button_sactive') 
    }
    else {
        $accordionText.addClass('accordion__info_active')
        $(event.currentTarget).addClass('accordion_button_sactive')
    }
})
 