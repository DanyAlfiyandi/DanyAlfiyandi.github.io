const navSlide = () => {
    const burger = document.querySelector(".burger");
    const navLists = document.querySelector("nav");
    const navLinks = document.querySelectorAll('.nav ul li');

    burger.addEventListener("click", () => {
        navLists.classList.toggle("nav-active");
        burger.classList.toggle("toggle-burger");
    });

    // Animate Links
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 1s ease forwards ${index / 7 + 0.5}s`;
        }
    });
};

navSlide();

const scrollLinks = document.querySelectorAll('.nav ul li a');

scrollLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();

        const targetId = link.getAttribute('href').substring(1);
        const target = document.getElementById(targetId);
        const yOffset = -60; // Optional offset to adjust scroll position

        if (target) {
            const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;

            window.scrollTo({
                top: y,
                behavior: 'smooth'
            });
        }
    });
});

//clear form before unload 
window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName("form")) {
        form.reset();
    }
};

// Resume Link
const resumeLink = document.querySelector('.resume-link');

resumeLink.addEventListener('click', e => {
    e.preventDefault();

    // Replace 'resume.pdf' with the actual path to your resume
    window.open('resume.pdf', '_blank');
});