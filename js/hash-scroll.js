// Optional advanced scroll handling
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll to target section
    function scrollToTarget() {
        const hash = window.location.hash;
        if (hash) {
            const target = document.querySelector(hash);
            if (target) {
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = targetPosition - 80; // Header height offset

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    }

    // Initial scroll
    scrollToTarget();

    // Handle browser back/forward navigation
    window.addEventListener('hashchange', scrollToTarget);
});
