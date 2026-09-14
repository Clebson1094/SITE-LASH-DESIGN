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

/* ===================================
   CARROSSEL DE IMAGENS (VOLUME BRASILEIRO GATINHO)
   =================================== */
document.querySelectorAll('.card-carousel').forEach((carousel) => {
    const imageBox = carousel.closest('.card-image');
    const prevBtn = imageBox.querySelector('.carousel-prev');
    const nextBtn = imageBox.querySelector('.carousel-next');
    const slides = carousel.querySelectorAll('.card-slide');
    let current = 0;

    function updateCarousel() {
        slides.forEach((slide, index) => {
            slide.classList.toggle('active', index === current);
        });
        // Exibir apenas as setas aplicáveis
        prevBtn.hidden = current === 0;
        nextBtn.hidden = current === slides.length - 1;
    }

    prevBtn.addEventListener('click', () => {
        if (current > 0) {
            current -= 1;
            updateCarousel();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (current < slides.length - 1) {
            current += 1;
            updateCarousel();
        }
    });

    updateCarousel();
});

/* ===================================
   GALERIA DE RESULTADOS REAIS
   =================================== */

// Dados da galeria (imagens em assets/galeria/, nomes sequenciais)
const galeriaImagens = [
    { src: 'assets/galeria/galeria-foto-01.webp', alt: 'Volume Brasileiro Gatinho', categoria: 'Volume Brasileiro' },
    { src: 'assets/galeria/galeria-foto-02.webp', alt: 'Fox Eyes', categoria: 'Fox Eyes' },
    { src: 'assets/galeria/galeria-foto-03.webp', alt: 'Efeito Sirena', categoria: 'Sirena' },
    { src: 'assets/galeria/galeria-foto-04.webp', alt: 'Efeito Boneca', categoria: 'Boneca' },
    { src: 'assets/galeria/galeria-foto-05.webp', alt: 'Efeito Esquilo', categoria: 'Esquilo' },
    { src: 'assets/galeria/galeria-foto-06.jpg', alt: 'Volume Brasileiro Gatinho - resultado real', categoria: 'Volume Brasileiro' },
    { src: 'assets/galeria/galeria-foto-07.jpg', alt: 'Fox Eyes - resultado real', categoria: 'Fox Eyes' }
];

// Categorias únicas (geradas automaticamente a partir do array)
const categoriasGaleria = ['Todos', ...new Set(galeriaImagens.map(imagem => imagem.categoria))];

const galeriaGrid = document.getElementById('galeriaGrid');
const galeriaFiltros = document.getElementById('galeriaFiltros');
const lightbox = document.getElementById('lightbox');
const lightboxImagem = document.getElementById('lightboxImagem');
const lightboxContador = document.getElementById('lightboxContador');
const lightboxCategoria = document.getElementById('lightboxCategoria');
const lightboxFechar = document.getElementById('lightboxFechar');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');

let filtroAtivo = 'Todos';
let fotosVisiveis = [];
let fotoAtual = 0;

// Criar botões de filtro automaticamente
function criarFiltrosGaleria() {
    categoriasGaleria.forEach(categoria => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'galeria-filtro-btn' + (categoria === 'Todos' ? ' ativo' : '');
        btn.textContent = categoria;
        btn.addEventListener('click', () => filtrarGaleria(categoria, btn));
        galeriaFiltros.appendChild(btn);
    });
}

// Filtrar itens visíveis
function filtrarGaleria(categoria, btnAtual) {
    filtroAtivo = categoria;

    galeriaFiltros.querySelectorAll('.galeria-filtro-btn').forEach(b => {
        b.classList.toggle('ativo', b === btnAtual);
    });

    galeriaGrid.querySelectorAll('.galeria-item').forEach(item => {
        const mostrar = categoria === 'Todos' || item.dataset.categoria === categoria;
        item.style.display = mostrar ? 'block' : 'none';
        if (mostrar) {
            item.style.animation = 'none';
            void item.offsetHeight;
            item.style.animation = 'fadeUp 0.5s ease forwards';
        }
    });
}

// Renderizar grade a partir do array
function renderizarGaleria() {
    galeriaImagens.forEach(imagem => {
        const item = document.createElement('div');
        item.className = 'galeria-item';
        item.dataset.categoria = imagem.categoria;

        const img = document.createElement('img');
        img.className = 'galeria-foto';
        img.src = imagem.src;
        img.alt = imagem.alt;
        img.loading = 'lazy';
        img.decoding = 'async';

        item.appendChild(img);
        item.addEventListener('click', () => abrirLightbox(imagem));
        galeriaGrid.appendChild(item);
    });

    filtrarGaleria('Todos');
}

// Pré-carregar imagem vizinha (navegação instantânea)
function preCarregarFoto(foto) {
    const img = new Image();
    img.src = foto.src;
}

// Atualizar conteúdo do lightbox
function atualizarLightbox() {
    const foto = fotosVisiveis[fotoAtual];
    if (!foto) return;

    lightboxImagem.src = foto.src;
    lightboxImagem.alt = foto.alt;
    lightboxContador.textContent = fotoAtual + 1 + ' / ' + fotosVisiveis.length;
    lightboxCategoria.textContent = foto.categoria;

    // Pré-carregar as duas vizinhas
    preCarregarFoto(fotosVisiveis[(fotoAtual + 1) % fotosVisiveis.length]);
    preCarregarFoto(fotosVisiveis[(fotoAtual - 1 + fotosVisiveis.length) % fotosVisiveis.length]);
}

function abrirLightbox(imagem) {
    fotosVisiveis = galeriaImagens.filter(foto =>
        filtroAtivo === 'Todos' || foto.categoria === filtroAtivo
    );

    fotoAtual = fotosVisiveis.indexOf(imagem);
    if (fotoAtual === -1) return;

    atualizarLightbox();
    lightbox.classList.add('aberta');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    lightboxImagem.focus();
}

function fecharLightbox() {
    lightbox.classList.remove('aberta');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

function navegarLightbox(direcao) {
    const total = fotosVisiveis.length;
    if (total === 0) return;
    fotoAtual = (fotoAtual + direcao + total) % total;
    atualizarLightbox();
}

// Eventos do lightbox
lightboxFechar.addEventListener('click', fecharLightbox);
lightboxPrev.addEventListener('click', () => navegarLightbox(-1));
lightboxNext.addEventListener('click', () => navegarLightbox(1));

// Fechar ao clicar fora da imagem
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) fecharLightbox();
});

// Navegação por teclado
document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('aberta')) return;
    if (e.key === 'Escape') fecharLightbox();
    if (e.key === 'ArrowLeft') navegarLightbox(-1);
    if (e.key === 'ArrowRight') navegarLightbox(1);
});

// Navegação por gesto de toque (swipe)
let toqueInicialX = 0;
let toqueInicialY = 0;

lightbox.addEventListener('touchstart', (e) => {
    toqueInicialX = e.changedTouches[0].clientX;
    toqueInicialY = e.changedTouches[0].clientY;
}, { passive: true });

lightbox.addEventListener('touchend', (e) => {
    const deltaX = e.changedTouches[0].clientX - toqueInicialX;
    const deltaY = e.changedTouches[0].clientY - toqueInicialY;

    if (Math.abs(deltaX) > 50 && Math.abs(deltaX) > Math.abs(deltaY)) {
        navegarLightbox(deltaX > 0 ? -1 : 1);
    }
}, { passive: true });

// Inicializar galeria
criarFiltrosGaleria();
renderizarGaleria();
