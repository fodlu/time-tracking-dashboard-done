//declaration
const duration = document.querySelector(".duration");
const dur = document.querySelectorAll(".dur");
const individual = document.querySelectorAll(".individual");
const play = document.querySelectorAll(".play");
const study = document.querySelectorAll(".study");
const exercise = document.querySelectorAll(".exercise");
const social = document.querySelectorAll(".social");
const selfCare = document.querySelectorAll(".selfCare");
const work = document.querySelectorAll(".work");
const time = document.querySelectorAll(".time");
const previous = document.querySelectorAll(".previous");
const pre = document.querySelectorAll(".pre");
const now = document.querySelectorAll(".now");
const others = document.querySelectorAll(".others");

//arrays

const Dailynow = ["5hrs", "1hrs", "0hrs", "1hrs", "1hrs", "0hrs"];
const Dailypre = [
  "Previous - 7hrs",
  "Previous - 2hrs",
  "Previous - 1hrs",
  "Previous - 1hrs",
  "Previous - 3hrs",
  "Previous - 1hrs",
];
const Weeklynow = ["32hrs", "10hrs", "4hrs", "4hrs", "5hrs", "2hrs"];
const Weeklypre = [
  "Previous - 36hrs",
  "Previous - 8hrs",
  "Previous - 7hrs",
  "Previous - 5hrs",
  "Previous - 10hrs",
  "Previous - 2hrs",
];
const Monthlynow = ["103hrs", "29hrs", "13hrs", "18hrs", "23hrs", "7hrs"];
const Monthlypre = [
  "Previous - 128hrs",
  "Previous - 23hrs",
  "Previous - 19hrs",
  "Previous - 18hrs",
  "Previous - 29hrs",
  "Previous - 11hrs",
];

duration.addEventListener("click", (e) => {
  e.preventDefault();
  const clicked = e.target;
  if (clicked.classList.contains("dur")) {
    dur.forEach((d) => {
      d.classList.remove("active");
    });
  }
  clicked.classList.add("active");
  // const position = clicked.dataset.tab;

  if (clicked.textContent === "Daily") {
    for (let i = 0; i < now.length; i++) {
      now[i].textContent = Dailynow[i];
      pre[i].textContent = Dailypre[i];
    }
  }
  if (clicked.textContent === "Weekly") {
    for (let i = 0; i < now.length; i++) {
      now[i].textContent = Weeklynow[i];
      pre[i].textContent = Weeklypre[i];
    }
  }
  if (clicked.textContent === "Monthly") {
    for (let i = 0; i < now.length; i++) {
      now[i].textContent = Monthlynow[i];
      pre[i].textContent = Monthlypre[i];
    }
  }
});
