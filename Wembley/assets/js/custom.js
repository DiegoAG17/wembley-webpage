jQuery(document).ready(function ($) {

    // Animated count-up for the homepage stats bar
    var statNumbers = document.querySelectorAll('.stat-number[data-target]');
    if (statNumbers.length && 'IntersectionObserver' in window) {
        var animateCount = function (el) {
            var target = parseInt(el.getAttribute('data-target'), 10);
            var prefix = el.getAttribute('data-prefix') || '';
            var suffix = el.getAttribute('data-suffix') || '';
            var duration = 1500;
            var startTime = null;
            function step(timestamp) {
                if (!startTime) startTime = timestamp;
                var progress = Math.min((timestamp - startTime) / duration, 1);
                var current = Math.floor(progress * target);
                el.textContent = prefix + current + suffix;
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                } else {
                    el.textContent = prefix + target + suffix;
                }
            }
            window.requestAnimationFrame(step);
        };
        var statObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    animateCount(entry.target);
                    statObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        statNumbers.forEach(function (el) { statObserver.observe(el); });
    }

    // Transparent-over-hero navbar on the homepage, solid once scrolled
    var $navbarEl = $('.navbar.navbar-inverse');
    if ($('#head:not(.secondary)').length) {
        $navbarEl.addClass('navbar-overlay');
        var toggleNavScrolled = function () {
            $navbarEl.toggleClass('nav-scrolled', $(window).scrollTop() > 60);
        };
        $(window).on('scroll', toggleNavScrolled);
        toggleNavScrolled();
    }

    //Set the carousel options
    $('#quote-carousel').carousel({
        pause: true,
        interval: 4000,
    });
    // fancybox
    $(".fancybox").fancybox();
    //isotope
    if ($('.isotopeWrapper').length) {
        var $container = $('.isotopeWrapper');
        var $resize = $('.isotopeWrapper').attr('id');
        // initialize isotope
        $container.isotope({
            itemSelector: '.isotopeItem',
            resizable: false, // disable normal resizing
            masonry: {
                columnWidth: $container.width() / $resize
            }
        });
        $("a[href='#top']").click(function () {
            $("html, body").animate({
                scrollTop: 0
            }, "slow");
            return false;
        });
        $('.navbar-inverse').on('click', 'li a', function () {
            $('.navbar-inverse .in').addClass('collapse').removeClass('in').css('height', '1px');
        });
        $('#filter a').click(function () {
            $('#filter a').removeClass('current');
            $(this).addClass('current');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 1000,
                    easing: 'easeOutQuart',
                    queue: false
                }
            });
            return false;
        });
        $(window).smartresize(function () {
            $container.isotope({
                // update columnWidth to a percentage of container width
                masonry: {
                    columnWidth: $container.width() / $resize
                }
            });
        });
    }

    // WhatsApp speech bubble: on mobile, auto-hide after a few seconds or on the first scroll/swipe
    var $waBubble = $('.whatsapp-bubble');
    if ($waBubble.length && window.matchMedia('(max-width: 767px)').matches) {
        var hideWaBubble = function () {
            $waBubble.addClass('whatsapp-bubble-hide');
        };
        var waAutoHideTimer = setTimeout(hideWaBubble, 5000);
        $(window).one('scroll touchmove', function () {
            clearTimeout(waAutoHideTimer);
            hideWaBubble();
        });
    }
});