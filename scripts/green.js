import { styleSquare, doubleSize } from "./helpers/functions.js";

// @ts-ignore
export const createGreenSquare = () => {
  const greenSquare = document.getElementById("div_green");

  styleSquare(greenSquare, "green");

  // @ts-ignore
  greenSquare.addEventListener("click", () => {
    doubleSize(greenSquare);
  });

  // @ts-ignore
  if (greenSquare.style.display === "block") {
    // @ts-ignore
    greenSquare.style.display = "none";
  } else {
    // @ts-ignore
    greenSquare.style.display = "block";
  }
};
