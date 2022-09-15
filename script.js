const messageText = document.querySelector("#message");
const sumText = document.querySelector("#sum-el");
const cardText = document.querySelector("#cards-el");
const playerEarn = document.querySelector("#earnings");


let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

let player = {
    name: "Bets",
    chips: "150"
}

playerEarn.textContent = player.name + ": $" + player.chips; 

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber > 10) {
        return 10;
    }else if(randomNumber === 1){ 
        return 11;
    }else {
        return randomNumber;
    }
}

function startGame(){
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

function renderGame(){
    cardText.textContent = "Cards: ";

    for (let i = 0; i < cards.length; i++) {
        cardText.textContent += cards[i] + " ";
    }

    sumText.textContent ="Sum: " + sum; 

    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "You've got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
        blackJack.style.display = "unset";
    }
    messageText.textContent = message;
}

function newCard(){
    let card = getRandomCard();
    if (isAlive === true && hasBlackJack === false) {
        sum += card;
        cards.push(card);
        renderGame();
    }
}
