
function openNav() {
    document.getElementById("sidenav").style.width = "270px";
    document.getElementById("main").style.marginLeft = "270px";
 }
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
 function closeNav() {
    document.getElementById("sidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}
htmlstocks = '<div id="stocksContainer"></div>';
htmlfunds = '<div id="fundsContainer"></div>';
htmlcrypto = '<div id="cryptoContainer"></div>';
htmlgreystock='<img src="./stock grey.svg"><h5>Stocks</h5>';
htmlgreyfund='<img src="./Mutual funds grey.svg"><h5>Mutual Funds</h5>';
htmlgreycrypto='<img src="./Bitcoin grey.svg"><h5>Cryptocurrency</h5>';
htmlbluestock='<img src="./stock in blue.svg"><h5>Stocks</h5>';
htmlbluefund='<img src="./Mutual funds blue.svg"><h5>Mutual Funds</h5>';
htmlbluecrypto='<img src="./Bitcoin blue.svg"><h5>Cryptocurrency</h5>';
const stocks = () =>{
    document.getElementById("container").innerHTML=htmlstocks;
    document.getElementById("stocklink").innerHTML=htmlbluestock;
    document.getElementById("fundlink").innerHTML=htmlgreyfund;
    document.getElementById("cryptolink").innerHTML=htmlgreycrypto;
    document.getElementById("fundlink").className="none";
    document.getElementById("stocklink").className="selected";
    document.getElementById("cryptolink").className="none";
}
const mutualfunds = () =>{
    document.getElementById("container").innerHTML=htmlfunds;
    document.getElementById("stocklink").innerHTML=htmlgreystock;
    document.getElementById("fundlink").innerHTML=htmlbluefund;
    document.getElementById("cryptolink").innerHTML=htmlgreycrypto;
    document.getElementById("fundlink").className="selected";
    document.getElementById("stocklink").className="none";
    document.getElementById("cryptolink").className="none";
}
const cryptocurrency = () =>{
    document.getElementById("container").innerHTML=htmlcrypto;
    document.getElementById("stocklink").innerHTML=htmlgreystock;
    document.getElementById("fundlink").innerHTML=htmlgreyfund;
    document.getElementById("cryptolink").innerHTML=htmlbluecrypto;
    document.getElementById("fundlink").className="none";
    document.getElementById("stocklink").className="none";
    document.getElementById("cryptolink").className="selected";
}