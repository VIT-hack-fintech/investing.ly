navColor = false;
window.addEventListener("scroll",()=>{
    if( window.scrollY>25 && navColor===false ){
        navColor = true;
        document.querySelector("nav").style.backgroundColor = "rgb(147 194 255)";
        document.querySelector("nav").style.height = "9vh";
        document.querySelector("nav .hamburger").style.marginTop = "2vh";
    }
    else if(window.scrollY<=25 && navColor===true){
        navColor=false;
        document.querySelector("nav").style.backgroundColor = "transparent";
        document.querySelector("nav .hamburger").style.marginTop = "5vh";
        document.querySelector("nav").style.height = "15vh";
    }
})