//Getting all dynamic UI elements
let gameResultsMessage = document.querySelector('#game-results-message');

let userScoreUI = document.querySelector('#user-score');
let dealerScoreUI = document.querySelector('#dealer-score');

let userCardsDiv = document.querySelector('#user-cards-div');
let dealerCardsDiv = document.querySelector('#dealer-cards-div');

let winsUI = document.querySelector('#wins');
let lossesUI = document.querySelector('#losses');
let drawsUI = document.querySelector('#draws');

//Adding event listeners and functions to game play buttons
document.querySelector('#hit').addEventListener('click', hit);
document.querySelector('#stand').addEventListener('click', stand);
document.querySelector('#deal').addEventListener('click', deal);

//Game sounds
let playSound = new Audio('assets/sounds/swish.m4a');
let winSound = new Audio('assets/sounds/cash.mp3');
let losseSound = new Audio('assets/sounds/aww.mp3');

//Initializing dealer and user scores
let userScore = 0;
let dealerScore = 0;

//Initializing wins, losses and draws variables
let winsCount = 0;
let lossesCount = 0;
let drawsCount = 0;

//Buttons states
let hitActive = true;
let standActive = false;
let dealActive = false;

//Cards
let cardsDeck = [
    '2C', '2D', '2H', '2S',
    '3C', '3D', '3H', '3S',
    '4C', '4D', '4H', '4S',
    '5C', '5D', '5H', '5S',
    '6C', '6D', '6H', '6S',
    '7C', '7D', '7H', '7S',
    '8C', '8D', '8H', '8S',
    '9C', '9D', '9H', '9S',
    '10C', '10D', '10H', '10S',
    'AC', 'AD', 'AH', 'AS',
    'JC', 'JD', 'JH', 'JS',
    'KC', 'KD', 'KH', 'KS',
    'QC', 'QD', 'QH', 'QS',
];

//Cards and their values
let cardsDeckValues = {
    '2C': 2, '2D': 2, '2H': 2, '2S': 2,
    '3C': 3, '3D': 3, '3H': 3, '3S': 3,
    '4C': 4, '4D': 4, '4H': 4, '4S': 4,
    '5C': 5, '5D': 5, '5H': 5, '5S': 5,
    '6C': 6, '6D': 6, '6H': 6, '6S': 6,
    '7C': 7, '7D': 7, '7H': 7, '7S': 7,
    '8C': 8, '8D': 8, '8H': 8, '8S': 8,
    '9C': 9, '9D': 9, '9H': 9, '9S': 9,
    '10C': 10, '10D': 10, '10H': 10, '10S': 10,
    'AC': [1, 11], 'AD': [1, 11], 'AH': [1, 11], 'AS': [1, 11],
    'JC': 10, 'JD': 10, 'JH': 10, 'JS': 10,
    'KC': 10, 'KD': 10, 'KH': 10, 'KS': 10,
    'QC': 10, 'QD': 10, 'QH': 10, 'QS': 10,
}


//Hit function for the user
function hit() {
    if (hitActive === true) {
        if (userScore < 21) {
            //Getting a random card from the deck
            let randomCard = cardsDeck[Math.floor(Math.random() * cardsDeck.length)];

            showRandomcard(randomCard, userCardsDiv);
            updateUserScoreValue(randomCard);
            showUserScore();
            playSound.play();

            standActive = true;
        }
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//Stand function for the dealer
async function stand() {
    while (dealerScore <= 18 && standActive === true) {
        if (standActive === true) {
            if (dealerScore < 21) {
                //Getting a random card from the deck
                let randomCard = cardsDeck[Math.floor(Math.random() * cardsDeck.length)];
    
                showRandomcard(randomCard, dealerCardsDiv);
                updateDealerScoreValue(randomCard);
                showDealerScore();
                playSound.play();
            }
    
            if (dealerScore >= 15 && userScore > 0) {
                standActive = false;
                if (standActive === false) {
                    dealActive = true;
                }
                gameResultsUI(gameResults());
            }
    
            hitActive = false;
        }
         await sleep(500);
    }
}

// Deal function to reset and restart the game
function deal() {
    if (dealActive === true) {
        //Removing all cards
        let userCards = userCardsDiv.querySelectorAll('img');
        let dealerCards = dealerCardsDiv.querySelectorAll('img');

        for (let i = 0; i < userCards.length; i++) {
            userCards[i].remove();
        }

        for (let i = 0; i < dealerCards.length; i++) {
            dealerCards[i].remove();

        }

        //Resetting scores
        userScore = 0;
        dealerScore = 0;

        showUserScore();
        showDealerScore();

        //Resetting game result message
        gameResultsMessage.textContent = 'Let\'s Play';
        gameResultsMessage.style.color = '#000';

        hitActive = true;
        standActive = false;
        dealActive = false;

    }
}

//Show random card that has been generated to the DOM
function showRandomcard(randomCardChoice, cardDiv) {
    let cardImage = document.createElement('img');
    cardImage.src = `assets/cards/${randomCardChoice}.png`;
    cardDiv.appendChild(cardImage);
}

//Update user's score
function updateUserScoreValue(randomCardValue) {
    if (randomCardValue[0] === 'A') {
        if (userScore + cardsDeckValues[randomCardValue][1] <= 21) {
            userScore += cardsDeckValues[randomCardValue][1];
        } else {
            userScore += cardsDeckValues[randomCardValue][0];
        }
    } else {
        userScore += cardsDeckValues[randomCardValue];
    }
    return userScore;
}

//Update dealer's score
function updateDealerScoreValue(randomCardValue) {
    if (randomCardValue[0] === 'A') {
        if (dealerScore + cardsDeckValues[randomCardValue][1] <= 21) {
            dealerScore += cardsDeckValues[randomCardValue][1];
        } else {
            dealerScore += cardsDeckValues[randomCardValue][0];
        }
    } else {
        dealerScore += cardsDeckValues[randomCardValue];
    }
    return dealerScore;
}

//Show user's score
function showUserScore() {
    if (userScore > 21) {
        userScoreUI.textContent = 'BUST!';
        userScoreUI.style.color = 'red'
    } else {
        userScoreUI.textContent = userScore;
        userScoreUI.style.color = 'white'
    }
}

//Show dealer's score
function showDealerScore() {
    if (dealerScore > 21) {
        dealerScoreUI.textContent = 'BUST!';
        dealerScoreUI.style.color = 'red'
    } else {
        dealerScoreUI.textContent = dealerScore;
        dealerScoreUI.style.color = 'white'
    }
}

//Finding game results
function gameResults() {
    let results;

    if (userScore <= 21 && (userScore > dealerScore || dealerScore > 21)) {
        winsCount += 1;
        results = 'You Won!';
    } else if (userScore === dealerScore && (userScore <= 21 && dealerScore <= 21)) {
        drawsCount += 1;
        results = 'Draw!'
    } else if (dealerScore <= 21 && (dealerScore > userScore || userScore > 21)) {
        lossesCount += 1;
        results = 'You Lost!'
    } else if (userScore === dealerScore && (userScore > 21 && dealerScore > 21)) {
        drawsCount += 1;
        results = 'Bust Draw!'
    } else if (userScore > 21 && dealerScore > 21) {
        drawsCount += 1;
        results = 'Double Bust!';
    }

    return results;
}

//Updating game results UI
function gameResultsUI(theResults) {
    if (theResults === 'You Won!') {
        gameResultsMessage.textContent = theResults;
        gameResultsMessage.style.color = '#088508';
        winsUI.textContent = winsCount;
        winSound.play();
    } else if (theResults === 'You Lost!') {
        gameResultsMessage.textContent = theResults;
        gameResultsMessage.style.color = 'red';
        lossesUI.textContent = lossesCount;
        losseSound.play();
    } else if (theResults === 'Draw!') {
        gameResultsMessage.textContent = theResults;
        gameResultsMessage.style.color = 'blue';
        drawsUI.textContent = drawsCount;
        winSound.play();
    } else {
        gameResultsMessage.textContent = theResults;
        gameResultsMessage.style.color = 'magenta';
        drawsUI.textContent = drawsCount;
        losseSound.play();
    }
}
