document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Sticky Header
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 0);
    });

    // Mobile Navigation
    const burger = document.querySelector('.burger');
    const mobileNav = document.querySelector('.mobile-nav');

    burger.addEventListener('click', () => {
        mobileNav.classList.toggle('open');
    });

    // Close mobile menu on link click
    document.querySelectorAll('.mobile-nav .nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.remove('open');
        });
    });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Sticky Header
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

// Mobile Navigation
const mobileNav = document.createElement('div');
mobileNav.classList.add('mobile-nav');
document.body.appendChild(mobileNav);

const nav = document.querySelector('nav');
const navClone = nav.cloneNode(true);
mobileNav.appendChild(navClone);

const burger = document.createElement('div');
burger.classList.add('burger');
burger.innerHTML = '&#9776;';
nav.appendChild(burger);

burger.addEventListener('click', function() {
    mobileNav.classList.toggle('open');
});

