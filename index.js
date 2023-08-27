const gridContainer = document.querySelector(".grid-container");
const resizeBtn = document.querySelector(".resize-btn");
const eraserBtn = document.querySelector(".eraser-btn");
const eraseAllBtn = document.querySelector(".erase-all-btn");

const randomNum = () => Math.random() * 255 + 1;
let red = 0;
let green = 0;
let blue = 0;
let eraser = false;

function generateGrid(size = 16) {
  gridContainer.innerHTML = "";
  for (let i = 0; i < size; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    for (let i = 0; i < size; i++) {
      const square = document.createElement("div");
      square.addEventListener("mouseover", (e) => {
        square.classList.remove("transition-trail");
        red = eraser ? 255 : randomNum();
        green = eraser ? 255 : randomNum();
        blue = eraser ? 255 : randomNum();
        square.style.backgroundColor = `rgb(${red},${green},${blue})`;
      });
      square.addEventListener("mouseleave", (e) => {
        square.classList.add("transition-trail");
        square.style.backgroundColor = `rgba(${red},${green},${blue},${
          eraser ? 1 : 0.3
        })`;
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

eraserBtn.addEventListener("click", () => {
  eraser = !eraser;
  alert(`eraser: ${eraser ? "on" : "off"}`);
});

// gridContainer.appendChild(square);
eraseAllBtn.addEventListener("click", () => {
  document.querySelectorAll(".square").forEach((el) => {
    el.style.transition = "none";
    el.style.backgroundColor = "white";
  });
});
