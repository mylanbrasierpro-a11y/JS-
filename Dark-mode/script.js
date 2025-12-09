
const dark = document.querySelector('.dark') ; 
const btn = document.querySelector('.btn') ; 
    
btn.addEventListener('click',() => {
   const element = document.body;
   element.classList.toggle("dark");
})
