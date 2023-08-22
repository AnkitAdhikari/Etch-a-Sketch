const gridContainer = document.querySelector(".grid-container");
for (let i = 0; i < 16; i++) {
  const row = document.createElement("div");
  row.classList.add("row");
  for (let i = 0; i < 16; i++) {
    const square = document.createElement("div");
    row.insertAdjacentElement("afterbegin", square);
    square.classList.add("square");
  }
  gridContainer.insertAdjacentElement("afterbegin", row);
}

// gridContainer.appendChild(square);
