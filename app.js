const hamburgerIcon = document.querySelector('.hamburger_menu_icon');
const hamburgerMenu = document.querySelector('.hamburger_menu');
const hamburgerClose = document.querySelector('.hamburger_close_icon');

hamburgerIcon.addEventListener('click', () =>{
    hamburgerMenu.classList.add('active');
} );
hamburgerClose.addEventListener('click', () =>{
    hamburgerMenu.classList.remove('active');
} )