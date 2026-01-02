document.addEventListener('DOMContentLoaded', () => {
    console.log('NCB Website Loaded');

    // Text Resize Logic (GIGW Requirement)
    const body = document.body;
    const resizeBtns = document.querySelectorAll('.text-resize button');

    if (resizeBtns) {
        resizeBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const action = e.target.ariaLabel;

                if (action && action.includes('Increase')) {
                    body.style.fontSize = '110%';
                } else if (action && action.includes('Decrease')) {
                    body.style.fontSize = '90%';
                } else {
                    body.style.fontSize = '100%';
                }
            });
        });
    }

    // Mobile Menu Toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileBtn && navLinks) {
        mobileBtn.addEventListener('click', () => {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
            mobileBtn.classList.toggle('active');
        });
    }

    // Scroll Animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

    // Tab Functionality
    const tabBtns = document.querySelectorAll('.tab-btn');

    if (tabBtns) {
        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                tabBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const content = document.querySelector('.glimpse-content');
                content.style.opacity = '0';
                setTimeout(() => {
                    content.style.opacity = '1';
                }, 200);
            });
        });
    }
});
