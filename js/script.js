$(document).ready(function() {
    // Mobile Menu Toggle
    $('.hamburger').click(function() {
        $('.nav-links').toggleClass('active');
    });

    // Smooth Scrolling
    $('a[href*="#"]').on('click', function(e) {
        // Only apply smooth scroll if it's an internal link
        if (this.hash !== "") {
            e.preventDefault();
            const hash = this.hash;

            // Update the "How It Works" navigation link to "Contact"
            if ($(this).attr('href') === 'how-it-works.html') {
                 // Prevent default behavior for external link if still present in original HTML
                 // For this updated code, it directly links to #contact-section
            } else {
                $('html, body').animate(
                    {
                        scrollTop: $(hash).offset().top - 80, // Adjust for fixed header
                    },
                    500,
                    'linear'
                );
            }
            
            // Close mobile menu when clicking a link
            if ($('.nav-links').hasClass('active')) {
                $('.nav-links').removeClass('active');
            }
        }
    });

    // Function to check if element is in viewport
    function isInViewport(element) {
        const elementTop = $(element).offset().top;
        const elementBottom = elementTop + $(element).outerHeight();
        const viewportTop = $(window).scrollTop();
        const viewportBottom = viewportTop + $(window).height();

        // Check if element is at least partly visible
        return elementBottom > viewportTop && elementTop < viewportBottom;
    }

    // Scroll animations
    function checkScrollAnimations() {
        $('.fade-in, .slide-in-left, .slide-in-right, .zoom-in').each(function() {
            if (isInViewport(this)) {
                $(this).addClass('visible');
            }
        });
    }

    // Run on load and scroll
    checkScrollAnimations();
    $(window).on('scroll', checkScrollAnimations);

    // Header scroll effect (maintaining your original logic)
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('header').css('background-color', 'black'); // Or your chosen color for scrolled state
        } else {
            $('header').css('background-color', 'black'); // Or your chosen default color
        }
    });

    // Transformation Slider, Stats Counters, and Ripple Effect are not directly
    // relevant to the contact section, but if they were on the same page,
    // ensure their respective elements are present in your HTML for the JS to work.
    // I'm keeping them commented out for clarity as per the prompt focusing on contact.

    // // Transformation Slider (if applicable on this page)
    // let currentSlide = 0;
    // const slides = $('.slide');
    // const dots = $('.slider-dot');

    // function showSlide(index) {
    //     slides.css('transform', `translateX(-${index * 100}%)`);
    //     dots.removeClass('active');
    //     dots.eq(index).addClass('active');
    //     currentSlide = index;
    // }

    // if (slides.length && dots.length) { // Only run if slider elements exist
    //     dots.click(function() {
    //         showSlide($(this).index());
    //     });

    //     setInterval(() => {
    //         currentSlide = (currentSlide + 1) % slides.length;
    //         showSlide(currentSlide);
    //     }, 5000);
    // }

    // // Animate stats counters (if applicable on this page)
    // $('.stat-number').each(function() {
    //     const $this = $(this);
    //     if (isInViewport($this)) { // Trigger animation when in view
    //         $this.prop('Counter', 0).animate({
    //             Counter: $this.data('count')
    //         }, {
    //             duration: 2000,
    //             easing: 'swing',
    //             step: function(now) {
    //                 if ($this.data('count') >= 1000) {
    //                     $this.text(Math.ceil(now).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
    //                 } else {
    //                     $this.text(Math.ceil(now));
    //                 }
    //             }
    //         });
    //     }
    // });

    // // Animate package cards (if applicable on this page)
    // function animateCards() {
    //     $('.package-card').each(function() {
    //         if (isInViewport(this)) {
    //             $(this).addClass('visible');
    //         }
    //     });
    // }
    // animateCards();
    // $(window).scroll(animateCards);

    // // Add hover effect delay for a smoother feel (if applicable on this page)
    // $('.package-card').hover(
    //     function() { $(this).css('transition-delay', '0s'); },
    //     function() { $(this).css('transition-delay', '0.1s'); }
    // );

    // // Add ripple effect to buttons (if applicable on this page)
    // $('.card-button').click(function(e) {
    //     $('.ripple').remove();
    //     const posX = $(this).offset().left;
    //     const posY = $(this).offset().top;
    //     const buttonWidth = $(this).width();
    //     const buttonHeight = $(this).height();
    //     $(this).prepend('<span class="ripple"></span>');
    //     $('.ripple').css({
    //         'width': buttonWidth,
    //         'height': buttonHeight,
    //         'top': e.pageY - posY - buttonHeight/2,
    //         'left': e.pageX - posX - buttonWidth/2
    //     }).addClass('ripple-effect');
    //     setTimeout(function() { $('.ripple').remove(); }, 1000);
    // });

    // Contact Form Submission (Example - you'll need backend for actual sending)
    $('.contact-form').on('submit', function(e) {
        e.preventDefault(); // Prevent default form submission

        // You would typically send this data to a server using AJAX
        // For demonstration, we'll just log it and show a success message
        const formData = {
            name: $('#name').val(),
            email: $('#email').val(),
            subject: $('#subject').val(),
            message: $('#message').val()
        };
        console.log('Form Submitted:', formData);

        // Basic validation and success message
        if (formData.name && formData.email && formData.message) {
            alert('Thank you for your message, ' + formData.name + '! We will get back to you shortly.');
            // Clear the form
            $('.contact-form')[0].reset();
        } else {
            alert('Please fill in all required fields.');
        }
    });
});

// JavaScript for the about-content-2 animations (retained from your original code)
document.addEventListener('DOMContentLoaded', function() {
    function isInViewportNative(element) { // Using native JS for this specific function
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.75 &&
            rect.bottom >= 0
        );
    }
    
    function checkAboutVisibility() {
        const aboutSection = document.querySelector('.about-content-2');
        if (aboutSection && isInViewportNative(aboutSection)) {
            const zoomIn = aboutSection.querySelector('.zoom-in');
            const slideIn = aboutSection.querySelector('.slide-in-right');
            
            if (zoomIn) zoomIn.classList.add('visible');
            if (slideIn) slideIn.classList.add('visible');
            
            window.removeEventListener('scroll', checkAboutVisibility);
        }
    }
    
    checkAboutVisibility();
    window.addEventListener('scroll', checkAboutVisibility);
    
    window.addEventListener('scroll', function() {
        const aboutImg = document.querySelector('.about-content-2 .about-img');
        if (aboutImg && isInViewportNative(aboutImg)) {
            const scrollPosition = window.pageYOffset;
            aboutImg.style.transform = `translateY(${scrollPosition * 0.05}px)`;
        }
    });
});