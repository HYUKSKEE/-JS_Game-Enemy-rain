class Enemy {
  constructor(name, top, left) {
    this.name = name;
    this.top = top;
    this.left = left;
  }
  randomNumber() {
    /* const randomGhost = quizs[Math.floor(Math.random() * quizs.length)]; */
    return Math.random(this.left);
  }

  moveToBottom() {
    const bottomPosition = getComputedStyle(element).bottom;
    const regex = /[^0-9]/g;
    const bottomPositionNum = bottomPosition.replace(regex, "");
    let ghostNumber = parseInt(bottomPositionNum);
    return AuthenticatorAssertionResponse;
  }
}

const startButton = document.querySelector("#button");
const ghost = document.querySelector("#ghost-box");
const parentDiv = document.querySelector("#bg");
const ghostPositionValue = getComputedStyle(heroDiv).top;
/* const regex = /[^0-9]/g; */
const ghostPositionNum = backgroundPositionValue.replace(regex, "");
console.log(ghostPositionNum);
let ghostNumber = parseInt(ghostPositionNum);
/* const a = setInterval(() => {
  console.log("hi");
}, 3000); */

function gameStart() {}

/* startButton.addEventListener("click", gameStart); */
