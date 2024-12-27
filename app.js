let boxes = document.querySelectorAll(".box");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#newGame-btn");
let turnO = true;

let winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const resetGame = () => {
  turnO = true;
  enabledBoxes();
  msgContainer.classList.add("hide");
  resetBtn.classList.remove("hide");
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("Box is Clicked");
    if (turnO) {
      box.innerHTML = "O";
      turnO = false;
    } else {
      box.innerHTML = "X";
      turnO = true;
    }

    box.disabled = true;
    checkWinner();
  });
});

const disabledBoxes = () => {
  for (const box of boxes) {
    box.disabled = true;
  }
};

const enabledBoxes = () => {
  for (const box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};
const showWinner = (winner) => {
  msg.innerText = `Congratulations ! 🏆Winner ${winner}🏆`;
  msgContainer.classList.remove("hide");
  disabledBoxes();
  resetBtn.classList.add("hide");
};

const checkWinner = () => {
  for (const pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerHTML;
    let pos2Val = boxes[pattern[1]].innerHTML;
    let pos3Val = boxes[pattern[2]].innerHTML;

    if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        console.log("Winner is: Player " + pos1Val);
        showWinner(pos1Val);
      }
    }
  }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
