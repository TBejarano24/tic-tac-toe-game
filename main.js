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

let turnos = 1;

let gameGrid = document.querySelector("#tic-tac-toe-grid");
let turnIndicator = document.querySelector("#turnIndicator");

gameGrid.addEventListener("click", function (event) {
  if (event.target.classList.contains("grid-square")) {
    let gridSquare = event.target.closest("div");
    if (turnos % 2 !== 0) {
      turnIndicator.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 100 100" fill="none">
<circle cx="50" cy="50" r="35" stroke="#a8bec9" stroke-width="30" />
</svg>
                <span class="text-[#a8bec9] text-xs"><strong>TURN</strong></span>`;
      gridSquare.innerHTML += `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none"
    stroke="#31c4be" stroke-width="6" stroke-linecap="round" stroke-linejoin="round">
    <line x1="4" y1="4" x2="20" y2="20" />
    <line x1="20" y1="4" x2="4" y2="20" />
    </svg>`;
    } else if (turnos % 2 === 0) {
      turnIndicator.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none"
                    stroke="#a8bec9" stroke-width="6" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="4" y1="4" x2="20" y2="20" />
                    <line x1="20" y1="4" x2="4" y2="20" />
                </svg>
<span class="text-[#a8bec9] text-xs"><strong>TURN</strong></span>`;
      gridSquare.innerHTML += `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 100 100" fill="none"><circle cx="50" cy="50" r="35" stroke="#f0b137" stroke-width="30" /></svg>`;
    }
    turnos++;
  }
});
