let firstCard = 10;
let secondCard = 4;
let newCard = 9;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

let messageAtStart =
  document.getElementById(
    "message-at-start"
  ); /*stores the message paragraph in html in a js variable */
/* let displaySum = document.getElementById("display-sum"); */
let displaySum =
  document.querySelector(
    "#display-sum"
  ); /*querySelector is very similar to getElementById as it does the same job..however much like in CSS you have to indicate if the element is a class (.), ID (#) or normal  */
let displayCards = document.getElementById("display-cards");

function startGame() {
  displaySum.textContent = `Sum: ${sum}`;
  displayCards.textContent = `Cards: ${firstCard} and ${secondCard}`;
  if (sum <= 20) {
    message = "do you want to draw a new card";
  } else if (sum === 21) {
    message = "you have black jack...well done";
    hasBlackJack = true;
  } else {
    message = "you're out of the game";
    isAlive = false;
  }
  messageAtStart.textContent = message;
}

function issueNewCard() {
  console.log("drawing a new card from deck");
  let pickRandomNumber = Number(1 + Math.round(Math.random() * 10));
  newCard = pickRandomNumber;
  console.log(`new card is ${newCard}`);
}
