const playStocks = () =>{
    var x = document.getElementById("svgStocks").getElementsByClassName("grow");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.animation="bargrow 0.7s ease-out 2 alternate backwards";
    }
    var x = document.getElementById("svgStocks").getElementsByClassName("shrink");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.animation="barshrink 0.7s ease-out 2 alternate backwards";
    }
    var x = document.getElementById("svgStocks").getElementsByClassName("grow2");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.animation="bargrow2 0.7s ease-out 2 alternate backwards";
    }
}
const pauseStocks = () =>{
    var x = document.getElementById("svgStocks").children;
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.animation="none";
    }
}
const playFunds = () =>{
    document.getElementById("svgFunds").style.animation="wiggle 1s linear 1 normal backwards";
    
}
const pauseFunds = () =>{
    document.getElementById("svgFunds").style.animation="none";
}
const playCrypto = () =>{
    document.getElementById("svgCrypto").style.animation="bounce 1s linear 1 normal backwards";
}
const pauseCrypto = () =>{
    document.getElementById("svgCrypto").style.animation="none";
}