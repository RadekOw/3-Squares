import { styleSquare, doubleSize } from "./helpers/functions.js";

export const createRandomSquare = () => {
  const randomSquare = document.getElementById("div_random");

  // const colorsPalette = ["blue", "green", "yellow", "red", "pink", "gray"];
  // const randomIndex = Math.floor(Math.random() * colorsPalette.length);
  // const randomColor = colorsPalette[randomIndex];
  styleSquare(randomSquare, "random");
  randomSquare?.addEventListener("click", () => {
    doubleSize(randomSquare);
  });

  if (randomSquare?.style.display === "block") {
    // @ts-ignore
    randomSquare.style.display = "none";
  } else {
    // @ts-ignore
    randomSquare.style.display = "block";
  }
};
