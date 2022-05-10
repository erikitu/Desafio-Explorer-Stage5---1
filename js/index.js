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
const buttonDarkMode = document.querySelector(".darkMode");
const buttonBrightMode = document.querySelector(".brightMode");
const forestVolume = document.querySelector(".forestVol");
const rainVolume = document.querySelector(".rainVol");
const coffeeShopSoundVolume = document.querySelector(".coffeeShopSoundVol");
const firePlaceVolume = document.querySelector(".firePlaceVol");
//cards
const cardForest = document.querySelector(".pageCardWrapperForest");
const cardRain = document.querySelector(".pageCardWrapperRain");
const cardCoffeeShop = document.querySelector(".pageCardWrapperCoffeeShop");
const cardFirePlace = document.querySelector(".pageCardWrapperFirePlace");
const pageMode = document.body;
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
let sound;

function bgAudioPlay() {
  sound.play();
}

function setVolume(value) {
  sound.volume = value / 100;
}

function toggleMode() {
  pageMode.classList.toggle("dark");
  buttonBrightMode.classList.toggle("hide");
  buttonDarkMode.classList.toggle("hide");
}

function updateDisplay(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, "0");
  secondsDisplay.textContent = String(seconds).padStart(2, "0");
}

function resetTimer() {
  minutesDisplay.textContent = String(0).padStart(2, "0");
  secondsDisplay.textContent = String(0).padStart(2, "0");
  clearTimeout(timerTimeOut);
  sound.pause();
}
function resetBgAudio() {
  if (sound != undefined) {
    sound.pause();
  }
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
      seconds = 60;

      --minutes;
    }
    updateDisplay(minutes, String(seconds - 1));

    countDown();
  }, 1000);
}

function removeSelectedClass() {
  cardForest.classList.remove("selected");
  cardRain.classList.remove("selected");
  cardCoffeeShop.classList.remove("selected");
  cardFirePlace.classList.remove("selected");
}
function addSelectedOn(cardName) {
  removeSelectedClass();
  cardName.classList.add("selected");
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

buttonDarkMode.addEventListener("click", function () {
  toggleMode();
});

buttonBrightMode.addEventListener("click", function () {
  toggleMode();
});

buttonPlay.addEventListener("click", function () {
  buttonPressAudio.play();
  countDown();
});
buttonStop.addEventListener("click", function () {
  buttonPressAudio.play();
  resetTimer();
  removeSelectedClass();
});

cardForest.addEventListener("click", function () {
  resetBgAudio();
  addSelectedOn(cardForest);
  sound = forestSound;
  forestSound.loop = true;
  bgAudioPlay();
});
cardRain.addEventListener("click", function () {
  resetBgAudio();
  addSelectedOn(cardRain);
  sound = rainSound;
  rainSound.loop = true;
  bgAudioPlay();
});
cardCoffeeShop.addEventListener("click", function () {
  resetBgAudio();
  addSelectedOn(cardCoffeeShop);
  sound = coffeeShopSound;
  coffeeShopSound.loop = true;
  bgAudioPlay();
});
cardFirePlace.addEventListener("click", function () {
  resetBgAudio();
  addSelectedOn(cardFirePlace);
  sound = firePlaceSound;
  firePlaceSound.loop = true;
  bgAudioPlay();
});

forestVolume.onchange = function () {
  if (sound != undefined) {
    setVolume(document.querySelector(".forestVol").value);
  }
};
rainVolume.onchange = function () {
  if (sound != undefined) {
    setVolume(document.querySelector(".rainVol").value);
  }
};
coffeeShopSoundVolume.onchange = function () {
  if (sound != undefined) {
    setVolume(document.querySelector(".coffeeShopSoundVol").value);
  }
};
firePlaceVolume.onchange = function () {
  if (sound != undefined) {
    setVolume(document.querySelector(".firePlaceVol").value);
  }
};
