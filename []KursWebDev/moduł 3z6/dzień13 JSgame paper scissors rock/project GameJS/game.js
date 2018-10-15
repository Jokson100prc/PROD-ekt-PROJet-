// Zobacz gotowy projekt: https://websamuraj.pl/examples/js/projekt7/

const hands = document.querySelectorAll('img');
const paper = document.querySelector('img[data-option="paper"]');
const rock = document.querySelector('img[data-option="rock"]');
const scissors = document.querySelector('img[data-option="scissors"]');
const startBtn = document.querySelector('.start');
const scores = document.querySelector('panel-left');
const stats = document.querySelector('panel-right');


const game = {
    playerHand: "",
    aiHand: "",
};

scorePanel = {
    numberOfGames: 0,
    playerWins: 0,
    aiWins: 0,
    draws: 0
}


// Player choice
function gameChoose() {
    game.playerHand = this.dataset.option;
    hands.forEach(hand => hand.style.boxShadow = "");
    this.style.boxShadow = "0 0 0 4px rgb(255, 187, 0)";

}
hands.forEach(hand => hand.addEventListener('click', gameChoose))

// Ai choice
function aiChoice() {
    const aiHandChoice = hands[Math.floor(Math.random() * 3)].dataset.option;
    return aiHandChoice;
};

function startGame() {
    if (!game.playerHand) {
        return alert('Choose a hand!!!')
    };
    game.aiHand = aiChoice();
    const theWinnerIs = checkResult(game.playerHand, game.aiHand);
    summaryAll(theWinnerIs, game.playerHand, game.aiHand)
    endGame();
}
startBtn.addEventListener('click', startGame);

// who win?
function checkResult(player, ai) {
    if (player === ai) {
        return 'draw'
    } else if (ai === "scissors" && player === "paper" || ai === "paper" && player === "rock" || ai === "rock" && player === "scissors") {
        return 'ai'
    } else {
        return 'You'
    };
}

// summary
function summaryAll(winner, player, ai) {
    document.querySelector('[data-summary="your-choice"]').textContent = player;
    document.querySelector('[data-summary="ai-choice"]').textContent = ai;
    document.querySelector('.numbers span').textContent = ++scorePanel.numberOfGames;
    if (winner === "You") {
        document.querySelector('[data-summary="who-win"]').textContent = ' User Wins!'
        document.querySelector('[data-summary="who-win"]').style.color = "rgb(136, 255, 0)";
        document.querySelector('.humanWins span').textContent = ++scorePanel.playerWins;
    } else if (winner === "ai") {
        document.querySelector('[data-summary="who-win"]').textContent = ' Computer Wins!'
        document.querySelector('[data-summary="who-win"]').style.color = "rgb(136, 12, 12)";
        document.querySelector('.computerWins span').textContent = ++scorePanel.aiWins;
    } else if (winner === "draw") {
        document.querySelector('[data-summary="who-win"]').textContent = ' Dead-Heat!'
        document.querySelector('[data-summary="who-win"]').style.color = "rgb(110, 110, 110)";
        document.querySelector('.draws span').textContent = ++scorePanel.draws;
    }
}

function endGame() {
    document.querySelector(`[data-option="${game.playerHand}"]`).style.boxShadow = '';
    game.playerHand = '';
    game.aiHand = '';
}

//-----------another option if---------
//if(player===ai){console.log('Dead-heat!')};if(player==="scissors"){if(ai ==="paper"){console.log(' You!')}}if(player==="paper"){if(ai==="rock"){console.log(' You!')}}if(player==="rock"){if(ai==="scissors"){console.log(' You!')}}if(ai==="scissors"){if(player==="paper"){console.log('Computer!')}}if(ai==="paper"){if(player==="rock"){console.log('Computer!')}}if(ai==="rock"){if(player==="scissors"){console.log('Computer!')}}
//----------end-----------