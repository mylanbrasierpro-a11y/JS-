const carre = document.querySelector('.carre') ; 
const btn = document.querySelector('.btn') ; 

btn.addEventListener('mouseenter',() => {
    carre.style.transform = "translate(200px)";
})
