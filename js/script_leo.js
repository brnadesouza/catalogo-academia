// Intersection Observer for Reveal Animations
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    // Back to Top Visibility Toggle
    window.onscroll = function() {
        const btn = document.getElementById("backToTop");
        if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
            btn.classList.add("show");
        } else {
            btn.classList.remove("show");
        }
    };