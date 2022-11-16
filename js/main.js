// ToDo: Blackjack Game 

// * Global Variables 
let messageDisplayed = document.getElementById("message"); 
let cardsDrawn = document.getElementById("cards-drawn"); 
let sumOfCards = document.getElementById("sum"); 
let playerInfo = document.getElementById("player-info"); 
let message = ""; 
let gameIsAlive = false; // creating a state for the game 
let hasBlackjack = false; // creating a state for the game 
let cards = []; 
let sum = 0; 
let player = {
    name: "Player", 
    chips: 200 
}; 

// * Player Info 
playerInfo.textContent = player.name + ": $" + player.chips 

// * Get Random Number Function 
function getRandomNumber() {
    let randomNumber = Math.floor( Math.random() * 13 ) + 1  // any number from 1-13 

    if ( randomNumber === 1 ) {
        // A(1) -> 11 
        return 11 
    } else if ( randomNumber > 10 ) {
        // J(11), Q(12), K(13) -> 10 
        return 10 
    } else {
        return randomNumber 
    }
} 

// * Start Game Function 
function startGame() {
    gameIsAlive = true 

    firstCard = getRandomNumber() 
    secondCard = getRandomNumber() 
    cards = [ firstCard, secondCard ] 
    
    sum = firstCard + secondCard 

    renderGame() 
} 

// * Render Game Function 
function renderGame() {
    // initial display on selected p element 
    cardsDrawn.textContent = "Cards: "     
    // loops through the cards array, renders all cards and adds them to be displayed in the selected p element 
    for ( let i = 0; i < cards.length; i++ ) {
        cardsDrawn.textContent += cards[i] + " " 
    } 

    // display sum of cards in selected p element 
    sumOfCards.textContent = "Sum: " + sum 

    // message to be displayed based on condition 
    if ( sum < 21 ) {
        message = "Do you want to draw a new card?" 

    } else if ( sum === 21 ) {
        message = "You've got Blackjack!" 

        hasBlackjack = true 
        
    } else if ( sum > 21 ) {
        message = "You're out of the game!" 

        gameIsAlive = false 
    } 
    // display message in selected p element 
    messageDisplayed.textContent = message 
} 

// * New Card Function 
function drawNewCard() {
    // draw new card based on game status 
    if ( gameIsAlive === true && hasBlackjack === false ) {
        let newCard = getRandomNumber(); 
        sum += newCard 
        cards.push( newCard ) 
    } 
    
    renderGame() 
    console.log(cards) 
} 