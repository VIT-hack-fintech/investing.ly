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
document.querySelector('.hamburger').onclick = ()=>{
    document.querySelector('nav').classList.toggle('nav-active');
    document.querySelector('.modal').classList.add('mod-active');
}
document.querySelectorAll('.popact').forEach((e)=>{
    e.onclick = ()=>{
        document.querySelector('.modal').classList.add('mod-active');
        document.querySelector('.popup').classList.add('pop-active');
        document.querySelector('nav').classList.remove('nav-active');
    }

})
document.querySelector('.modal').onclick = ()=>{
    document.querySelector('nav').classList.remove('nav-active');
    document.querySelector('.modal').classList.remove('mod-active');
    document.querySelector('.popup').classList.remove('pop-active');
}
function parallax() {
    var s = document.querySelector(".landing");
  var yPos = 0 - window.pageYOffset/4;	
  s.style.top = 0 + yPos + "%";
}
window.addEventListener("scroll", function(){
	parallax();	
});
    document.querySelectorAll('.popup .control button')[0].addEventListener("click",()=>{document.querySelector('.form').style.transform = "translateX(0)";document.querySelector('.control-container span').style.transform="translateX(0%)"})
    document.querySelectorAll('.popup .control button')[1].addEventListener("click",()=>{document.querySelector('.form').style.transform = "translateX(-50%)";document.querySelector('.control-container span').style.transform="translateX(100%)"})
