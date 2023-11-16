let hasBlackJack = false;
let isAlive = true;
let message = "";
const INSERT = "blackjack";

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

//selecting IDs from buttons section
const selectIdForButtonsMain = document.querySelector("#buttons-main");
const selectIdForButtons = document.querySelector("#buttons");

function pickNewCardNumber() {
  return 1 + Math.round(Math.random() * 10);
}

//createNewCard() works beautifully
function createNewCard() {
  //creating new issue button
  const newTouchButton = document.createElement("button");
  selectIdForButtonsMain.append(newTouchButton);

  //adding innertext and id attribute to new issue button
  newTouchButton.innerText = "Draw a new card";
  newTouchButton.setAttribute("id", "buttons");
  /*  console.log(selectIdForButtonsMain.children); */

  //is it the same way to add "onClick" element that it is to add id? -
  newTouchButton.setAttribute("onclick", "addNewCardToSum()");
}

//add newCard value to sum ~~local sum
function addNewCardToSum() {
  /* console.log(`old sum is ${sum}`); */
  /*  newCard = pickNewCardNumber();
  console.log(newCard);
  sum += newCard;
  console.log(sum); */
  /* sum += newCard; */
  /* console.log("new card is: ", newCard); */
}

function endGame() {
  alert("your game is done");
  /*  console.log("your game is done"); */
}

function renderGame() {
  //declaring local scope variables
  let firstCard = 3;
  let secondCard = 8;
  let newCard = 0;
  let cardValues = [firstCard, secondCard, newCard];
  let sum = firstCard + secondCard;

  //before anything happens, this is displayed
  displaySum.textContent = `Sum: ${sum} + ${newCard}`;
  displayCards.textContent = `Cards: ${cardValues}`;
  console.log(`this `, sum, `is under renderGame();`);

  if (sum <= 20) {
    message = `you don't have ${INSERT}, do you want to draw a new card?`;
    createNewCard();
    /* addNewCardToSum(); */
    //look above for the functions
    messageAtStart.textContent = message;
    newCard = pickNewCardNumber();
    console.log("new card is:", newCard);
    sum += newCard;
    console.log(`new sum is ${sum}`);
    //
  } else if (sum === 21) {
    message = `you have ${INSERT}...well done`;
    /* hasBlackJack = true; */
    /* console.log(hasBlackJack); */
  } else {
    message = "you're out of the game";
    isAlive = false;
    endGame();
  }
}

function startGame() {
  renderGame();
}
