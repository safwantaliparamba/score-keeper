const playerX = document.querySelector(".one");
const playerY = document.querySelector(".two");
const reset = document.querySelector(".three");
const displayX = document.querySelector(".x");
const displayY = document.querySelector(".y");
const selected = document.querySelector("#options");

let x = 0;
let y = 0;
var gameOver = false;

function isGameOver() {
  let winningPoint = selected.value;
  if (winningPoint == x || winningPoint == y) {
    playerX.setAttribute("disabled", true);
    playerY.setAttribute("disabled", true);
    gameOver = true;
  }
}

playerX.addEventListener("click", () => {
  isGameOver();
  winnerAndLoser();
  if (!gameOver) {
    x++;
    displayX.textContent = x;
  }
});
winnerAndLoser();

playerY.addEventListener("click", () => {
  isGameOver();
  winnerAndLoser();
  if (!gameOver) {
    y++;
    displayY.textContent = y;
  }
});

reset.addEventListener("click", () => {
  x = 0;
  y = 0;
  displayY.textContent = 0;
  displayX.textContent = 0;
  gameOver = false;
  playerX.removeAttribute("disabled", true);
  playerY.removeAttribute("disabled", true);
  displayX.style.color = "black";
  displayY.style.color = "black";
});
selected.addEventListener("change", () => {
  x = 0;
  y = 0;
  displayY.textContent = 0;
  displayX.textContent = 0;
  gameOver = false;
  playerX.removeAttribute("disabled", true);
  playerY.removeAttribute("disabled", true);
  displayX.style.color = "black";
  displayY.style.color = "black";
});
function winnerAndLoser() {
  isGameOver();
  if (gameOver == true) {
    if (x > y) {
      displayX.style.color = "green";
      displayY.style.color = "red";
    } else {
      displayX.style.color = "red";
      displayY.style.color = "green";
    }
  }
}
