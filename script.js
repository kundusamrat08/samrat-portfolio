let menuIcon = document.querySelector('#menu*icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('Header nav a');
window.onscroll = () => {
    sections.forEach(sce => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
            navLinks.forEach(Links => {
                Links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });

        };
    });
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};

ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});
ScrollReveal().reveal('.home--content,.heading', { origin: 'top' });
ScrollReveal().reveal('.home--img, .services-comtainer, .portfolio-box,.contact form', { origin: 'buttom' });
ScrollReveal().reveal('.home--content h1,.abbout-img', { origin: 'left' });
ScrollReveal().reveal('.home--content p,.abbout-content', { origin: 'right' });

const typed = new typed('.multiple-text', {
    String: ['Frontend Developer','Youtuber', 'Blogger'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:100,
    loop:true
});