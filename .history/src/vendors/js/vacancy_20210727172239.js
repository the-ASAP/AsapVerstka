$('.accordion__button').click((event) => {
    const $accordionText = $(event.currentTarget).next()

    if ( $accordionText.hasClass('accordion__info_active') ) {
        $(event.currentTarget).removeClass('accordion_button_sactive') 
        // $accordionText.removeClass('accordion__info_active')
        
    }
    else {
        $(event.currentTarget).addClass('accordion_button_sactive')
        // $accordionText.addClass('accordion__info_active')
        // $accordionText.animate({
        //     diplay: 'block',
        //     maxHeight: '100%',
        // }, 500)
    }
})
 