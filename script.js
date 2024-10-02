
    // Example: Scroll smoothly to sections
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

    document.addEventListener('DOMContentLoaded', function () {
        // Check if the user has already accepted cookies
        if (!localStorage.getItem('cookieConsent')) {
            // Create cookie consent banner
            const cookieBanner = document.createElement('div');
            cookieBanner.id = 'cookie-banner';
            cookieBanner.innerHTML = `
            <p>We use cookies to ensure you get the best experience on our website. 
            <button id="accept-cookies">Accept</button></p>`;
            document.body.appendChild(cookieBanner);

            // Handle accept button click
            document.getElementById('accept-cookies').addEventListener('click', function () {
                localStorage.setItem('cookieConsent', 'true');
                document.getElementById('cookie-banner').style.display = 'none';
            });
        }
    });
