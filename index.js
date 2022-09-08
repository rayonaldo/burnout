const nav = document.querySelector('.nav');
const toggle = document.querySelector('.nav-toggle');

toggle.onclick = () =>{
    nav.classList.toggle('show-menu')
}

const navLink =  document.querySelectorAll('.nav-link');
function linkAction() {
    const navMenu = document.querySelector('.nav');
    nav.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

const linkColor = document.querySelectorAll('.nav-link');
function colorLink(){
    if(colorLink){
        linkColor.forEach(l => l.classList.remove('active'));
        this.classList.add('active')
    }
}
linkColor.forEach(l => l.addEventListener('click', colorLink))

// swiper section
var swiper = new Swiper(".home-slider", {
    loop: true,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
       el: ".swiper-pagination",
       clickable: true,
    },
    
  });