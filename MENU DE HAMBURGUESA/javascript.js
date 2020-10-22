const d = document;
    function HamburgerMenu(){
    const $btn = d.getElementById("btn");
    d.addEventListener("click", (e) =>{
        if(e.target === btn || `${btn} *`){
            e.preventDefault();
            d.querySelector(".main-menu").classList.toggle("active");
        }
    })
    }
    d.addEventListener("DOMContentLoaded", HamburgerMenu);