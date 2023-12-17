

document.addEventListener('DOMContentLoaded', function () {
    // do something

    console.log('DOM fully loaded and parsed');
    window.addEventListener('load', function () {
        // do something

        gsap.to(".greensock", {
            duration: 2,
            x: 600,
            y: 200,
            scale: 2,
            rotation: 360,
            delay: 1,
            stagger: 1,
            // ease: "elastic",
            scrub: true,
        });
        })


}
);

// Path: assets/js/script.js