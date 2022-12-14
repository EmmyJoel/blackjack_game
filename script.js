const messageText = document.querySelector("#message");
const sumText = document.querySelector("#sum-el");
const cardText = document.querySelector("#cards-el");
const playerEarn = document.querySelector("#earnings");
const gameBox = document.querySelector(".game-box");
const ruleBox = document.querySelector(".game-rules");
const blackJack = document.querySelector(".black-jack");
const restartBtn = document.querySelector("#restart");


let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "Want to play a round?";

let player = {
    name: "Bets",
    chips: "10"
}

playerEarn.textContent = player.name + ": $" + player.chips; 

function continueBtn(){
    ruleBox.style.display = "none";
    gameBox.style.opacity = "1";

}

function restartGame(){
    window.location.reload();
}

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
    hasBlackJack = false;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    messageText.style.color = "white";
    messageText.textContent = message;
    renderGame();
}

function renderGame(){
    messageText.textContent = message;

    cardText.textContent = "Cards: ";

    for (let i = 0; i < cards.length; i++) {
        cardText.textContent += cards[i] + " ";
    }

    sumText.textContent ="Sum: " + sum; 

    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "You've got Blackjack!";
        messageText.style.color = "yellow";
        blackJack.style.display = "block";
        restartBtn.style.display = "block";
        gameBox.style.opacity = "0";
        hasBlackJack = true;
    }else{
        messageText.textContent = "You're out of the game!";
        messageText.style.color = "red";
        isAlive = false;
    }
}

function newCard(){
    playerEarn.textContent = player.name + ": $" + player.chips; 

        for (let i = 20; i < player.chips.length; i++){
            playerEarn.textContent += + 50;
        }
    renderGame();
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard();
        sum += card;
        cards.push(card);
    }
}
