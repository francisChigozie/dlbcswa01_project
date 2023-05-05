
// Load as soon as page opens
window.onload = hpPrice;
window.onload = Lenovaprice;

window.addEventListener('load', Lenovaprice)
document.addEventListener('load', hpPrice)

// Event Listner for lenova Laptop
document.querySelector(".refine").addEventListener('mouseover', extPrice)
document.querySelector(".refine02").addEventListener('mouseover', extPrice02)
document.querySelector(".refine03").addEventListener('mouseover', extPrice03)
document.querySelector(".refine04").addEventListener('mouseover', extPrice04)
// Event listener mouse out to normal price
document.querySelector(".refine").addEventListener('mouseout', Lenovaprice)
document.querySelector(".refine02").addEventListener('mouseout', Lenovaprice)
document.querySelector(".refine03").addEventListener('mouseout', Lenovaprice)
document.querySelector(".refine04").addEventListener('mouseout', Lenovaprice)
// Even Listener for Lenova Slim
document.querySelector(".refine").addEventListener('mouseover', hpPrice)
// Adding the initial prices on the landing page

//document.addEventListener('mouseover', extPrice)
// Data Resources
const articleData = [
   {"Name":"Lenova","Price":399.05,"ExtPrice":50.00},
   {"Name":"Lenova Slim","Price":450.00,"ExtPrice":100},
   {"Name":"Micro Soft","Price":350.00,"ExtPrice":150},
   {"Name":"ASUS","Price":434.90,"ExtPrice":65},
   {"Name":"Accer","Price":299.00,"ExtPrice":85},
   {"Name":"HP","Price":378.00,"ExtPrice":200}
];

// Update normal price tag for Lenova Laptop
function Lenovaprice(){
    document.querySelector(".lenova-price").textContent = `€ ${articleData[0].Price}`; 
 }
 // Update normal price tag for HP
 function hpPrice(){
    document.getElementById("addTo-cart").textContent = `€ ${articleData[0].Price + articleData[0].ExtPrice}`;
 }

// Update extra price
 function extPrice(){
    document.querySelector(".lenova-price").textContent = `€ ${articleData[0].Price + articleData[0].ExtPrice}`;
 }

 // Update extra price
 function extPriceHp(){
    document.querySelector(".lenova-price").textContent = `€ ${articleData[1].Price + articleData[1].ExtPrice}`;
 }

 // Update normal price tag Lenova Slim
function LenovaSlime(){
    document.querySelector(".lenova-price").textContent = `€ ${articleData[1].Price}`; 
 }
// Update extra price Lenova Slim
 function extPrice02(){
    document.querySelector(".lenova-price").textContent = `€ ${articleData[0].Price + articleData[1].ExtPrice}`;
   
 }

 function extPrice03(){
    document.querySelector(".lenova-price").textContent = `€ ${articleData[0].Price + articleData[2].ExtPrice}`;
 }

 function extPrice04(){
    document.querySelector(".lenova-price").textContent = `€ ${articleData[0].Price + articleData[5].ExtPrice}`;
 }
