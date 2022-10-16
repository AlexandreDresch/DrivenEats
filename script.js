let principalMeal;
let principalMealPrice;
let drink;
let drinkPrice;
let dessert;
let dessertPrice;

let orderFinalPrice;

let userName;
let userAddress;

function selectPrincipalMeal(foodName, icon) {
    const principalMealSelected = document.querySelector(".food-container-selected");
    const emojiSelected = document.querySelector(`${'#' + icon}`);

    if (principalMealSelected !== null) {
        principalMealSelected.classList.remove("food-container-selected");
        //emojiSelected.classList.add("icon-unverified");
    }

    foodName.classList.add("food-container-selected");
    // if (emojiSelected.classList.contains('icon-unverified')) {
    //     emojiSelected.classList.remove("icon-unverified");
    // }
    //emojiSelected.classList.add("icon-unverified");
    principalMeal = foodName.querySelector(".food-name").innerHTML;
    principalMealPrice = foodName.querySelector(".food-price").innerHTML;

    checkOrder();
}   

function selectDrink(drinkName, icon) {
    const drinkSelected = document.querySelector('.drink-container-selected');
    const emojiSelected = document.querySelector(`${'#' + icon}`);    

    if ( drinkSelected !== null) {
        drinkSelected.classList.remove("drink-container-selected");
        //emojiSelected.classList.add("icon-unverified");
    }

    drinkName.classList.add('drink-container-selected');
   
    drink = drinkName.querySelector(".food-name").innerHTML;
    drinkPrice = drinkName.querySelector(".food-price").innerHTML;
    //emojiSelected.classList.remove("icon-unverified");

    checkOrder();
} 

function selectDessert(dessertName, icon) {
    const emojiSelected = document.querySelector(`${'#' + icon}`);
    const dessertSelected = document.querySelector('.dessert-container-selected');

    if ( dessertSelected !== null) {
        dessertSelected.classList.remove("dessert-container-selected");
        //emojiSelected.classList.add("icon-unverified");
    }

    dessertName.classList.add('dessert-container-selected');

    dessert = dessertName.querySelector(".food-name").innerHTML;
    dessertPrice = dessertName.querySelector(".food-price").innerHTML;
    //emojiSelected.classList.remove("icon-unverified");

    checkOrder();
} 

let confirmButton = document.querySelector("button").disabled = true;

function checkOrder() {
    const button = document.querySelector('.footer-container');
 
    if(principalMeal !== undefined && drink !== undefined && dessert!== undefined) {
        button.classList.add('footer-container-selected');
        button.innerHTML = 'Fechar pedido';
        document.querySelector("button").disabled = false;
    }
}

function formatPrices() {    
    principalMealPrice = principalMealPrice.replace("R$ ","");
    principalMealPrice = principalMealPrice.replace("," , ".");
    drinkPrice = drinkPrice.replace("R$ ","");
    drinkPrice = drinkPrice.replace("," , ".");
    dessertPrice = dessertPrice.replace("R$ ","");  
    dessertPrice = dessertPrice.replace("," , ".");

    orderFinalPrice = +principalMealPrice + +drinkPrice + +dessertPrice;     
}


function confirmOrder() {
    userName= prompt('Qual o seu nome?')
    userAddress= prompt('Qual o seu endereço?')
    //console.log(userName, userAddress);

    formatPrices();

    sendMessage();
}

function sendMessage() {
    const finalMessage = 
        `Olá, gostaria de fazer o pedido: \n
        - Prato: ${principalMeal} \n
        - Bebida: ${drink} \n
        - Sobremesa: ${dessert} \n
        Total: R$ ${orderFinalPrice.toFixed(2)} \n
        \n
        Nome: ${userName} \n
        Endereço: ${userAddress}`;

    const encoded1 = encodeURIComponent(finalMessage);
    window.open("https://wa.me/5555999999999?text=" + encoded1, '_blank');
}