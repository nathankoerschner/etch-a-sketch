// --------------------- Setup the Grid ------------------------
const GRIDSIZE = 960;
const DEFAULT_NUMBER_OF_BOXES = 100;
const grid = document.getElementById("grid");
grid.style.height = `${GRIDSIZE}px`;
grid.style.width = `${GRIDSIZE}px`;

function hoverEffect(e) {
  e.target.classList.toggle("hovered");
}
function colorEffect(e) {
  e.target.classList.toggle("colored");
}

function onMouseEnter(e) {
  hoverEffect(e);
  if (drawing) colorEffect(e);
}
function onMouseExit(e) {
  hoverEffect(e);
}

// Create a drawing effect
// When the mouse is pressed down on the grid, and dragged, color each item it touches
let drawing = false;
grid.addEventListener("mousedown", () => (drawing = true));
grid.addEventListener("mouseup", () => (drawing = false));
let boxes = [];

// generate DEFAULT_NUMBER_OF_BOXES boxes
let edgeSize = Math.floor(Math.sqrt(DEFAULT_NUMBER_OF_BOXES));
for (i = 0; i < DEFAULT_NUMBER_OF_BOXES; i++) {
  const box = document.createElement("div");
  //temp styling to make it appear
  box.classList.add("box");
  box.style.height = `${GRIDSIZE / edgeSize}px`;
  box.style.width = `${GRIDSIZE / edgeSize}px`;
  boxes.push(box);
}
boxes.forEach((box) => {
  grid.appendChild(box);
});
boxes.forEach((box) => {
  box.addEventListener("mousedown", colorEffect);
  box.addEventListener("mouseenter", onMouseEnter);
  box.addEventListener("mouseleave", onMouseExit);
});

function reRenderBoxes(aproxNumBoxes) {
  // -------- compute size --------------
  let edgeSize = Math.floor(Math.sqrt(aproxNumBoxes));
  let numBoxes = Math.pow(edgeSize, 2);

  //------------- reset -----------------
  const existingBoxes = document.querySelectorAll(".box");
  existingBoxes.forEach((box) => box.remove());

  // -------- generate boxes ------------
  let newBoxes = [];
  for (i = 0; i < numBoxes; i++) {
    const box = document.createElement("div");
    //temp styling to make it appear
    box.classList.add("box");
    box.style.height = `${GRIDSIZE / edgeSize}px`;
    box.style.width = `${GRIDSIZE / edgeSize}px`;
    newBoxes.push(box);
  }
  newBoxes.forEach((box) => {
    grid.appendChild(box);
    box.addEventListener("mousedown", colorEffect);
    box.addEventListener("mouseenter", onMouseEnter);
    box.addEventListener("mouseleave", onMouseExit);
  });
}

// ---------- Reset Button --------------

const resetButton = document.getElementById("resetButton");
resetButton.addEventListener("click", () =>
  reRenderBoxes(
    prompt("Enter the desired number of boxes", DEFAULT_NUMBER_OF_BOXES),
  ),
);
