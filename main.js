/* CROSS SVG

<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none"
stroke="#31c4be" stroke-width="6" stroke-linecap="round" stroke-linejoin="round">
<line x1="4" y1="4" x2="20" y2="20" />
<line x1="20" y1="4" x2="4" y2="20" />
</svg>*/

/*CIRCLE SVG

<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 100 100" fill="none">
<circle cx="50" cy="50" r="35" stroke="#f0b137" stroke-width="30" />
</svg>
*/

//TURN INDEX
let turns = 1;

//VARIABLES
let gameGrid = document.querySelector("#tic-tac-toe-grid");
let gameGridDiv = document.querySelector("#tic-tac-toe-grid-div");
let turnIndicator = document.querySelector("#turnIndicator");

let xPoints = document.querySelector("#x-points");
let oPoints = document.querySelector("#o-points");
let ties = document.querySelector("#ties");

let restartButton = document.querySelector("#restartButton");

let squareOne = document.querySelector("#square-one");
let squareTwo = document.querySelector("#square-two");
let squareThree = document.querySelector("#square-three");
let squareFour = document.querySelector("#square-four");
let squareFive = document.querySelector("#square-five");
let squareSix = document.querySelector("#square-six");
let squareSeven = document.querySelector("#square-seven");
let squareEight = document.querySelector("#square-eight");
let squareNine = document.querySelector("#square-nine");

let imaginaryGrid = [
  squareOne,
  squareTwo,
  squareThree,
  squareFour,
  squareFive,
  squareSix,
  squareSeven,
  squareEight,
  squareNine,
];

const winnerCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function checkWinner() {
  for (combination of winnerCombinations) {
    const [a, b, c] = combination;

    if (
      imaginaryGrid[a].classList.contains("x") &&
      imaginaryGrid[b].classList.contains("x") &&
      imaginaryGrid[c].classList.contains("x")
    ) {
      return "x";
    } else if (
      imaginaryGrid[a].classList.contains("o") &&
      imaginaryGrid[b].classList.contains("o") &&
      imaginaryGrid[c].classList.contains("o")
    ) {
      return "o";
    }
  }
  return false;
}

function manualRestart() {
  const winnerBanner = document.querySelector("#winnerBanner");
  if (winnerBanner) {
    winnerBanner.remove();
  }

  imaginaryGrid.forEach((square) => {
    square.innerHTML = "";
    square.classList.remove("occupied", "x", "o");
  });

  // Reset turn indicator to X
  turnIndicator.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none"
                    stroke="#a8bec9" stroke-width="6" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="4" y1="4" x2="20" y2="20" />
                    <line x1="20" y1="4" x2="4" y2="20" />
                </svg>
<span class="text-[#a8bec9] text-xs"><strong>TURN</strong></span>`;
}

function autoRestart() {
  setTimeout(() => {
    manualRestart();
  }, 2000);
}

//FUNCTION TO INTERACT WITH GRID
gameGrid.addEventListener("click", (event) => {
  //DETECT IF THE CLICK WAS IN THE GRID OR NOT
  if (
    event.target.classList.contains("grid-square") &&
    !event.target.classList.contains("occupied")
  ) {
    let gridSquare = event.target.closest("div");

    //IF THE TURN IS AN ODD NUMBER, AN X IS PLACED
    if (turns % 2 !== 0) {
      turnIndicator.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 100 100" fill="none">
<circle cx="50" cy="50" r="35" stroke="#a8bec9" stroke-width="30" />
</svg>
                <span class="text-[#a8bec9] text-xs"><strong>TURN</strong></span>`;

      gridSquare.innerHTML += `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none"
    stroke="#31c4be" stroke-width="6" stroke-linecap="round" stroke-linejoin="round">
    <line x1="4" y1="4" x2="20" y2="20" />
    <line x1="20" y1="4" x2="4" y2="20" />
    </svg>`;

      gridSquare.classList.add("occupied", "x");

      //IF THE TURN IS AN EVEN NUMBER, A O IS PLACED
    } else if (turns % 2 === 0) {
      turnIndicator.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none"
                    stroke="#a8bec9" stroke-width="6" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="4" y1="4" x2="20" y2="20" />
                    <line x1="20" y1="4" x2="4" y2="20" />
                </svg>
<span class="text-[#a8bec9] text-xs"><strong>TURN</strong></span>`;

      gridSquare.innerHTML += `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 100 100" fill="none"><circle cx="50" cy="50" r="35" stroke="#f0b137" stroke-width="30" /></svg>`;

      gridSquare.classList.add("occupied", "o");
    }

    //THE TURN INDEX IS ADDED 1
    turns++;

    if (turns >= 5) {
      let winner = checkWinner();
      if (winner === "x") {
        xPoints.textContent = parseInt(xPoints.textContent) + 1;
        gameGridDiv.insertAdjacentHTML(
          "beforeend",
          `<div id="winnerBanner" class="bg-[#31c4be] absolute mx-auto w-fit font-bold p-6 px-20 rounded-lg">X Wins!</div>`
        );
        turns = 1;
        autoRestart();
      } else if (winner === "o") {
        oPoints.textContent = parseInt(oPoints.textContent) + 1;
        gameGridDiv.insertAdjacentHTML(
          "beforeend",
          `<div id="winnerBanner" class="bg-[#f0b137] absolute mx-auto w-fit font-bold p-6 px-20 rounded-lg">O Wins!</div>`
        );
        turns = 1;
        autoRestart();
      } else if (turns > 9) {
        ties.textContent = parseInt(ties.textContent) + 1;
        turns = 1;
        gameGridDiv.insertAdjacentHTML(
          "beforeend",
          `<div id="winnerBanner" class="bg-[#a8bec9] absolute mx-auto w-fit font-bold p-6 px-20 rounded-lg">Tie</div>`
        );
        autoRestart();
      }
    }
  } else {
    return;
  }
});

restartButton.addEventListener("click", function () {
  turns = 1;
  manualRestart();
  oPoints.textContent = 0;
  xPoints.textContent = 0;
  ties.textContent = 0;
});
