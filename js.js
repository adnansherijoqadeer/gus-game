"use strict"
// document.querySelector(".message").textContent="🎉 Correct Number !";
//  document.querySelector(".number").textContent=13;
// document.querySelector(".score").textContent=20;
// document.querySelector(".guess").value=20; 
// console.log(document.querySelector(".guess").value)

const secretnumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let hightscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  

  if (!guess) {
    document.querySelector(".message").textContent = "⛔  No Number 😨!"
  }
  else if (guess === secretnumber) {
    document.querySelector(".message").textContent = "🎉 Correct Number 🤠!!";
    document.querySelector(".number").textContent = secretnumber;

    if (score > hightscore) {
      hightscore = score;
      document.querySelector(".highscore").textContent = hightscore;
    }

    document.querySelector(".mainsection").style.background = "red"
  }
  else if (guess > secretnumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📈 Too High 😪!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You Lost The Game 😭!";

      document.querySelector(".score").textContent = 0;
    }

  }
  else if (guess < secretnumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📉 Too Low  🥶!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You Lost The Game 😭!";

      document.querySelector(".score").textContent = 0;
    }

  }
})

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  const secretnumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = "20";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector(".highscore").value= "0";
  document.querySelector(".mainsection").style.background = "green" 
})