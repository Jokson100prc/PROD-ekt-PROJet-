const hands = document.querySelectorAll('img');
const startBtn = document.querySelector('button');

const game = {
    plHand: "",
    aiHand: "",
};

const stats = {
    nrOfGames: 0,
    plWins: 0,
    aiWins: 0,
    draws: 0,
};

const plChoice = (e) => {
    game.plHand = e.target.dataset.option;
    hands.forEach(hand => hand.style.boxShadow = "");
    e.target.style.boxShadow = "0 0 3px 3px rgb(255, 187, 0)";
};
hands.forEach(hand => hand.addEventListener('click', plChoice));

const aiChoice = () => {
    const aiX = hands[Math.floor(Math.random() * 3)].dataset.option;
    return aiX;
};

const startGame = () => {
    if (!game.plHand) {
        alert('You must choose a hand!');
    };
    game.aiHand = aiChoice();
    const checkWhoWon = winner(game.plHand, game.aiHand);
    summary(game.plHand, game.aiHand, checkWhoWon);
    theEnd();
}
startBtn.addEventListener('click', startGame);

const winner = (pl, ai) => {
    if (pl === ai) {
        return "draw"
    } else if (pl === "paper" && ai === "rock" || pl === "rock" && ai === "scissors" || pl === "scissors" && ai === "paper") {
        return "You"
    } else {
        return "ai"
    }
}

const summary = (pl, ai, winnerIs) => {
    document.querySelector('[data-summary="your-choice"]').textContent = pl;
    document.querySelector('[data-summary="ai-choice"]').textContent = ai;
    document.querySelector('.numbers span').textContent = ++stats.nrOfGames;
    if (winnerIs === "You") {
        document.querySelector('[data-summary="who-win"]').textContent = ' User Wins!'
        document.querySelector('[data-summary="who-win"]').style.color = "rgb(136, 255, 0)";
        document.querySelector('.humanWins span').textContent = ++stats.plWins;
    } else if (winnerIs === "ai") {
        document.querySelector('[data-summary="who-win"]').textContent = ' Computer Wins!'
        document.querySelector('[data-summary="who-win"]').style.color = "rgb(136, 12, 12)";
        document.querySelector('.computerWins span').textContent = ++stats.aiWins;
    } else if (winnerIs === "draw") {
        document.querySelector('[data-summary="who-win"]').textContent = ' Dead-Heat!'
        document.querySelector('[data-summary="who-win"]').style.color = "rgb(110, 110, 110)";
        document.querySelector('.draws span').textContent = ++stats.draws;
    };
};

const theEnd = () => {
    hands.forEach(hand => hand.style.boxShadow = "");
    game.aiHand = "";
    game.plHand = "";
};