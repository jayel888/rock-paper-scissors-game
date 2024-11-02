// get the elements
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const resultDiv = document.getElementById("result");

// get the computer choice
function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex]
}
// console.log(getComputerChoice())

// write the logic for the winner
function determineWinner(userChoice, getComputerChoice){
    if (userChoice === getComputerChoice){
        return "It's a tie";
    } else if (
        (userChoice === 'Rock' && getComputerChoice === 'Scissors') ||
        (userChoice === 'Paper' && getComputerChoice === 'Rock') ||
        (userChoice === 'Scissors' && getComputerChoice === 'Paper')
    ) {
        return "You win!";
    } else {
        return "Computer wins! :(";
    }
}
// listen to the button click events
rockButton.addEventListener('click', () => {
    const getComputerChoice = getComputerChoice()
    const result = determineWinner('Rock', getComputerChoice)
    resultDiv.textContent = `You chose Rock. Computer chose ${getComputerChoice}. ${result}`;
})

paperButton.addEventListener('click', () => {
    const getComputerChoice = getComputerChoice()
    const result = determineWinner('Paper', getComputerChoice)
    resultDiv.textContent = `You chose Paper. Computer chose ${getComputerChoice}. ${result}`;
})

scissorsButton.addEventListener('click', () => {
    const getComputerChoice = getComputerChoice()
    const result = determineWinner('Scissors', getComputerChoice)
    resultDiv.textContent = `You chose Rock. Computer chose ${getComputerChoice}. ${result}`;
})
