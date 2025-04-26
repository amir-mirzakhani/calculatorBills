const billInput = document.getElementById("bill");
const tipBtns = document.querySelectorAll(".btns-tip button");
const customTip = document.querySelector(".custpm-tip");
const numberOfPeople = document.getElementById("number");
const tipAmountText = document.querySelector(".number-amount");
const totalText = document.querySelector(".number-total");
const resetBtn = document.querySelector(".reset-btn");
const errorInput = document.querySelector(".error p");
let bill = 0;
let numberP = 1;
let tip = 0;
function calculator() {
  if (numberP > 0) {
    let total = (bill + bill * tip) / numberP;
    let tipAm = (bill * tip) / numberP;
    total = parseFloat(total.toFixed(2));
    tipAm = parseFloat(tipAm.toFixed(2));
    tipAmountText.textContent = `$${tipAm}`;
    totalText.textContent = `$${total}`;
    resetBtn.classList.add("active");
    resetBtn.style.opacity = 1;
  } else {
    tipAmountText.textContent = "$0.00";
    totalText.textContent = "$0.00";
    resetBtn.classList.remove("active");
    resetBtn.style.opacity = 0.1;
  }
}
billInput.addEventListener("input", () => {
  bill = parseFloat(billInput.value) || 0;
  calculator();
});
tipBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    tipBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    tip = parseFloat(btn.value) / 100;
    calculator();
  });
});
customTip.addEventListener("input", () => {
  tipBtns.forEach((b) => b.classList.remove("active"));
  tip = parseFloat(customTip.value) / 100 || 0;
  calculator();
});
numberOfPeople.addEventListener("input", () => {
  if (parseInt(numberOfPeople.value) === 0) {
    errorInput.style.display = "block"; // Show error message
    numberOfPeople.classList.add("error-border"); // Add red border
    numberOfPeople.classList.remove("success-border"); // Remove green if present
  } else {
    errorInput.style.display = "none"; // Hide error message
    numberOfPeople.classList.remove("error-border"); // Remove red border
    numberOfPeople.classList.add("success-border"); // Add green border
  }
  numberP = parseFloat(numberOfPeople.value) || 0;
  calculator();
});
resetBtn.addEventListener("click", () => {
  tipAmountText.textContent = "$0.00";
  totalText.textContent = "$0.00";
  bill = 0;
  numberP = 1;
  tip = 0;
  billInput.value = "";
  numberOfPeople.value = "";
  customTip.value = "";
  tipBtns.forEach((b) => b.classList.remove("active"));
});
