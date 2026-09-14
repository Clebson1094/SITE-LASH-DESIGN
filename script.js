/* ===================================
   MENU MOBILE
   =================================== */
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Fechar menu ao clicar em um link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

/* ===================================
   HEADER SCROLL
   =================================== */
const header = document.querySelector('.header');

let lastScrollY = 0;
window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    lastScrollY = currentScrollY;
});

/* ===================================
   SCROLL SUAVE PARA ÂNCORAS
   =================================== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            e.preventDefault();
            const headerHeight = header.offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

/* ===================================
   FILTROS DE PROCEDIMENTOS
   =================================== */
const filtroBtns = document.querySelectorAll('.filtro-btn');
const procedimentoCards = document.querySelectorAll('.procedimento-card');

filtroBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Atualizar botão ativo
        filtroBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filtro = btn.dataset.filter;

        // Filtrar cards
        procedimentoCards.forEach(card => {
            const categoria = card.dataset.category;

            if (filtro === 'todos' || categoria === filtro) {
                card.style.display = 'flex';
                card.style.animation = 'fadeUp 0.5s ease forwards';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

/* ===================================
   ANIMAÇÕES AO SCROLL (INTERSECTION OBSERVER)
   =================================== */
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-up');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observar seções para animação
document.querySelectorAll('.sobre, .procedimentos, .galeria, .contato').forEach(section => {
    observer.observe(section);
});

/* ===================================
   DESTACAR LINK ATIVO NO MENU
   =================================== */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');

function updateActiveLink() {
    const scrollY = window.pageYOffset;
    const headerHeight = header.offsetHeight;

    sections.forEach(section => {
        const sectionTop = section.offsetTop - headerHeight - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveLink);
updateActiveLink();

/* ===================================
   PREVENÇÃO DE ZOOM NO MOBILE (INPUT)
   =================================== */
// (Não há inputs no site atual, mas mantido para futuras expansões)

/* ===================================
   CONSOLE LOG
   =================================== */
console.log('%c✨ Paula Cristina - Site Catálogo', 'color: #C8A951; font-size: 24px; font-weight: bold;');
console.log('%cDesenvolvido com luxo e sofisticação.', 'color: #B0B0B0; font-size: 14px;');
