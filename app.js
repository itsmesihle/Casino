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

function renderGame() {
  //before anything happens, this is displayed
  displaySum.textContent = `Sum: ${sum}`;
  displayCards.textContent = `Cards: ${cardValues[0]} and ${cardValues[1]}`;

  if (sum <= 20) {
    message = "you don't have blackjack, do you want to draw a new card?";

    //next 3 comments can be put inside a function
    //creating new issue button
    const newTouchButton = document.createElement("button");
    console.log(newTouchButton);
    selectIdForButtonsMain.append(newTouchButton);

    //adding innertext and id attribute to new issue button
    newTouchButton.innerText = "Draw a new card";
    newTouchButton.setAttribute("id", "buttons");
    console.log(selectIdForButtonsMain.children);

    //is it the same way to add "onClick" element that it is to add id?
    newTouchButton.setAttribute("onclick", "newCard()"); //havent tested this code yet

    //add newCard value to sum ~~local sum
    sum += newCard;
    console.log(sum);
    console.log(newCard);
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

function addNewIssueButton() {
  const selectIdForButtonsMain = document.querySelector("#btns");
  console.log(selectIdForButtonsMain);
}
addNewIssueButton;

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
