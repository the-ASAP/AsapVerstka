$('.profession__button').click((event) => {
    const $accordionText = $(event.currentTarget).next()

    if ( $(event.currentTarget).hasClass('profession__button__active') ) {
        $(event.currentTarget).removeClass('profession__button__active') 
        $accordionText.animate({
            height: 0,
        }, 500)
    }
    else {
        $(event.currentTarget).addClass('profession__button__active')
        $accordionText.animate({
            height: $accordionText.get(0).scrollHeight
        }, 500, function() {
            $(this).height('auto')
        })
    }
})
 