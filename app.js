let firstCard = 3;
let secondCard = 8;
let newCard = 10;
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

//selecting IDs from MIDDLE MENU
const selectDiv = document.querySelector("#display-messages");
const messageAtStart = document.getElementById("message-at-start");
const displayCards = document.getElementById("display-cards");
const displaySum = document.querySelector("#display-sum");

/* function endGame() {
  console.log("your game is done");
} */

//selecting IDs from buttons section
const selectIdForButtonsMain = document.querySelector("#buttons-main");
const selectIdForButtons = document.querySelector("#buttons");

function createNewCard() {
  //creating new issue button
  const newTouchButton = document.createElement("button");
  selectIdForButtonsMain.append(newTouchButton);

  //adding innertext and id attribute to new issue button
  newTouchButton.innerText = "Draw a new card";
  newTouchButton.setAttribute("id", "buttons");
  console.log(selectIdForButtonsMain.children);

  //is it the same way to add "onClick" element that it is to add id?
  newTouchButton.setAttribute("onclick", "addNewCardToSum()"); //havent tested this code yet
  console.log(newTouchButton);
}

//add newCard value to sum ~~local sum
function addNewCardToSum() {
  console.log(sum);
  sum += newCard;
  console.log(sum);
  console.log(newCard);
}

function renderGame() {
  //before anything happens, this is displayed
  displaySum.textContent = `Sum: ${sum}`;
  displayCards.textContent = `Cards: ${cardValues[0]} and ${cardValues[1]}`;

  if (sum <= 20) {
    message = "you don't have blackjack, do you want to draw a new card?";
    createNewCard();
    addNewCardToSum();
    //look above for the functions
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

/* let pickRandomNumber = Number(1 + Math.round(Math.random() * 10));
  newCard = pickRandomNumber; */
