let micek = document.getElementById("micek");
let pravaraketa = document.getElementById("pravaraketa");
let levaraketa = document.getElementById("levaraketa");
let start = document.getElementById("start");
let Stop = document.getElementById("Stop");
let reset = document.getElementById("reset");
let point3 = document.getElementById("point3");

let moveCount = 0;
let countshot = document.getElementById("countshot");
let micekTop;
let animationInterval = null;

let moveToSecondRaketa = () => {
  micekLeft = randomInteger(37, 61);
  micekTop = randomInteger(33, 37);
  micek.style.left = micekLeft + "%";
  micek.style.top = micekTop + "%";
  levaraketa.style.left = (micekLeft - 1) + "%";
  levaraketa.style.top = (micekTop - 5) + "%";
  moveToSecondPole = moveCount ++;
  countshot.innerHTML = "" + moveCount;

  if (micekLeft > 50) {
    levaraketa.style.transform = "rotate(140deg)"; 
    levaraketa.style.left = (micekLeft - 5) + "%";
    levaraketa.style.top = (micekTop - 4.5) + "%";
  } else {
    levaraketa.style.transform = "rotate(0deg)";
  }

  if ((micekLeft >= 28 && micekLeft <= 36) || (micekLeft >= 62 && micekLeft <= 70)) {
    clearInterval(animationInterval); 
}
};

let moveToFirstRaketa = () => {
  micekLeft = randomInteger(38, 71);
  micekTop = randomInteger(45, 86);
  micek.style.left = micekLeft + "%";
  micek.style.top = micekTop + "%";
  pravaraketa.style.left = (micekLeft - 6) + "%";
  pravaraketa.style.top = (micekTop - 6) + "%";
  moveToFirstPole = moveCount++;
  countshot.innerHTML = "" + moveCount;

  if (micekLeft < 50) {
    pravaraketa.style.transform = "rotate(-135deg)"; 
    pravaraketa.style.left = (micekLeft - 1.5) + "%";
    pravaraketa.style.top = (micekTop - 6) + "%";
  } else {
    pravaraketa.style.transform = "rotate(0deg)";
  }

};
                                                                                                                 
start.onclick = () => {
  animate();
  animationInterval = setInterval(() => {
    animate();
  }, 2200);
}; 
 
Stop.onclick = () =>  {  
  if (animationInterval) {                           
    clearInterval(animationInterval);
  }
};

reset.onclick = () => {
  if (animationInterval) {                           
    clearInterval(animationInterval);
  }
  pravaraketa.style.transform = "rotate(0deg)";
  pravaraketa.style.left = "48%";
  pravaraketa.style.top = "75%";
  levaraketa.style.transform = "rotate(0deg)";
  levaraketa.style.left = "48%";
  levaraketa.style.top = "28%";
  micek.style.transform = "rotate(0deg)";
  micek.style.left = "54.5%";
  micek.style.top = "81%";
  moveCount = 0;
};

let animate = () => {
  setTimeout(() => {
    moveToFirstRaketa();
  }, 2000);
  setTimeout(() => {
    moveToSecondRaketa();
  }, 1000);
};

let randomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

















