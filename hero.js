const heroDiv = document.querySelector("#img-box");
const backgroundPositionValue = getComputedStyle(heroDiv).left;
const regex = /[^0-9]/g;
const positionNum = backgroundPositionValue.replace(regex, "");

/*현재 히어로의 position Number*/
let HeroNumber = parseInt(positionNum);
/* console.log(number); */

function pressKeyCode(e) {
  const keyCode = e.key;
  /* console.log(keyCode); */
  if (keyCode === "d" || keyCode === "D") {
    heroDiv.classList.remove("left");
    heroDiv.classList.add("right");
    moveToRight();
    /* console.log(moveToLeft(backgroundPositionValue)); */

    /* console.log(HeroNumber); */
  } else if (keyCode === "a" || keyCode === "A") {
    heroDiv.classList.remove("right");
    heroDiv.classList.add("left");
    /* console.log("move to left"); */
    moveToLeft();
  }
}

const moveToRight = () => {
  if (HeroNumber > 765) return;
  heroDiv.style.cssText = `left : ${HeroNumber + 35}px`;
  heroDiv.style.cssText.replace(regex, "");
  HeroNumber = parseInt(heroDiv.style.cssText.replace(regex, ""));
};

const moveToLeft = () => {
  if (HeroNumber < 35) return;
  heroDiv.style.cssText = `left : ${HeroNumber - 35}px`;
  heroDiv.style.cssText.replace(regex, "");
  HeroNumber = parseInt(heroDiv.style.cssText.replace(regex, ""));
};

document.addEventListener("keydown", pressKeyCode);
