let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


// Link ativo na seção de rolagem
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    // Barra de navegação fixa
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // Remova o ícone de alternância e a barra de navegação quando clicar no link da barra de navegação (rolagem)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


// Adicionando a animação de revelação de elementos na página
const sr = ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200
});

sr.reveal('.home-content, .heading', { origin: 'top' });
sr.reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
sr.reveal('.home-content h1, .about-img', { origin: 'left' });
sr.reveal('.home-content p, .about-content', { origin: 'right' });


// Adicionando o efeito de digitação com o plugin Typed.js
const typed = new Typed('.multiple-text', {
    strings: ['Desenvolvedor Frontend!', 'Publicitário!', 'Gestor de trafégo pago!'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});