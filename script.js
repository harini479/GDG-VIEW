// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
        });
    });
});
// JavaScript for syncing vertical scroll to horizontal scroll
document.addEventListener("DOMContentLoaded", () => {
    const upcomingEvents = document.getElementById('upcoming-events');
    const pastEvents = document.getElementById('past-events');

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;

        // Translate vertical scroll to horizontal scroll
        if (upcomingEvents) {
            upcomingEvents.scrollLeft = scrollY;
        }
        if (pastEvents) {
            pastEvents.scrollLeft = scrollY;
        }
    });
});

