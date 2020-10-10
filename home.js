const playStocks = () =>{
    var x = document.getElementById("svgStocks").children;
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.animationPlayState="running";
    }
}
const pauseStocks = () =>{
    var x = document.getElementById("svgStocks").children;
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.animationPlayState="paused";
    }

}
const playFunds = () =>{
    document.getElementById("svgFunds").style.animationPlayState="running";
}
const pauseFunds = () =>{
    document.getElementById("svgFunds").style.animationPlayState="paused";
}
const playCrypto = () =>{
    document.getElementById("svgCrypto").style.animationPlayState="running";
}
const pauseCrypto = () =>{
    document.getElementById("svgCrypto").style.animationPlayState="paused";
}