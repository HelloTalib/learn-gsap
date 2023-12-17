

document.addEventListener('DOMContentLoaded', function () {
    // do something

    console.log('DOM fully loaded and parsed');
    window.addEventListener('load', function () {
        // do something

        gsap.to(".greensock", {
            duration: 2,
            x: 600,
            y: 250,
            scale: 3,
            rotation: 360,
            delay: 1
        });
        })


}
);

// Path: assets/js/script.js