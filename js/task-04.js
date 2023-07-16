const valueEl = document.querySelector("span");
const decrementEl = document.querySelector(`[data-action="decrement"]`);
const incrementEl = document.querySelector(`[data-action="increment"]`);
let counterValue = 0;
decrementEl.addEventListener("click", onDecrement);
incrementEl.addEventListener("click", onIncrement);
function onDecrement() {
  counterValue -= 1;
  changeCounter();
}
function onIncrement() {
  counterValue += 1;
  changeCounter();
}
function changeCounter() {
  valueEl.textContent = counterValue;
}
