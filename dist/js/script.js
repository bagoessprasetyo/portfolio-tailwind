// Sticky Navbar
window.onscroll = function(){
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const toTop = document.querySelector('#toTop');

    if(window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
    }else{
        header.classList.remove('navbar-fixed');
        toTop.classList.remove('flex');
        toTop.classList.add('hidden');
    }
}

// Hamburger
const hamburger = document.querySelector('#hamburger');
const nav = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function (){
    hamburger.classList.toggle('hamburger-active');
    nav.classList.toggle('hidden');
});

window.addEventListener('click', function (e){
    if(e.target != hamburger && e.target.parentNode != hamburger){
        hamburger.classList.remove('hamburger-active');
        nav.classList.add('hidden');
    }
});

//Darkmode Toggle
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function (){
    darkToggle.checked ? html.classList.add('dark') : html.classList.remove('dark');
});