const grid = document.getElementById("grid");
// generate 16 nodes on the grid

let boxes = [];
// generate 16 boxes
for (i = 0; i < 16; i++) {
  const box = document.createElement("div");
  //temp styling to make it appear
  box.classList.add("box");
  boxes.push(box);
}

console.log(grid);
boxes.forEach((box) => {
  console.log(box);
  grid.appendChild(box);
});
