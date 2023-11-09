let firstCard = 3;
let secondCard = 8;
let newCard = 9;
let cardValues = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

//let the computer randomly choose firstCard and secondCard
/* function computerPicksCards() {
  let pickRandomNumber = Number(1 + Math.round(Math.random() * 10));
  firstCard = pickRandomNumber;
  console.log(firstCard);
  pickRandomNumber = Number(1 + Math.round(Math.random() * 10));
  secondCard = pickRandomNumber;
  console.log(secondCard);
} */

const selectDiv = document.querySelector("#display-messages");
const messageAtStart = document.getElementById("message-at-start");
const displayCards = document.getElementById("display-cards");
const displaySum = document.querySelector("#display-sum");

function endGame() {
  console.log("your game is done");
}

function renderGame() {
  displaySum.textContent = `Sum: ${sum}`;
  displayCards.textContent = `Cards: ${cardValues[0]} and ${cardValues[1]}`;
  if (sum <= 20) {
    message = "you don't have blackjack, do you want to draw a new card?";
  } else if (sum === 21) {
    message = "you have black jack...well done";
    hasBlackJack = true;
    console.log(hasBlackJack);
  } else {
    message = "you're out of the game";
    isAlive = false;
    endGame();
  }
  messageAtStart.textContent = message;
}

function startGame() {
  renderGame();
}

//put everything in the issuesNewCard function
function issueNewCard() {
  const displayForNewCard = document.createElement("p");
  selectDiv.append(displayForNewCard);
  /* let pickRandomNumber = Number(1 + Math.round(Math.random() * 10));
  newCard = pickRandomNumber; */
  message = `your new card is: ${newCard}`;
  sum += newCard;
  displaySum.textContent = `Sum: ${sum}`;
  if (sum <= 20) {
    message = "you don't have blackjack, do you want to draw a new card?";
  } else if (sum === 21) {
    message = "you have black jack...well done";
    hasBlackJack = true;
    console.log(hasBlackJack);
  } else {
    message = "you're out of the game";
    isAlive = false;
  }
  displayForNewCard.textContent = message;
  //beginning if statements and numeric operations
}
