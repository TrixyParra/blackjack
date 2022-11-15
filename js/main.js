// ToDo: Blackjack Game 

// * Global Variables 
let gameisAlive = false; 
let hasBlackjack = false; 
let messageDisplayed = document.getElementById("message"); 
let cardsDrawn = document.getElementById("cards-drawn"); 
let sumOfCards = document.getElementById("sum"); 
let playerInfo = document.getElementById("player-info"); 
let player = {
    name: "Player", 
    chips: 200 
}; 
let message = ""; 
let cards = []; 
let  sum = 0; 

// * Player Info 
playerInfo.textContent = player.name + ": $" + player.chips 

// * Get Random Number Function 

// * Start Game Function 

// * Render game Function 

// * New Card Function 