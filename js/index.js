//DOM
//Document Object Model

let timerTimeOut;
let minutesDisplay = document.querySelector(".pageTimerMinutes");
const secondsDisplay = document.querySelector(".pageTimerSeconds");
//controls
const buttonPlay = document.querySelector(".pageTimerControlsPlay");
const buttonStop = document.querySelector(".pageTimerControlsStop");
const buttonMoreTime = document.querySelector(".pageTimerControlsMoreTime");
const buttonMinusTime = document.querySelector(".pageTimerControlsMinusTime");
//cards
const cardForest = document.querySelector(".pageCardWrapperForest");
const cardRain = document.querySelector(".pageCardWrapperRain");
const cardCoffeShop = document.querySelector(".pageCardWrapperCoffeeShop");
const cardFirePlace = document.querySelector(".pageCardWrapperFirePlace");
//sounds
const kitchenTimer = new Audio(
  "https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true"
);
const buttonPressAudio = new Audio(
  "https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true"
);
const forestSound = new Audio("./sounds/Floresta.wav");
const rainSound = new Audio("./sounds/Chuva.wav");
const coffeeShopSound = new Audio("./sounds/Cafeteria.wav");
const firePlaceSound = new Audio("./sounds/Lareira.wav");

function bgAudio() {
  sound.play();
}

function updateDisplay(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, "0");
  secondsDisplay.textContent = String(seconds).padStart(2, "0");
}

function countDown() {
  timerTimeOut = setTimeout(function () {
    let minutes = Number(minutesDisplay.textContent);
    let seconds = Number(secondsDisplay.textContent);
    let isFinished = seconds <= 0 && minutes <= 0;

    if (isFinished) {
      kitchenTimer.play();
      return;
    }

    if (seconds <= 0) {
      seconds = 2;

      --minutes;
    }
    updateDisplay(minutes, String(seconds - 1));

    countDown();
  }, 1000);
}
function removeSelectedClass() {
  cardForest.classList.remove("selected");
  cardRain.classList.remove("selected");
  cardCoffeShop.classList.remove("selected");
  cardFirePlace.classList.remove("selected");
}

buttonMoreTime.addEventListener("click", function () {
  let minutes = Number(minutesDisplay.textContent);
  buttonPressAudio.play();
  if (minutesDisplay.textContent >= 0) {
    minutesDisplay.textContent = String(minutes + 5).padStart(2, "0");
  }
  return;
});

buttonMinusTime.addEventListener("click", function () {
  let minutes = Number(minutesDisplay.textContent);
  buttonPressAudio.play();
  if (minutesDisplay.textContent > 0) {
    minutesDisplay.textContent = String(minutes - 5).padStart(2, "0");
  }
  return;
});

buttonPlay.addEventListener("click", function () {
  buttonPressAudio.play();
  countDown();
  bgAudio();
});
buttonStop.addEventListener("click", function () {
  buttonPressAudio.play();
  clearTimeout(timerTimeOut);
});

cardForest.addEventListener("click", function () {
  buttonPressAudio.play();
  removeSelectedClass();
  cardForest.classList.add("selected");
  sound = forestSound;
});
cardRain.addEventListener("click", function () {
  buttonPressAudio.play();
  removeSelectedClass();
  cardRain.classList.add("selected");
  sound = rainSound;
});
cardCoffeShop.addEventListener("click", function () {
  buttonPressAudio.play();
  removeSelectedClass();
  cardCoffeShop.classList.add("selected");
  sound = coffeeShopSound;
});
cardFirePlace.addEventListener("click", function () {
  buttonPressAudio.play();
  removeSelectedClass();
  cardFirePlace.classList.add("selected");
  sound = firePlaceSound;
});
