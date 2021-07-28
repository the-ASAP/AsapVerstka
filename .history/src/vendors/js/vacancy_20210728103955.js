$('.profession__accordion').click((event) => {
    const $accordionText = $(event.currentTarget).next()

    if ( $(event.currentTarget).hasClass('active') ) {
        $(event.currentTarget).removeClass('active') 
        $accordionText.animate({
            height: 0,
        }, 500)
    }
    else {
        $(event.currentTarget).addClass('active')
        $accordionText.animate({
            height: $accordionText.get(0).scrollHeight
        }, 500, function() {
            $(this).height('auto')
        })
    }
})
 