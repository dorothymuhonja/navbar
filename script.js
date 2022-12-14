const navbarBtn = document.querySelector('.navbar__btn');
const navbarLinks = document.querySelector('.navbar__links');

navbarBtn.addEventListener('click', function() {
    navbarLinks.classList.contains('navbar__collaspe')
    
    navbarLinks.classList.toggle('navbar__collapse')
    navbarBtn.classList.toggle('change')
    
})