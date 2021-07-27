$('.accordion__button').click((event) => {
    const $accordionText = $(event.currentTarget).next()

    if ( $(event.currentTarget).hasClass('accordion_button_sactive') ) {
        $(event.currentTarget).removeClass('accordion_button_sactive') 
        $accordionText.animate({
            height: 0,
        }, 500)
    }
    else {
        $(event.currentTarget).addClass('accordion_button_sactive')
        $accordionText.animate({
            height: $accordionText.get(0).scrollHeight
        }, 500, function() {
            $(this).height('auto')
        })
    }
})
 