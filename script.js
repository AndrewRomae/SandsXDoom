/**
 * SANDS X DOOM (SxD) - LÓGICA E INTERATIVIDADE
 */

document.addEventListener('DOMContentLoaded', () => {
    initHeaderScroll();
    initMobileNav();
    initCharacterSelector();
    initSmoothScroll();
});

/**
 * Altera estilo do Header ao rolar a página
 */
function initHeaderScroll() {
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

/**
 * Menu Hamburguer para Mobile
 */
function initMobileNav() {
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.querySelector('.nav-links');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Fechar ao clicar em um link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }
}

/**
 * Sistema de Troca de Personagens (Tabs)
 */
function initCharacterSelector() {
    const tabs = document.querySelectorAll('.char-tab');
    const profiles = document.querySelectorAll('.char-profile');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetId = tab.getAttribute('data-target');

            // Atualiza estado ativo das abas
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // Exibe o perfil correspondente
            profiles.forEach(profile => {
                if (profile.id === targetId) {
                    profile.classList.add('active');
                } else {
                    profile.classList.remove('active');
                }
            });
        });
    });
}

/**
 * Scroll Suave Seguro
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}