console.log('Muneer Dairy Farm Retail website loaded');
console.log('Muneer Dairy Farm Retail website loaded');
<script>
        // 1. Initialize AOS Animations
        document.addEventListener('DOMContentLoaded', () => {
            AOS.init({
                duration: 800,
                once: true,
                offset: 100
            });

            // Set current dynamic year in footer
            document.getElementById('yearSpan').textContent = new Date().getFullYear();
        });

        // 2. Hide Preloader after page load
        window.addEventListener('load', () => {
            const preloader = document.getElementById('preloader');
            preloader.style.opacity = '0';
            preloader.style.visibility = 'hidden';
        });

        // 3. Navbar scroll dynamics & Back to top button visibility
        const navbar = document.getElementById('mainNavbar');
        const scrollTopBtn = document.getElementById('scrollTopBtn');

        window.addEventListener('scroll', () => {
            if (window.scrollY > 60) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }

            if (window.scrollY > 400) {
                scrollTopBtn.classList.add('show');
            } else {
                scrollTopBtn.classList.remove('show');
            }
        });

        function scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }

        // 4. Dark / Light Theme Toggle Script
        const themeToggleBtn = document.getElementById('themeToggleBtn');
        const themeIcon = document.getElementById('themeIcon');
        const htmlElement = document.documentElement;

        // Check local storage for theme preference
        const savedTheme = localStorage.getItem('theme') || 'light';
        setTheme(savedTheme);

        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = htmlElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            setTheme(newTheme);
        });

        function setTheme(theme) {
            htmlElement.setAttribute('data-theme', theme);
            localStorage.setItem('theme', theme);
            if (theme === 'dark') {
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
            } else {
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
            }
        }

        // 5. Product Category Filter System
        const filterBtns = document.querySelectorAll('.filter-btn');
        const productItems = document.querySelectorAll('.product-item');

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Update active button styling
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filterValue = btn.getAttribute('data-filter');

                productItems.forEach(item => {
                    if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                        item.style.display = 'block';
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'scale(1)';
                        }, 50);
                    } else {
                        item.style.opacity = '0';
                        item.style.transform = 'scale(0.9)';
                        setTimeout(() => {
                            item.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });

        // 6. Lightbox Handler
        function openLightbox(imgSrc, captionText) {
            document.getElementById('lightboxImage').src = imgSrc;
            document.getElementById('lightboxCaption').textContent = captionText;
            const lightboxModal = new bootstrap.Modal(document.getElementById('lightboxModal'));
            lightboxModal.show();
        }

        // 7. Contact Form Simulation Handler
        function handleFormSubmit(event) {
            event.preventDefault();
            alert('Thank you for reaching out to Muneer Dairy Farm Retail! We will call or WhatsApp you shortly.');
            event.target.reset();
        }
    </script>