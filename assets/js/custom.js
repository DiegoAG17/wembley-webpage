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