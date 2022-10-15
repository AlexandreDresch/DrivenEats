function selectPrincipalMeal(foodName) {
    const meal = document.querySelector('.food-container');
    meal.classList.toggle('food-container-selected');

    const mealPrice = document.querySelector('.price-container img');
    mealPrice.classList.toggle('verified');
    mealPrice.classList.toggle('unverified');
}   

function confirmOrder() {
    const button = document.querySelector('.footer-container');
    button.classList.add('footer-container-selected');
    button.innerHTML = 'Fechar pedido';
}