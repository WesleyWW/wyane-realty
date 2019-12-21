//Carousel 
const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const prevBtn = document.querySelector('.carousel__button--left');
const nextBtn = document.querySelector('.carousel__button--right');
const carouselNav = document.querySelector('.carousel__nav');
const dots = Array.from(carouselNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

//arrange slide next to eachother on the track
const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
}
slides.forEach(setSlidePosition);

//functions for carousel buttons
const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}
const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
}

//when left arrow click, move slides to right
prevBtn.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = carouselNav.querySelector('.current-slide');
    const prevDot = currentDot.previousElementSibling;

    if(!prevSlide) return;
    moveToSlide(track, currentSlide, prevSlide);
    updateDots(currentDot, prevDot);
})

//when right arrow click, move slides to left
nextBtn.addEventListener('click', e => {
    const currentSlide = document.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = carouselNav.querySelector('.current-slide');
    const nextDot = currentDot.nextElementSibling;

    if(!nextSlide) return;
    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);
});

//when nav indicators clicked, move to slide
carouselNav.addEventListener('click', e => {
    const targetDot = e.target.closest('button');

    if(!targetDot) return;

    const currentSlide = track.querySelector('.current-slide');
    const currentDot = carouselNav.querySelector('.current-slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
})

//Menu Button Toggle
const menuBtn = document.querySelector('.menu-btn');
const lines = menuBtn.querySelectorAll('.btn-line');
const backdrop = document.querySelector('.nav__backdrop');
const navMenu = document.querySelector('.nav__menu');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);
backdrop.addEventListener('click', toggleMenu);

function toggleMenu() {
    if(!showMenu) {
        menuBtn.classList.add('close');
        lines.forEach(line => line.classList.add('close'));
        backdrop.classList.add('show');
        navMenu.classList.add('show');
        //set menu state to show
        showMenu = true;
    } else {
        menuBtn.classList.remove('close');
        lines.forEach(line => line.classList.remove('close'));
        backdrop.classList.remove('show');
        navMenu.classList.remove('show');
        //set menu state to show
        showMenu = false;
    }
}