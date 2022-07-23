const startButton = document.querySelector(".start");
/* const ghost = document.querySelector("#ghost-box"); */
const bgDiv = document.querySelector("#bg");
/* const ghostPositionValue = getComputedStyle(heroDiv).top; */
/* const regex = /[^0-9]/g; */
/* const ghostPositionNum = backgroundPositionValue.replace(regex, ""); */
/* console.log(ghostPositionNum); */
/* let ghostNumber = parseInt(ghostPositionNum); */
/* const a = setInterval(() => {
  console.log("hi");
}, 3000); */

// 1. game start button 을 누르면 game이 시작된다.
// 2. 유령이 정해둔 시간초 마다 생성된다.
// 준비물 : 유령 Instance, setInterval

/* const startGame = () => {
  setInterval(createGhostInstance, 300);
};

function createGhostInstance() {
  const randomLeft = Math.random() * (780 - 20) + 20;
  const newDiv = document.createElement("div");
  const cleanDiv = bgDiv.appendChild(newDiv);
  cleanDiv.id = "ghost-box";
  cleanDiv.className = "ghost";
  cleanDiv.style.cssText = `left: ${randomLeft}px`;
  console.log("######## ghost created!");
}

startButton.addEventListener("click", startGame);

*/
function gameStart() {
  setInterval(createRandomGhostInstance, 800);
  setTimeout(clearInterval(setInterval(createRandomGhostInstance, 800)), 10000);
}

/* function intervalGhost() {
  setInterval(createRandomGhostInstance, 800);
} */

/* startButton.addEventListener("click", gameStart); */

function createRandomGhostInstance() {
  const randomLeft = Math.random() * (780 - 20) + 20;
  /* cleanDiv가 서로다른 id를 가지도록 일단 new Date()로 변화를 줌 나중에 바꾸자 */
  const ghostId = new Date();
  const newDiv = document.createElement("div");
  const cleanDiv = bgDiv.appendChild(newDiv);
  const cleanDivPositionValue = getComputedStyle(cleanDiv).y;
  /*  console.log(cleanDivPositionValue); */
  const regex = /[^0-9]/g;
  const cleanDivPositionNum = cleanDivPositionValue.replace(regex, "");
  const ghostNum = parseInt(cleanDivPositionNum);
  /*  console.log(ghostNum); */

  //cleanDiv[i].style.cssText = ""
  cleanDiv.id = `ghost${ghostId}`;
  cleanDiv.className = `ghost`;
  cleanDiv.style.cssText = `left: ${randomLeft}px; y: ${ghostNum}px;`;
  /* if (cleanDivPositionNum) {
    cleanDivPositionNum == cleanDivPositionNum + 30;
  } else if (cleanDivPositionNum == 545) {
    cleanDiv.classList.add(".death");
  } */
  /* console.log(cleanDivPositionNum); */
}

function ghostDown() {}
startButton.addEventListener("click", gameStart);
