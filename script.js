
let firstCard = 10;
let secondCard = 7;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

const messageText = document.querySelector("#message");
const sumText = document.querySelector("#sum-el");
const cardText = document.querySelector("#cards-el");

function startGame(){
    sumText.textContent += " " + sum; 
    cardText.textContent += " " + firstCard + " " + secondCard;
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageText.textContent = "How good are you mate?"
}

function newCard(){
    console.log("Drawing a new card from the desk")
}
