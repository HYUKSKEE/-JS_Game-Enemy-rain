const startButton = document.querySelector(".start");
/* const ghost = document.querySelector("#ghost-box"); */
const bgDiv = document.querySelector("#bg");
/* const ghostPositionValue = getComputedStyle(heroDiv).top; */

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
  const intervalId = setInterval(createRandomGhostInstance, 800);
  setTimeout(myStopFunction, 5000);

  function myStopFunction() {
    clearInterval(intervalId);
  }
}

/* ghostDomArr.style.cssText = `left: ${randomLeft}px`; */

// 여기에서 귀신 dom 하나를 생성
function createRandomGhostInstance() {
  const randomLeft = parseInt(Math.random() * (780 - 20) + 20);
  const regex = /[^0-9]/g;
  const div = document.createElement("div");
  const createDiv = `<div id=${new Date().getTime()} class="ghost" style="left: ${randomLeft}px; top:1px;"></div>`;
  // 귀신은 생성 될 때 setIntervel 함수를 가지고 태어나야함. 왜냐? top의 값을 계속 내려줄거기 때문에
  div.innerHTML = createDiv.trim();
  bgDiv.appendChild(div.firstChild);
  const divs = document.getElementsByClassName("ghost");
  let ghostDomArr = [];
  for (let i = 0; i < divs.length; i++) {
    /* divs[i].style.styleText = `left: ${randomLeft}px; top: 100px;`; */
    ghostDomArr.push(divs[i]);
    let topValue = ghostDomArr[i].style.top;
    let topValueRegex = topValue.replace(regex, "");
    let topValueNum = parseInt(topValueRegex);
  }
}

startButton.addEventListener("click", gameStart);
