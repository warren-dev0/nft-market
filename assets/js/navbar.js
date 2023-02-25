const navbarToogle = document.querySelector('#navbar-toogle');
const navbar = document.querySelector('#navbar');

navbarToogle.addEventListener('click', () => {
    const visibility = navbar.getAttribute('visible');
    if(visibility === 'false') {
        navbarToogle.setAttribute('aria-expanded', true);
        navbar.setAttribute('visible', true);
    } else if(visibility === 'true') {
        navbarToogle.setAttribute('aria-expanded', false);
        navbar.setAttribute('visible', false);
    }
});