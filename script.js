$(document).ready(function() {
    // Mobile Navigation Toggle
    $('.burger').click(function() {
        $('.nav-links').toggleClass('active');
        $(this).toggleClass('toggle');
    });

    // Smooth scrolling for anchor links
    $('a[href^="#"]').on('click', function(event) {
        var target = $($(this).attr('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top - 70
            }, 1000);
        }
    });

    // Form submission handling
    $('.contact-form').submit(function(e) {
        e.preventDefault();
        // In a real application, you would send the form data to a server here
        alert('Thank you for your message! In a real application, this would be sent to our servers.');
        this.reset();
    });

    // Animation on scroll
    $(window).scroll(function() {
        $('.feature-card, .section').each(function() {
            var elementTop = $(this).offset().top;
            var elementBottom = elementTop + $(this).outerHeight();
            var viewportTop = $(window).scrollTop();
            var viewportBottom = viewportTop + $(window).height();

            if (elementBottom > viewportTop && elementTop < viewportBottom) {
                $(this).css('opacity', '1');
            }
        });
    });

    // Trigger scroll event on page load
    $(window).trigger('scroll');

    // Add hover effects to buttons
    $('.btn').hover(
        function() {
            $(this).css('transform', 'scale(1.05)');
        },
        function() {
            $(this).css('transform', 'scale(1)');
        }
    );

    // Add hover effects to contact items
    $('.contact-item').hover(
        function() {
            $(this).css('box-shadow', '0 15px 30px rgba(0, 0, 0, 0.15)');
        },
        function() {
            $(this).css('box-shadow', '0 5px 15px rgba(0, 0, 0, 0.05)');
        }
    );
});