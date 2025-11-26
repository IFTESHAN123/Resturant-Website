
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

    if(window.scroll > 0){

        navbar.classList.add("scroll-nav");
    }
    else{
        navbar.classList.remove("scroll-nav");
    }
})