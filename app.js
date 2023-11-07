let firstCard = 10;
let secondCard = 2;
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
    message = "do you want to draw a new card?";
  } else if (sum === 21) {
    message = "you have black jack...well done";
    hasBlackJack = true;
    console.log(hasBlackJack);
  } else {
    message = "you're out of the game";
    isAlive = false;
  }
  messageAtStart.textContent = message;
}

function issueNewCard() {
  /* console.log("drawing a new card from deck"); */
  let pickRandomNumber = Number(1 + Math.round(Math.random() * 10));
  newCard = pickRandomNumber;
  message = `your new card is ${newCard}`;
  messageAtStart.textContent = message;
  /* console.log(`new card is ${newCard}`);
  console.log(typeof newCard); */
  sum += newCard;
  console.log(sum);
  displaySum.textContent = `Sum: ${sum}`;
  displayCards.textContent = `Cards: ${firstCard}, ${secondCard} and ${newCard}`;
  if (sum <= 20) {
    message = "do you want to draw a new card?";
  } else if (sum === 21) {
    message = "you have black jack...well done";
    hasBlackJack = true;
    console.log(hasBlackJack);
  } else {
    message = `you're out of the game, your score is ${sum}`;
    isAlive = false;
    console.log(message);
  }
  messageAtStart.textContent = message;
}
