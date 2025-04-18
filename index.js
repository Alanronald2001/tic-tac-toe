const button = document.querySelectorAll("button");
const result = document.getElementById("result");
const humanPoints = document.getElementById("human-score");
const computerPoints = document.getElementById("computer-score");

let humanScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3); // Generates 0, 1, or 2
  if (randomNumber === 0) return "rock";
  if (randomNumber === 1) return "paper";
  return "scissors";
};

const reset = () => {
  humanScore = 0;
  computerScore = 0;
  result.innerText = "";
};

const playRound = (humanChoice) => {
  const computerChoice = getComputerChoice();
  if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore += 1;
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    computerScore += 1;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore += 1;
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    computerScore += 1;
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    computerScore += 1;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    humanScore += 1;
  }
  humanPoints.innerText = humanScore;
  computerPoints.innerText = computerScore;
  if (humanScore >= 5) {
    reset();
    result.innerText = "Human Wins";
  }
  if (computerScore >= 5) {
    reset();
    result.innerText = "Computer Wins";
  }
};

button.forEach((btn) => {
  const option = btn.getAttribute("data-option");
  btn.addEventListener("click", () => playRound(option));
});
