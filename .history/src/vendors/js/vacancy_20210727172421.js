$('.accordion__button').click((event) => {
    const $accordionText = $(event.currentTarget).next()

    if ( $(event.currentTarget).hasClass('accordion_button_sactive') ) {
        $(event.currentTarget).removeClass('accordion_button_sactive') 
        // $accordionText.removeClass('accordion__info_active')
        
    }
    else {
        $(event.currentTarget).addClass('accordion_button_sactive')
        // $accordionText.addClass('accordion__info_active')
        $accordionText.animate({
            maxHeight: '100%',
        }, 500)
    }
})
 