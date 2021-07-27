$('.accordion').click((event) => {
    const $accordion = $(event.currentTarget)
    console.log($accordion.next())
    const $accordionText = $('.accordion').next()

    
    if ( $accordionText.hasClass('accordion__info_active') ) {
        $accordionText.removeClass('accordion__info_active')
        $('.accordion').removeClass('accordion_active') 
    }
    else {
        $accordionText.addClass('accordion__info_active')
        $('.accordion').addClass('accordion_active')
    }
})
 