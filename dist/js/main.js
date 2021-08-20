const header=document.querySelector('.main-header');

window.addEventListener('scroll',()=>{
    const scrollPos=window.scrollY;

    if (scrollPos > 560) {
        header.classList.add('scrolled');
        
    }
     else {
        header.classList.remove('scrolled');
        
    }

})