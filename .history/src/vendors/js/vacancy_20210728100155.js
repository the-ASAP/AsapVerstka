$('.profession__accordion').click((event) => {
    const $accordionText = $(event.currentTarget).next()

    if ( $(event.currentTarget).hasClass('profession__accordion__active') ) {
        $(event.currentTarget).removeClass('profession__accordion__active') 
        $accordionText.animate({
            height: 0,
        }, 500)
    }
    else {
        $(event.currentTarget).addClass('profession__accordion__active')
        $accordionText.animate({
            height: $accordionText.get(0).scrollHeight
        }, 500, function() {
            $(this).height('auto')
        })
    }
})
 