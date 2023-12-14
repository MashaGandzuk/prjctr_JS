"use strict";

const toggleBtn = document.querySelector(".toggle-btn");
const lastTurnDate = document.querySelector(".last-turn-date");

let isTurnedOn = true;
let lastUpdateDate = null;

toggleBtn.addEventListener("click", handleButtonClick);

restoreState();
updateUI();

function handleButtonClick() {
  isTurnedOn = !isTurnedOn;
  lastUpdateDate = new Date();
  saveState();
  updateUI();
}

function saveState() {
  localStorage.isTurnedOn = isTurnedOn;
  localStorage.lastUpdateDate = lastUpdateDate;
}

function restoreState() {
  if (localStorage.isTurnedOn !== undefined) {
    isTurnedOn = localStorage.isTurnedOn === "true";
  }
  if (localStorage.lastUpdateDate !== undefined) {
    lastUpdateDate = new Date(localStorage.lastUpdateDate);
  }
}

function updateUI() {
  const formattedDate = formatDate(lastUpdateDate);
  if (!isTurnedOn) {
    toggleBtn.innerHTML = `Turn on`;
    lastTurnDate.innerHTML = `Last turn off: ${formattedDate}`;
    document.body.classList.add("active");
  } else {
    toggleBtn.innerHTML = `Turn off`;
    lastTurnDate.innerHTML = `Last turn on: ${formattedDate}`;
    document.body.classList.remove("active");
  }
}

function formatDate(date) {
  if (date === null) {
    return "---";
  }

  return (
    date.getDate() +
    "-" +
    (date.getMonth() + 1) +
    "-" +
    date.getFullYear() +
    " " +
    date.getHours() +
    ":" +
    date.getMinutes() +
    ":" +
    date.getSeconds()
  );
}
