const carousel__projects = $('.carousel__projects')
const carousel__team = $('.carousel__team')

carousel__projects.owlCarousel({
    dots: false,
    autoWidth: false,
    items: 2,
    loop: true,
    nav: true,
    margin: 23,
    navContainer: '.carousel__projects__buttons',
    navText: [
    `
        <svg width="44" height="47" viewBox="0 0 44 47" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.2641 46.5273L0.000746007 23.264L23.2641 0.000616207L27.9168 4.65329L12.596 19.974L43.5566 20.2931L43.5566 26.873L12.596 26.5539L27.9168 41.8747L23.2641 46.5273Z" fill="#CECECE"/>
            <path d="M23.2641 46.5273L0.000746007 23.264L23.2641 0.000616207L27.9168 4.65329L12.596 19.974L43.5566 20.2931L43.5566 26.873L12.596 26.5539L27.9168 41.8747L23.2641 46.5273Z" stroke="white"/>
        </svg>
    `,
    `
        <svg width="45" height="47" viewBox="0 0 45 47" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.7398 0L44.0032 23.2634L20.7398 46.5267L16.0871 41.8741L31.4079 26.5533L0.447261 26.2342L0.447262 19.6543L31.4079 19.9734L16.0871 4.65267L20.7398 0Z" fill="url(#paint0_radial)"/>
            <path d="M20.7398 0L44.0032 23.2634L20.7398 46.5267L16.0871 41.8741L31.4079 26.5533L0.447261 26.2342L0.447262 19.6543L31.4079 19.9734L16.0871 4.65267L20.7398 0Z" stroke="white"/>
            <defs>
            <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(4.35383) rotate(48.2849) scale(59.5848 85.3475)">
            <stop offset="0.0272715" stop-color="#7137FF"/>
            <stop offset="1" stop-color="#BF99FF"/>
            </radialGradient>
            </defs>
        </svg>
    `]
})

carousel__team.owlCarousel({
    dots: false,
    autoWidth: false,
    items: 3,
    loop: true,
    nav: true,
    margin: 25,
    navContainer: '.carousel__team__buttons',
    navText: [
    `
        <svg width="44" height="47" viewBox="0 0 44 47" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.2641 46.5273L0.000746007 23.264L23.2641 0.000616207L27.9168 4.65329L12.596 19.974L43.5566 20.2931L43.5566 26.873L12.596 26.5539L27.9168 41.8747L23.2641 46.5273Z" fill="#CECECE"/>
            <path d="M23.2641 46.5273L0.000746007 23.264L23.2641 0.000616207L27.9168 4.65329L12.596 19.974L43.5566 20.2931L43.5566 26.873L12.596 26.5539L27.9168 41.8747L23.2641 46.5273Z" stroke="white"/>
        </svg>
    `,
    `
        <svg width="45" height="47" viewBox="0 0 45 47" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.7398 0L44.0032 23.2634L20.7398 46.5267L16.0871 41.8741L31.4079 26.5533L0.447261 26.2342L0.447262 19.6543L31.4079 19.9734L16.0871 4.65267L20.7398 0Z" fill="url(#paint0_radial)"/>
            <path d="M20.7398 0L44.0032 23.2634L20.7398 46.5267L16.0871 41.8741L31.4079 26.5533L0.447261 26.2342L0.447262 19.6543L31.4079 19.9734L16.0871 4.65267L20.7398 0Z" stroke="white"/>
            <defs>
            <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(4.35383) rotate(48.2849) scale(59.5848 85.3475)">
            <stop offset="0.0272715" stop-color="#7137FF"/>
            <stop offset="1" stop-color="#BF99FF"/>
            </radialGradient>
            </defs>
        </svg>
    `]
})