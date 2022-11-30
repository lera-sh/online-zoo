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
