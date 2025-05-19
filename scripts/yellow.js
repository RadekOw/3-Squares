import { styleSquare, doubleSize } from "./helpers/functions.js";

export const createYellowSquare = () => {
  const yellowSquare = document.getElementById("div_yellow");

  styleSquare(yellowSquare, "yellow");

  // @ts-ignore
  yellowSquare.addEventListener("click", () => {
    doubleSize(yellowSquare);
  });

  // @ts-ignore
  if (yellowSquare.style.display === "block") {
    // @ts-ignore
    yellowSquare.style.display = "none";
  } else {
    // @ts-ignore
    yellowSquare.style.display = "block";
  }
};
