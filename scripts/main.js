import { createGreenSquare } from "./green.js";
import { createBlueSquare } from "./blue.js";
import { createYellowSquare } from "./yellow.js";
import { updateCounter } from "./helpers/functions.js";
import { createRandomSquare } from "./random.js";
import { changeTheme } from "./helpers/functions.js";
import { createPaletteSquare } from "./palette.js";

const greenButton = document.getElementById("green");
const blueButton = document.getElementById("blue");
const yellowButton = document.getElementById("yellow");
const randomButton = document.getElementById("random_color");

const greenCounterPlace = document.getElementById("green_counter");
const blueCounterPlace = document.getElementById("blue_counter");
const yellowCounterPlace = document.getElementById("yellow_counter");
const randomCounterPlace = document.getElementById("random_counter");

const resetButton = document.getElementById("reset_button");
const themeButton = document.getElementById("theme_button");

let greenCounter = 0;
let blueCounter = 0;
let yellowCounter = 0;
let randomCounter = 0;

// @ts-ignore
greenCounterPlace.style.marginRight = "5px";
// @ts-ignore
blueCounterPlace.style.marginRight = "5px";
// @ts-ignore
yellowCounterPlace.style.marginRight = "5px";
// @ts-ignore
randomCounterPlace.style.marginRight = "5px";

// @ts-ignore
greenButton.addEventListener("click", () => {
  createGreenSquare();

  greenCounter++;
  updateCounter(greenCounterPlace, "Green", greenCounter);
});

// @ts-ignore
blueButton.addEventListener("click", () => {
  createBlueSquare();

  blueCounter++;
  updateCounter(blueCounterPlace, "Blue", blueCounter);
});

// @ts-ignore
yellowButton.addEventListener("click", () => {
  createYellowSquare();

  yellowCounter++;
  updateCounter(yellowCounterPlace, "Yellow", yellowCounter);
});

randomButton?.addEventListener("click", () => {
  createRandomSquare();

  randomCounter++;
  updateCounter(randomCounterPlace, "Random", randomCounter);
});

// @ts-ignore
resetButton.addEventListener("click", () => {
  console.log(greenCounter);
  greenCounter = 0;
  blueCounter = 0;
  yellowCounter = 0;
  randomCounter = 0;

  updateCounter(greenCounterPlace, "Green", greenCounter);
  updateCounter(blueCounterPlace, "Blue", blueCounter);
  updateCounter(yellowCounterPlace, "Yellow", yellowCounter);
  updateCounter(randomCounterPlace, "Random", randomCounter);
});

themeButton?.addEventListener("click", () => {
  changeTheme();
});

// @ts-ignore
const palette = document.getElementById("palette");
const paletteContainer = document.getElementById("palette_container");
const divPalette = document.getElementById("div_palette");

// @ts-ignore
paletteContainer.style.display = "none";
// @ts-ignore
paletteContainer.style.position = "fixed";
// @ts-ignore
paletteContainer.style.right = "100px";
// @ts-ignore
paletteContainer.style.top = "100px";
// @ts-ignore
paletteContainer.style.border = "3px solid black";
palette?.addEventListener("click", () => {
  // @ts-ignore
  if (paletteContainer.style.display === "none") {
    // @ts-ignore
    paletteContainer.style.display = "block";
  } else {
    // @ts-ignore
    paletteContainer.style.display = "none";
  }
});

const colorBox = document.createElement("div");
colorBox.style.width = "30px";
colorBox.style.height = "30px";
colorBox.style.backgroundColor = "blue";

colorBox.addEventListener("click", () => {
  createPaletteSquare('blue');
});

const colorBox2 = document.createElement("div");
colorBox2.style.width = "30px";
colorBox2.style.height = "30px";
colorBox2.style.backgroundColor = "green";

colorBox2.addEventListener("click", () => {
  createPaletteSquare('green');
});

const colorBox3 = document.createElement("div");
colorBox3.style.width = "30px";
colorBox3.style.height = "30px";
colorBox3.style.backgroundColor = "yellow";

colorBox3.addEventListener("click", () => {
  createPaletteSquare('yellow');
});

const colorBox4 = document.createElement("div");
colorBox4.style.width = "30px";
colorBox4.style.height = "30px";
colorBox4.style.backgroundColor = "red";

colorBox4.addEventListener("click", () => {
  createPaletteSquare('red');
});

paletteContainer?.appendChild(colorBox);
paletteContainer?.appendChild(colorBox2);
paletteContainer?.appendChild(colorBox3);
paletteContainer?.appendChild(colorBox4);
