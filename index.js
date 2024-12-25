// COUNTER PROGRAM
// Get references to buttons and count label
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");

const CountLabel = document.getElementById("CountLabel");
let count = 0;

increaseBtn.onclick = function () {
    count++;
    CountLabel.textContent = count; 
};

decreaseBtn.onclick = function () {
    count--;
    CountLabel.textContent = count; 
};

resetBtn.onclick = function () {
    count = 0;
    CountLabel.textContent = count; 
};

