let firstCard = 10;
let secondCard = 7;
let sum = firstCard + secondCard + 8;
let hasBlackJack = false;
let isAlive = true;
let message = "";

var messageText = document.querySelector("message");
var sumText = document.querySelector("sumEl");

function startGame(){
    sumText.textContent += " " + sum; 
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
