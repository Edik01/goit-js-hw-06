function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

document.addEventListener("DOMContentLoaded", function () {
  const input = document.querySelector("#controls input");
  const createBtn = document.querySelector("[data-create]");
  const destroyBtn = document.querySelector("[data-destroy]");
  const boxesContainer = document.querySelector("#boxes");

  createBtn.addEventListener("click", function () {
    const amount = input.value;
    createBoxes(amount);
  });

  destroyBtn.addEventListener("click", function () {
    destroyBoxes();
  });

  function createBoxes(amount) {
    clearBoxes();
    let size = 30;

    for (let i = 0; i < amount; i++) {
      const box = document.createElement("div");
      box.style.width = size + "px";
      box.style.height = size + "px";
      box.style.backgroundColor = getRandomHexColor();
      boxesContainer.appendChild(box);
      size += 10;
    }
  }

  function destroyBoxes() {
    clearBoxes();
  }

  function clearBoxes() {
    boxesContainer.innerHTML = "";
  }
});
