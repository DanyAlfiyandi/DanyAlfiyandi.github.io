//toggle & responsive nav
const navSlide = () => {
    const burger = document.querySelector(".burger");
    const navLists = document.querySelector("nav");
    const nav = document.querySelector('.nav ul');
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

        const target = document.querySelector(link.getAttribute('href'));

        window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth'
        });
    });
});

//clear form before unload 
window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName("form")) {
        form.reset();
    }
};

