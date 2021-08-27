function rockPaperScissors(userChose) {
    var userChoice = userChose.id;
    var options = ['rock', 'paper', 'scissors'];
    var computerChoice = options[Math.floor(Math.random() * options.length)];

    var theGameScores = gameScores(userChoice, computerChoice);
    var theGameResults = gameResults(theGameScores);

    gameUI(userChoice, computerChoice, theGameResults);
}

function gameScores(aUserChoice, aComputerChoice) {
    var possibleOutcomes = {
        'rock': { 'rock': 0.5, 'paper': 0, 'scissors': 1 },
        'paper': { 'rock': 1, 'paper': 0.5, 'scissors': 0 },
        'scissors': { 'rock': 0, 'paper': 1, 'scissors': 0.5 }
    };

    var userScore = possibleOutcomes[aUserChoice][aComputerChoice];

    return userScore;
}

function gameResults(userScore) {
    if (userScore === 1) {
        return 'You Won!';
    } else if (userScore === 0.5) {
        return 'It\'s a Tie!';
    } else if (userScore === 0) {
        return 'You Lost!';
    }
}

function gameUI(userChoiceUI, computerChoiceUI, gameResultsUI) {
    var availableButtons = {
        'rock' : document.getElementById('rock'),
        'paper' : document.getElementById('paper'),
        'scissors' : document.getElementById('scissors'),
    }

    //Remove the current buttons as soon as the user makes a choice
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    //Show User and Computer Choices and the game result message
    var userChose = document.createElement('p');
    userChose.innerHTML = '<p> You chose <b>' + availableButtons[userChoiceUI].id + '</b></p>';

    var computerChose = document.createElement('p');
    computerChose.innerHTML = '<p> Computer chose <b>' + availableButtons[computerChoiceUI].id + '</b></p>';

    var message = document.createElement('p');
    message.innerHTML = '<p> <b>' + gameResultsUI + '</b></p';

    document.getElementById('image-flex').appendChild(userChose);
    document.getElementById('image-flex').appendChild(computerChose);
    document.getElementById('image-flex').appendChild(message);
}