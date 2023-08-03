const navbarE1 = document.querySelector('.nav-bar');

const bottonContainerE1 = document.querySelector('.bottom-container');



window.addEventListener('scroll',()=>{
    if(window.scrollY > bottonContainerE1.offsetTop - navbarE1.offsetHeight - 50){
        navbarE1.classList.add('active')
    }
    else{
        navbarE1.classList.remove('active')
    }
})