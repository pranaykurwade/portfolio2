// Menu Icon Toggle
        const menuIcon = document.querySelector('#menu-icon');
        const navbar = document.querySelector('.navbar');

        menuIcon.addEventListener('click', () => {
            menuIcon.classList.toggle('bx-x');
            navbar.classList.toggle('active');
        });

        // Active Link on Scroll
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('header nav a');

        window.addEventListener('scroll', () => {
            sections.forEach(sec => {
                let top = window.scrollY;
                let offset = sec.offsetTop - 150;
                let height = sec.offsetHeight;
                let id = sec.getAttribute('id');

                if(top >= offset && top < offset + height) {
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                    });
                    document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                }
            });

            // Sticky Header
            const header = document.querySelector('.header');
            header.classList.toggle('sticky', window.scrollY > 100);

            // Remove Menu
            menuIcon.classList.remove('bx-x');
            navbar.classList.remove('active');
        });

        // Dark Mode Toggle
        const darkModeIcon = document.querySelector('#darkMode-icon');
        darkModeIcon.addEventListener('click', () => {
            darkModeIcon.classList.toggle('bx-sun');
            document.body.classList.toggle('dark-mode');
        });

        // Form Submission
        const form = document.querySelector('form');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Message sent successfully!');
            form.reset();
        });