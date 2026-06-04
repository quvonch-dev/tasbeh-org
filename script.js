let decrementBtn = document.querySelector("#decrementBtn");
let incrementBtn = document.querySelector("#incrementBtn");
let p = document.querySelector("#p");
let resetBtn = document.querySelector("#reset");
let selectBtn = document.querySelector("#select");

let count = 0;
let step = 1;

function decrementStep() {
  if (count <= 0) return null
  count -= step;
  p.textContent = count;
}

function incrementStep() {
  count += step;
  p.textContent = count;
}

function resetFnc() {
  let promt = prompt("Are you sure you want to start over?");
  switch (promt) {
    case "yes":
      count = 0;
      p.textContent = count;
  }
  
}

function changeStep() {
  step = parseInt(this.value);
}

selectBtn.addEventListener("change", changeStep);
resetBtn.addEventListener("click", resetFnc);
incrementBtn.addEventListener("click", incrementStep);
decrementBtn.addEventListener("click", decrementStep);
