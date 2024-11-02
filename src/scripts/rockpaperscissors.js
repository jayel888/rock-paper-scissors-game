// get the elements
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const resultDiv = document.getElementById("result");
const scoreDiv = document.getElementById("score");

// Initialise the two variables to be 0
let userScore = 0;
let computerScore = 0;

// get the computer choice
function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex]
}
// console.log(getComputerChoice())

// write the logic for the winner
function determineWinner(userChoice, getComputerChoice){
    if (userChoice === getComputerChoice()){
        return "It's a tie";
    } else if (
        (userChoice === 'Rock' && getComputerChoice() === 'Scissors') ||
        (userChoice === 'Paper' && getComputerChoice() === 'Rock') ||
        (userChoice === 'Scissors' && getComputerChoice() === 'Paper')
    ) {
        userScore++;
        scoreDiv.textContent = `Your Score: ${userScore} | Computer Score: ${computerScore}`;
        return "You win!";
    } else {
        computerScore++;
        scoreDiv.textContent = `Your Score: ${userScore} | Computer Score: ${computerScore}`;
        return "Computer wins! :(";
    }
}
// listen to the button click events
rockButton.addEventListener('click', () => {
    const computerChoice = getComputerChoice()
    const result = determineWinner('Rock', getComputerChoice)
    resultDiv.textContent = `You chose Rock. Computer chose ${computerChoice}. ${result}`;
})

paperButton.addEventListener('click', () => {
    const computerChoice = getComputerChoice()
    const result = determineWinner('Paper', getComputerChoice)
    resultDiv.textContent = `You chose Paper. Computer chose ${computerChoice}. ${result}`;
})

scissorsButton.addEventListener('click', () => {
    const computerChoice = getComputerChoice()
    const result = determineWinner('Scissors', getComputerChoice)
    resultDiv.textContent = `You chose Rock. Computer chose ${computerChoice}. ${result}`;
})
