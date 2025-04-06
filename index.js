const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3); // Generates 0, 1, or 2
  if (randomNumber === 0) return "rock";
  if (randomNumber === 1) return "paper";
  return "scissors";
};
const getHumanChoice = () => {
  const humanChoice = prompt();
  return humanChoice;
};

const playGame = () => {
  let humanScore = 0;
  let computerScore = 0;
  const playRound = (humanChoice, computerChoice) => {
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
  };
  for (let i = 0; i < 5; i++) {
    playRound(getHumanChoice(), getComputerChoice());
  }
  if (humanScore < computerScore)
    return `computer wins ${computerScore}, ${humanScore}`;
  else return `human wins ${humanScore}, ${computerScore}`;
};

console.log(playGame());
