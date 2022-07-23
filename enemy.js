const startButton = document.querySelector(".start");
const ghost = document.querySelector("#ghost-box");
const bgDiv = document.querySelector("#bg");
/* const ghostPositionValue = getComputedStyle(heroDiv).top; */
/* const regex = /[^0-9]/g; */
/* const ghostPositionNum = backgroundPositionValue.replace(regex, ""); */
/* console.log(ghostPositionNum); */
/* let ghostNumber = parseInt(ghostPositionNum); */
/* const a = setInterval(() => {
  console.log("hi");
}, 3000); */

function gameStart() {
  setInterval(createRandomGhostDiv(), 3000);
}

function createRandomGhostDiv() {
  const randomLeft = Math.random() * (780 - 20) + 20;
  const newDiv = document.createElement("div");
  const cleanDiv = bgDiv.appendChild(newDiv);
  cleanDiv.id = "ghost-box";
  cleanDiv.className = "ghost";
  cleanDiv.style.cssText = `left: ${randomLeft}px`;
  console.log("hi");
}
startButton.addEventListener("click", gameStart);
