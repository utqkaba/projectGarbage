const progress = document.getElementById("progress");
const previous = document.getElementById("prev");
const next = document.getElementById("next");
const allCircle = document.querySelectorAll(".circle");
const actives = document.querySelector(".active");

//kaç adet circleın active sınıfı aldığını sayan flag.
let flagActive = 1;

next.addEventListener("click", () => {
  flagActive++;

  if (flagActive > allCircle.length) {
    flagActive = allCircle.length;
  }

  update();
});

previous.addEventListener("click", () => {
  flagActive--;

  if (flagActive < 1) {
    flagActive = 1;
  }

  update();
});

function update() {
  allCircle.forEach((circle, idx) => {
    if (idx < flagActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  progress.style.width =
    ((actives.length - 1) / (allCircle.length - 1)) * 100 + "%";

  if (flagActive === 1) {
    previous.disabled = true;
  } else if (flagActive === allCircle.length) {
    next.disabled = true;
  } else {
    previous.disabled = false;
    next.disabled = false;
  }
}
