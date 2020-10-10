var x;
window.onload=()=>{
    x=window.innerWidth
    openNav();
    stocks();
}
function openNav() {
    if(x<600){
        document.getElementById("sidenav").style.width = "100%";
    }
    else{
        document.getElementById("sidenav").style.width = "270px";
        document.getElementById("main").style.marginLeft = "270px";
    }
    
}
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
 function closeNav() {
    if(x<600){
        document.getElementById("sidenav").style.width = "0";
    }
    else{   
        document.getElementById("sidenav").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
    }
}
htmlstockcard = '<div class="stockCard"><h2>.DAX</h2><p>DAX International</p><h3>3000000 USD</h3><h4>+6.53%</h4><h5>0.15</h5><svg width="275" height="67" viewBox="0 0 275 67" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 25.9568C7.29865 26.4594 20.7572 25.6552 32.2023 18.4172C46.5087 9.36965 43.3295 -0.683169 51.2775 4.34324C59.2254 9.36964 71.9422 47.5701 88.6329 46.5648C105.324 45.5595 118.835 38.5226 126.783 41.5384C134.731 44.5542 152.217 58.6282 162.549 58.1255C172.882 57.6229 182.419 60.6387 198.315 51.0886C214.211 41.5384 224.543 70.1889 238.85 64.1572C253.156 58.1255 254.746 46.5648 262.694 51.0886C269.052 54.7076 270.381 56.1623 272.5 57" stroke="#2B7FEB" stroke-width="4" stroke-linecap="round"/></svg></div>';
htmlfundcryptocard = '<div class="fundcryptoCard"><h2>.DAX</h2><p>DAX International</p><h3>Scheme code:</h3><h3>Purchased NAV:</h3><h3>Purchased units:</h3></div>';
htmlstocks = '<div id="stocksContainer" class="subcontainer"><h1>Stocks</h1><div class="inputDiv"><button onclick="goStock()">go//this button is for my refernce</button></div><h1>My Stocks</h1><div id="stockCardContainer" class="cardContainer"></div></div>';
htmlfunds = '<div id="fundsContainer" class="subcontainer"><h1>Mutual Funds</h1><div class="inputDiv"><button onclick="goFund()">go</button></div><h1>My Mutual Funds</h1><div id="fundCardContainer" class="cardContainer"></div></div>';
htmlcrypto = '<div id="cryptoContainer" class="subcontainer"><h1>Cryptocurrency</h1><div class="inputDiv"><button onclick="goCrypto()">go</button></div><h1>My Cryptocurrency</h1><div id="cryptoCardContainer" class="cardContainer"></div></div>';
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
    if(x<600){
        closeNav();
    }
}
const goStock = () =>{
    //card insetion take place when go button is clicked:
    for(i=0;i<30;i++)
    {
        document.getElementById("stockCardContainer").innerHTML+=htmlstockcard;
    }
}
const mutualfunds = () =>{
    document.getElementById("container").innerHTML=htmlfunds;
    document.getElementById("stocklink").innerHTML=htmlgreystock;
    document.getElementById("fundlink").innerHTML=htmlbluefund;
    document.getElementById("cryptolink").innerHTML=htmlgreycrypto;
    document.getElementById("fundlink").className="selected";
    document.getElementById("stocklink").className="none";
    document.getElementById("cryptolink").className="none";
    if(x<600){
        closeNav();
    }
    
}
const goFund = () =>{
    for(i=0;i<3;i++)
    {
        document.getElementById("fundCardContainer").innerHTML+=htmlfundcryptocard;
    }
}
const cryptocurrency = () =>{
    document.getElementById("container").innerHTML=htmlcrypto;
    document.getElementById("stocklink").innerHTML=htmlgreystock;
    document.getElementById("fundlink").innerHTML=htmlgreyfund;
    document.getElementById("cryptolink").innerHTML=htmlbluecrypto;
    document.getElementById("fundlink").className="none";
    document.getElementById("stocklink").className="none";
    document.getElementById("cryptolink").className="selected";
    if(x<600){
        closeNav();
    }
    
}
const goCrypto = () =>{
    for(i=0;i<3;i++)
    {
        document.getElementById("cryptoCardContainer").innerHTML+=htmlfundcryptocard;
    }
}