const gridContainer = document.querySelector(".grid-container");
const resizeBtn = document.querySelector(".resize-btn");

function generateGrid(size = 16) {
  gridContainer.innerHTML = "";
  for (let i = 0; i < size; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    for (let i = 0; i < size; i++) {
      const square = document.createElement("div");
      square.addEventListener("mouseover", (e) => {
        square.classList.remove("transition-trail");
        square.style.backgroundColor = "red";
      });
      square.addEventListener("mouseleave", (e) => {
        square.classList.add("transition-trail");
        square.style.backgroundColor = "#ff00006b";
      });
      row.insertAdjacentElement("afterbegin", square);
      square.classList.add("square");
    }
    gridContainer.insertAdjacentElement("afterbegin", row);
  }
}

generateGrid();

resizeBtn.addEventListener("click", () => {
  const size = +prompt("Enter grid size less than 100");
  generateGrid(size > 100 ? 100 : size);
});
// gridContainer.appendChild(square);
