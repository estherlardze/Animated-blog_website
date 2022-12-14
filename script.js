$('.owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    dots: true,
    stagePadding: 0,
    responsiveBaseElement: 'body',
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        600: {
            items: 2,
            nav: false
        },
        1000: {
            items: 3,
            nav: false
        },
       
    },
});

AOS.init();

const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navLinks = document.getElementsByClassName('links')[0];
const signLinks = document.getElementsByClassName('sign')[0];

toggleButton.addEventListener('click', ()=>{
    navLinks.classList.toggle('active')
    signLinks.classList.toggle('active')
})