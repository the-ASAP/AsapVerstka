$('.accordion').click((event) => {
    const $accordionText = $(event.currentTarget).next()

    if ( $accordionText.hasClass('accordion__info_active') ) {
        $accordionText.removeClass('accordion__info_active')
        $(event.currentTarget).removeClass('accordion_active') 
    }
    else {
        $accordionText.addClass('accordion__info_active')
        $(event.currentTarget).addClass('accordion_active')
    }
})
 