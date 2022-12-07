const list = document.querySelectorAll('.header-section li a')
const main = document.querySelector('.main')
const designer = document.querySelector('.designer-link')

list.forEach(item =>{
    item.addEventListener('mousedown', (e) =>{
        list.forEach(el=>{ el.classList.remove('highlighted'); });
        item.classList.add('highlighted')
    })
})

list.forEach(item =>{
    item.addEventListener('mouseup', (e) =>{
        item.classList.remove('highlighted');
        main.classList.add('highlighted');
    })
})

list.forEach(item =>{
    item.addEventListener('dragend', (e) =>{
        item.classList.remove('highlighted');
        main.classList.add('highlighted');
    })
})

list.forEach(item =>{
    designer.addEventListener('mousedown', (e) =>{
        list.forEach(el=>{ el.classList.remove('highlighted'); });
        designer.classList.add('highlighted')
    })
})

list.forEach(item =>{
    designer.addEventListener('mouseup', (e) =>{
        designer.classList.remove('highlighted');
        main.classList.add('highlighted');
    })
})

list.forEach(item =>{
    designer.addEventListener('dragend', (e) =>{
        designer.classList.remove('highlighted');
        main.classList.add('highlighted');
    })
})

const burgerMenu = document.querySelector('.burger-menu')
const menuContainer = document.querySelector('.menu-container')
const menuLogo = document.querySelector('.menu-logo-container')
const crossContainer = document.querySelector('.cross-container')
const menuList = document.querySelectorAll('.menu-list li a')

burgerMenu.addEventListener('click', () =>{
    menuContainer.classList.add('block')
})

menuLogo.addEventListener('click', () =>{
    menuContainer.classList.remove('block')
})

crossContainer.addEventListener('click', () =>{
    menuContainer.classList.remove('block')
})

menuList.forEach(item =>{
    item.addEventListener('click', (e) =>{
        menuContainer.classList.remove('block')
    })
})

const carousel = document.querySelector('.animal-container')
const carouselUp = document.querySelector('.carousel-up')
const carouselDown = document.querySelector('.carousel-down')
const firstCard = carousel.querySelectorAll('.animal-card')[0];
const arrows = document.querySelectorAll('.animal-arrow')

let firstCardWidth = firstCard.clientWidth + 20;
let slideUpIndex = 1;
let slideDownIndex = 1;

arrows.forEach(arrow => {
    arrow.addEventListener('click', () => {
        if(arrow.id == 'left-arr') {
            carouselUp.scrollLeft += -firstCardWidth
            plusUpSlides(-1)
        } else {
            carouselUp.scrollLeft += firstCardWidth
            plusUpSlides(1);
        }

        if(arrow.id == 'left-arr') {
            carouselDown.scrollLeft += -firstCardWidth
            plusDownSlides(-1)
        } else {
            carouselDown.scrollLeft += firstCardWidth
            plusDownSlides(1);
        }
        showUpSlides(slideUpIndex);
        showDownSlides(slideDownIndex);
    })
})

function plusUpSlides(n) {
    showUpSlides(slideUpIndex += n);
}

function plusDownSlides(n) {
    showDownSlides(slideDownIndex += n);
}

function showUpSlides(n) {
    let slides = document.querySelectorAll(".up-card");
    if (n > slides.length - 2) {slideUpIndex = 1}
    if (n < 1) {slideUpIndex = slides.length - 2}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideDownIndex - 1].style.display = "block"
    slides[slideDownIndex].style.display = "block"
    slides[slideDownIndex + 1].style.display = "block"
}

function showDownSlides(n) {
    let slides = document.querySelectorAll(".down-card");
    if (n > slides.length - 2) {slideDownIndex = 1}
    if (n < 1) {slideDownIndex = slides.length - 2}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideDownIndex - 1].style.display = "block"
    slides[slideDownIndex].style.display = "block"
    slides[slideDownIndex + 1].style.display = "block"
}

const slider = document.querySelector('input[type="range"]')
const comments = document.querySelector('.user-comments-container')

const mediaQuery = window.matchMedia('screen and (max-width: 1300px)')
let visibleCommentsCount

const toggleHiddenOnCommentsNodes = (nodes, offset = 0) => {
    const till = offset + visibleCommentsCount
    nodes.forEach((x, i) => {
        if (i >= offset && i < till) {
            x.classList.remove('hidden')

            return
        }
        x.classList.add('hidden')
    })
}

const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
        visibleCommentsCount = 3
    } else {
        visibleCommentsCount = 4
    }
    toggleHiddenOnCommentsNodes([...comments.children])
}

handleMediaQueryChange(mediaQuery)
mediaQuery.addEventListener('change', handleMediaQueryChange)

slider.addEventListener('input', event => {
    toggleHiddenOnCommentsNodes([...comments.children], event.target.value - 1)
})

const testimonials = document.querySelectorAll('.testimonials-border')
const media = window.matchMedia('screen and (max-width: 999px)')

const testimonialsMedia = media => {
    if (media.matches) {
        testimonials.forEach(item => {
            const popup = item.querySelector('.popup-comment')
            const popupCross = item.querySelector('.cross-container-testimonials')

            item.addEventListener('click', (e) => {
                popup.classList.add('flex')
            })

            popupCross.addEventListener('click', (e) => {
                e.stopPropagation()
                popup.classList.remove('flex')
            })
        })
    }
}

testimonialsMedia(media)
media.addEventListener('change', testimonialsMedia)

const footer_list = document.querySelectorAll('.footer-nav li a')

footer_list.forEach(item =>{
    item.addEventListener('mousedown', (e) =>{
        item.classList.add('highlighted')
    })
})

footer_list.forEach(item =>{
    item.addEventListener('mouseup', (e) =>{
        item.classList.remove('highlighted');
    })
})

footer_list.forEach(item =>{
    item.addEventListener('dragend', (e) =>{
        item.classList.remove('highlighted');
    })
})

const email = document.querySelector('.email-place')
const submit = document.querySelector('.submit-button')

submit.addEventListener('click', function() {
    email.classList.remove('mistaken');
    submit.classList.remove('mistaken');
    if (email.value === '') {
        email.classList.add('mistaken');
        submit.classList.add('mistaken');
    }
})
