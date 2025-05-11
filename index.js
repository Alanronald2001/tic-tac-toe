const gameBoard = document.getElementById("game-board");
const start = document.getElementById("start");
const restart = document.getElementById("restart");
const player1Input = document.getElementById("player1");
const player2Input = document.getElementById("player2");
const result = document.getElementById("result");

class TicTacToe {
  constructor() {
    this.reset();
  }

  reset() {
    this.gameBoard = Array(9).fill("");
    this.player1Marks = [];
    this.player2Marks = [];
    this.winPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    this.gameOver = false;
    this.player1 = "";
    this.player2 = "";
    this.currentPlayer = "";
  }

  initialize() {
    this.player1 = player1Input.value;
    this.player2 = player2Input.value;
    this.currentPlayer = this.player1;
    gameBoard.innerHTML = "";
    result.innerText = "";

    for (let i = 0; i < this.gameBoard.length; i++) {
      const div = document.createElement("div");
      div.innerText = "";
      div.classList.add("board");
      div.setAttribute("data-id", i);
      div.style.height = "100px";
      div.style.width = "100px";
      div.style.border = "1px solid black";
      div.style.display = "flex";
      div.style.alignItems = "center";
      div.style.justifyContent = "center";
      div.style.fontSize = "2rem";
      div.style.cursor = "pointer";

      div.addEventListener("click", () => this.handleMove(i, div));
      gameBoard.appendChild(div);
    }
  }

  handleMove(index, cell) {
    if (this.gameOver || this.gameBoard[index] !== "") return;

    const mark = this.currentPlayer === this.player1 ? "X" : "O";
    this.gameBoard[index] = mark;
    cell.innerText = mark;

    const playerMarks =
      this.currentPlayer === this.player1
        ? this.player1Marks
        : this.player2Marks;
    playerMarks.push(index);

    if (this.checkWinner(playerMarks)) {
      result.innerText = `${this.currentPlayer} Wins!`;
      this.gameOver = true;
      return;
    }

    if (!this.gameBoard.includes("")) {
      result.innerText = "It's a draw!";
      this.gameOver = true;
      return;
    }

    this.currentPlayer =
      this.currentPlayer === this.player1 ? this.player2 : this.player1;
  }

  checkWinner(marks) {
    return this.winPatterns.some((pattern) =>
      pattern.every((idx) => marks.includes(idx)),
    );
  }

  restart() {
    this.reset();
    player1Input.value = "";
    player2Input.value = "";
    gameBoard.innerHTML = "";
    result.innerText = "";
  }
}

const game = new TicTacToe();

start.addEventListener("click", () => {
  if (!player1Input.value || !player2Input.value) {
    alert("Please enter both player names.");
    return;
  }
  game.initialize();
});

restart.addEventListener("click", () => {
  game.restart();
});
