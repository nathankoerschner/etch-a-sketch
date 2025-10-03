// --------------------- Setup the Grid ------------------------
const grid = document.getElementById("grid");
let boxes = [];
// generate 16 boxes
for (i = 0; i < 16; i++) {
  const box = document.createElement("div");
  //temp styling to make it appear
  box.classList.add("box");
  boxes.push(box);
}

boxes.forEach((box) => {
  grid.appendChild(box);
});

// ----------- hover effect ----------------

function hoverEffect(e) {
  e.target.classList.toggle("hovered");
}
boxes.forEach((box) => {
  box.addEventListener("mouseenter", hoverEffect);
  box.addEventListener("mouseleave", hoverEffect);
});
